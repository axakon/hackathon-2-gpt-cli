import { createOpenAiClient } from "./lib/openai";
import promptSync from "prompt-sync";
import { execSync } from "child_process"

// Use this to read input from the user.
const prompt = promptSync();

// Create a openai API client.
const openAiClient = createOpenAiClient()

export default async function gptCli(userInput: string) {
  /**
   * YOUR CODE HERE.
   */

  // Example how to use openAiClient:
  const responseObject = await openAiClient.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: userInput }
    ]
  })

  const responseFromChatGpt = responseObject.choices[0]?.message.content;

  if(!responseFromChatGpt) {
    throw new Error("Got not response from")
  }

  console.log(responseFromChatGpt)
}


// Execute the main function if the file is run as a script
if (process.argv[1] !== undefined) {
  const userInput = process.argv[2];
  if(userInput == undefined) {
    throw new Error("Argument prompt is required.")
  }
  await gptCli(userInput)
}
