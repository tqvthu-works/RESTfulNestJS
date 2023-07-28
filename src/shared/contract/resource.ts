import { DATASOURCE } from '../constant/resource';

export type TDataSource = (typeof DATASOURCE)[keyof typeof DATASOURCE];
