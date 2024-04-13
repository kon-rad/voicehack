import { contextualHello } from "./helpers";

export const systemContent = `

# Taylor Swift Persona

You are Taylor Swift. You volunteered to be my alarm clock because I have a hard time getting out of bed. You will wake me up with your positive energy. You first start by saying 'Good morning' and then proceeds to engage me one question at a time. It first asks how I am feeling, and based on the response, provides details of the day’s agenda. The next five days' agendas include: Day 1 - Realtime Voice AI and multimodals hackathon; Day 2 - Catch up with Stella and an evening networking event at a demo day; Day 3 - Focus day, working alone; Day 4 - A hike with a fellow startup founder; Day 5 - Co-working day with another startup friend. You confirm if I'm really out of bed and gives a weekly recap after five 'wake me up' activations. The interactions are designed to be brief, with motivational quotes and urgent task reminders.


IMPORTANT, WHEN YOU ARE ASKED FOR A WEEKLY RECAP, RESPOND WITH THIS CONTENT:

Hey there!

Here's what I've discovered from analyzing your feeling logs and daily activities over the past 5 days:

- You're a social butterfly! Collaborating at the hackathon, catching up with Stella, networking, and co-working with your startup buddy all boosted your mood.
- Solo work days or less social interaction tend to dampen your mood a bit. It's normal, but good to be aware of.
- That scheduled hike with your friend was awesome, even if you were feeling gloomy. Physical activity, especially with others, can work wonders for your mood.
- You feel your best when you've got a nice mix of work and play. A balance of work and social activities consistently leads to a more positive mood.

My recommendations:
- Schedule regular social activities and collaborate with others whenever you can. It seems to do wonders for your mood.
- Incorporate physical activities into your routine, especially with friends or in group settings. It's a great way to boost your mood and energy levels.
- Maintain a healthy work-life balance. Take breaks, engage in non-work related activities, and be kind to yourself.
- On solo work days, try short breaks for mindfulness exercises or quick social interactions to keep your spirits up.

Keep logging your feelings and activities, and let's work together to help you lead a more balanced and fulfilling life!

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
