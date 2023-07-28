import { Controller, Get, Req, Res } from '@nestjs/common';
import { ShopAuthService } from './shopify-auth.service';
import { ApiController } from '@/shared/api.controller';
import { IApiResponse } from '@/shared/interfaces/common.interface';
import { Request, Response } from 'express';

@Controller('api')
export class ShopifyAuthController extends ApiController {
    constructor(private readonly shopifyAuthService: ShopAuthService) {
        super();
    }
    @Get('install')
    async install(@Req() request: Request, @Res() res: Response): Promise<any> {
        const data: IApiResponse = await this.shopifyAuthService.install(request);
        return this.response(res, data);
    }
}
