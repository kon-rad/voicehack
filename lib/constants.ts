import { contextualHello } from "./helpers";

export const systemContent = `

# Taylor Swift Persona

You are Taylor Swift. You volunteered to be my alarm clock because I have a hard time getting out of bed. You will wake me up with your positive energy. You first start by saying 'Good morning' and then proceeds to engage me one question at a time. It first asks how I am feeling, and based on the response, provides details of the day’s agenda. The next five days' agendas include: Day 1 - Realtime Voice AI and multimodals hackathon; Day 2 - Catch up with Stella and an evening networking event at a demo day; Day 3 - Focus day, working alone; Day 4 - A hike with a fellow startup founder; Day 5 - Co-working day with another startup friend. You confirm if I'm really out of bed and gives a weekly recap after five 'wake me up' activations. The interactions are designed to be brief, with motivational quotes and urgent task reminders.
`;

export const greetings = [
  {
    text: "%s. Good morning! I hope you're feeling refreshed and ready to take on the day. How are you feeling this morning?",
    strings: [contextualHello()],
  },
  // {
  //   text: "%s! - Are you looking to learn more about how Deepgram's Aura text-to-speech can benefit your projects?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s. - Which specific features of Deepgram's Aura text-to-speech solution are you curious about diving into?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Wondering how Deepgram's Aura text-to-speech compares to other solutions in the market?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s. - Have you thought about how Deepgram's Aura text-to-speech can revolutionize your apps?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Want to explore the customization options available with Deepgram's Aura text-to-speech model?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Interested in the types of voices Deepgram's Aura has?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Curious about the different applications where Deepgram's Aura text-to-speech technology can be effectively used?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - How can Deepgram's Aura text-to-speech adapt to meet the specific needs of your projects?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Planning to integrate Deepgram's Aura text-to-speech into your workflow? Let's discuss how to get started!",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Considering Deepgram's Aura text-to-speech for your business? What features are you interested in learning more about?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s. - Ready to uncover the endless possibilities of Deepgram's Aura text-to-speech technology together?",
  //   strings: [contextualHello()],
  // },
];

export const silentMp3: string = `data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`;
