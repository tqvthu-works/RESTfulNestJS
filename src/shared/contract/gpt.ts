export interface IGptChatOptions {
    [key: string]: any;
}

export interface IGptChatResponse {
    content?: string;
    error?: string;
}

export type TGptMessage = {
    role: string;
    content: string;
};

export enum EGptModelType {
    GPT3P5_TURBO = 'gpt3.5-turbo',
    GPT_3P5_TURBO = 'gpt-3.5-turbo',
    GPT_3P5_16K = 'gpt-3.5-turbo-16k',
    GPT4 = 'gpt4',
    NET_GPT3P5 = 'net-gpt3.5-turbo',
}

export interface IGptChatRequest {
    prompt: string;
    model: EGptModelType;
    site?: Site;
}

export enum Site {
    Remote = 'remote',
    You = 'you',
    // Phind = 'phind',
    Mcbbs = 'mcbbs',
    ChatDemo = 'chatdemo',
    Vita = 'vita',
    Xun = 'xun',
}

export type TGptAskOptions = {
    model?: EGptModelType;
    site?: Site;
    remote?: boolean; // remote or local -> call gpt api or call gpt locally
};
