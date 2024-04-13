import * as fal from "@fal-ai/serverless-client";
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest, NextResponse } from "next/server";

// Create an OpenAI API client (that's edge friendly!)
// but configure it to point to fireworks.ai
const fireworks = new OpenAI({
  apiKey: process.env.FIREWORKS_API_KEY || "",
  baseURL: "https://api.fireworks.ai/inference/v1",
});
// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { content } = await req.json();
  const prompt = `
You are a prompt writer for Stable Diffusion text to video model.
Write a prompt that shows Taylor Swift Ai assistant, dressed beautifully, and answering the question for the user that just woke up.
This is the user message, respond to the emotional tone of the message with your facial expressions.

  ${content}`;

  // Request the OpenAI API for the response based on the prompt
  try {
    const response = await fireworks.completions.create({
      model: "accounts/fireworks/models/llama-v2-70b-chat",
      stream: false,
      max_tokens: 1000,
      prompt,
    });
    console.log("response", response);

    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo-0125",
    //   stream: true,
    //   messages: messages,
    // });

    const result = await fal.subscribe(
      "fal-ai/fast-animatediff/text-to-video",
      {
        input: {
          prompt: prompt,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            update.logs.map((log) => log.message).forEach(console.log);
          }
        },
      }
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("test", error);
  }
}
