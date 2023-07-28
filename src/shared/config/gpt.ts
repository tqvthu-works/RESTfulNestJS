import 'dotenv/config';
export const gptService = {
    you: 'you',
    forefront: 'forefront',
};

const gptTone = {
    expert: 'expert',
    daring: 'daring',
    playful: 'playful',
    sophisticated: 'sophisticated',
    persuasive: 'persuasive',
    supportive: 'supportive',
    optimistic: 'optimistic',
};

export const gptConfig = {
    mode: process.env.GPT_MODE || 'local', // local, remote (use remote server to generate content instead of local)
    url: process.env.GPT_REMOTE_API_URL,
    api_key: process.env.GPT_REMOTE_API_KEY,
    service: gptService.you,
    tone: gptTone,
    language: 'en',
};
