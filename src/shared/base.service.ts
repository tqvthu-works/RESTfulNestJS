import { Injectable, Scope } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class BaseService<Entity> {
    protected repository: Repository<Entity>;
    constructor(repository: Repository<Entity>) {
        this.repository = repository;
    }
}
