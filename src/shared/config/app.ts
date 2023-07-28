import 'dotenv/config';
import { APP_ENVS } from '../constant/app';
export const appConfig = {
    env: process.env.APP_ENV ?? APP_ENVS.LOCAL,
    port: process.env.APP_PORT ?? 3000,
    lang: ['en'],
    providers: ['AppServiceProvider'],
    host: process.env.HOST ?? 'http://localhost',
    url: process.env.APP_URL ?? 'http://localhost',
    fe_url: process.env.FE_URL ?? 'http://localhost',
    webhook_url: process.env.WEBHOOK_URL ?? 'http://localhost',
};
