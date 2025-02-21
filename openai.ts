// lib/openai.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getTaskSuggestions(taskDescription: string) {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant for task management.' },
      { role: 'user', content: `Suggest subtasks for: ${taskDescription}` },
    ],
    max_tokens: 100,
  });

  return response.choices[0]?.message?.content?.split('\n') ?? ['No suggestions available.'];
}
import OpenAI from 'openai';


