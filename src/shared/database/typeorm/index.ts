/**
 * This config is majorly for typeorm migration cli
 * Do not use @/share/config/database because typeorm cli do not config path from tsconfig
 */
import { DataSource } from 'typeorm';
import { typeormDBConfig } from '../../config/database';
export default new DataSource(typeormDBConfig);
