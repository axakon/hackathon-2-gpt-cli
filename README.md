# Challenge: GPT CLI
The challenge is to use chatgpt to take some human readable text, translate it to a terminal command and then execute it.

## Setup
1. Create .env file and add Open AI API key, ask someone in the knowledge team for a key.
```
OPEN_AI_API_KEY=<key>
```
2. Install dependencies with `npm i`.
3. Run script with `npm run gpt-cli "test prompt"`.

## Steps to complete the challenge

You need to make the function in `./src/index.ts` do the following:
   1. Use ChatGPT to transform the user input to a terminal command.
   2. Show the command chatGPT wants to run and prompt the user in the terminal with a Yes/No if the want to execute the command.
   3. If the users answers Yes, run the command.

## Example
- User runs `npm run gpt-cli "create a folder name projects"`.
- Your program outputs `Do you want to run "mkdir projects" Y/n? `
- `mkdir project` is executed if users anwsers `Y`.


## Bonus 
- Make in work on any OS by automatically detecting the operating system and including that in your prompt.
- If ChatGPT doesn't understand what the users wants to do, print an error.
