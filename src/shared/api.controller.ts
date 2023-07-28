import { HttpStatus, Res } from '@nestjs/common';
import { IApiResponse } from './interfaces/common.interface';
import { apiConfig } from './config/api';
import { Response } from 'express';

export class ApiController {
    protected async response(@Res() res: Response, data: IApiResponse): Promise<any> {
        const httpCode = data.http_code;
        if (!data.message) {
            data.message = apiConfig.message.error.common;
            if (data.http_code == HttpStatus.OK) {
                data.message = apiConfig.message.success.common;
            }
        }
        delete data.http_code;
        return res.status(httpCode).json(data);
    }
}
