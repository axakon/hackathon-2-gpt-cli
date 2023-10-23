import OpenAI from "openai";

export function createOpenAiClient() {
    const apiKey = process.env.OPEN_AI_API_KEY;
    if(!apiKey) {
        throw new Error("Environment variable 'OPEN_AI_API_KEY' not set.")
    }
    const client = new OpenAI({ apiKey });
    return client;
}