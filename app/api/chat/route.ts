import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const saveCompletionToDatabase = (prompt: string) => {
  console.log("save ", prompt);
};
// Create an OpenAI API client (that's edge friendly!)
// but configure it to point to fireworks.ai
const fireworks = new OpenAI({
  apiKey: process.env.FIREWORKS_API_KEY || "",
  baseURL: "https://api.fireworks.ai/inference/v1",
});
// IMPORTANT! Set the runtime to edge
export const runtime = "edge";
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  console.log("post /api/chat");

  // Ask Fireworks for a streaming chat completion using Llama 2 70b model
  // @see https://app.fireworks.ai/models/fireworks/llama-v2-70b-chat
  const response = await fireworks.chat.completions.create({
    model: "accounts/fireworks/models/llama-v2-70b-chat",
    stream: true,
    max_tokens: 1000,
    messages,
  });

  const savePromptToDatabase = (prompt: string) => {
    console.log("save ", prompt);
  };
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response, {
    onStart: async () => {
      // This callback is called when the stream starts
      // You can use this to save the prompt to your database
      await savePromptToDatabase(response);
    },
    onToken: async (token: string) => {
      // This callback is called for each token in the stream
      // You can use this to debug the stream or save the tokens to your database
      console.log(token);
    },
    onCompletion: async (completion: string) => {
      // This callback is called when the stream completes
      // You can use this to save the final completion to your database
      await saveCompletionToDatabase(completion);
    },
  });

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
