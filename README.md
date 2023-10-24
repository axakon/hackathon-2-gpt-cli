# Challenge: GPT CLI
The challenge is to use chatgpt to take some human readable text, translate it to a terminal command and then execute it.

- [Challenge: GPT CLI](#challenge-gpt-cli)
  - [Setup](#setup)
  - [Steps to complete the challenge](#steps-to-complete-the-challenge)
  - [Example](#example)
  - [Hints](#hints)
    - [Read user input](#read-user-input)
    - [Execute terminal command](#execute-terminal-command)
  - [Bonus](#bonus)

## Setup
1. Create .env file and add Open AI API key, ask someone in the knowledge team for a key.
```
OPEN_AI_API_KEY=<key>
```
2. Install dependencies with `npm i`.
3. Run program with `npm run gpt-cli <prompt>`. You can test everythings working with a test prompt.
```bash
# Should output axakon.
npm run gpt-cli "say axakon"
```


## Steps to complete the challenge

You need to make the function in `./src/index.ts` do the following:
   1. Use ChatGPT to transform the user input to a terminal command.
   2. Show the command chatGPT wants to run and prompt the user in the terminal with a Yes/No if the want to execute the command.
   3. If the users answers Yes, run the command.

## Example
- User runs `npm run gpt-cli "create a folder name projects"`.
- Your program outputs `Do you want to run "mkdir projects" Y/n? `
- `mkdir project` is executed if users anwsers `Y`.


## Hints
### Read user input
To read user input we've added the package `prompt-sync`.
```ts
const prompt = promptSync();
const usersName = prompt("What's your name?")
```
### Execute terminal command
To execute a terminal command, use `execSync`
```ts
import { execSync } from "child_process"

execSync("mkdir projects")
```

## Bonus
- Make in work on any OS by automatically detecting the operating system and including that in your prompt.
- If ChatGPT doesn't understand what the users wants to do, print an error.