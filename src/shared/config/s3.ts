import 'dotenv/config';
export const s3Config = {
    access_key_id: process.env.AWS_ACCESS_KEY_ID,
    secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.S3_REGION,
    bucket: process.env.S3_BUCKET,
    url: process.env.AWS_URL,
};
