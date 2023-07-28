import { Injectable } from "@nestjs/common";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({name: "shops"})
export class Shop extends BaseEntity {
    static readonly CHECK=2;
    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({ nullable: true }) 
    name: string;

    @Column({ unique: true, nullable: false })
    shopify_domain: string;

    @Column({ nullable: true, unique: true })
    domain: string;

    @Column({ nullable: true })
    owner: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    timezone: string;

    @Column({ nullable: true })
    country: string;

    @Column({ nullable: true })
    currency: string;

    @Column({ nullable: true })
    access_token: string;

    @Column({ nullable: true })
    sf_access_token: string;

    @Column({ nullable: true })
    uninstalled_at: Date;

    @Column({ nullable: true })
    plan_name: string;

    @Column({ nullable: true, default: false })
    is_test: boolean;

    @Column({ nullable: true })
    status: string;

    @Column({ nullable: true })
    app_plan: string;

    @Column({ nullable: true })
    charge_id: number;

    @Column({ nullable: true, type: 'jsonb' })
    quest: Record<string, any>;

    @Column({ nullable: true, default: false })
    downgradable: boolean;

    @Column({ nullable: true, default: false })
    is_onboarding: boolean;



    @Column({ nullable: true })

    @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
