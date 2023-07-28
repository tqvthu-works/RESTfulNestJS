export interface IApiResponse<E = any> {
    http_code?: number;
    status: boolean;
    data: E | E[];
    message?: string | any;
}
