import { createOpenAiClient } from "./lib/openai";
import promptSync from "prompt-sync";
import { exec } from "child_process"

const prompt = promptSync();

// Create a openai API client.
const openAiClient = createOpenAiClient()

export default async function gptCli(userInput: string) {
  /**
   * YOUR CODE HERE.
   * Example how to use openAiClient below.
   */
  const response = await openAiClient.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: "Name a random animal." }
    ]
  })

  const responseMessage = response.choices[0]?.message.content;

  console.log(responseMessage)
}


// Execute the main function if the file is run as a script
if (process.argv[1] !== undefined) {
  const userInput = process.argv[2];
  if(userInput == undefined) {
    throw new Error("Argument prompt is required.")
  }
  await gptCli(userInput)
}
