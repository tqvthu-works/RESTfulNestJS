import { STATUS } from '../constant/common';
export interface IResult<D = any> {
    status: boolean;
    data: D;
}
export type TStatus = (typeof STATUS)[keyof typeof STATUS];

export interface IPagination<I> {
    next_page?: string;
    previous_page?: string;
    data: I[];
}

export interface IUploadFile {
    file: any;
    mimetype: string;
    filename: string;
}
