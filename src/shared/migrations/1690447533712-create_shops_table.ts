import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateShopsTable1690447533712 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'shops',
                columns: [
                    new TableColumn({
                        name: 'id',
                        type: 'bigint',
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: false,
                    }),
                    new TableColumn({
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'shopify_domain',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                        isUnique: true,
                    }),
                    new TableColumn({
                        name: 'domain',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                        isUnique: true,
                    }),
                    new TableColumn({
                        name: 'owner',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'timezone',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'country',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'currency',
                        type: 'varchar',
                        length: '25',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'access_token',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'sf_access_token',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'uninstalled_at',
                        type: 'timestamp',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'plan_name',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'is_test',
                        type: 'boolean',
                        isNullable: true,
                        default: false,
                    }),
                    new TableColumn({
                        name: 'status',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'app_plan',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'charge_id',
                        type: 'bigint',
                        unsigned: true,
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'quest',
                        type: 'json',
                        isNullable: true,
                        default:
                            '\'{"extension_installed": false, "content_generated": false, "review_written": false}\'',
                    }),
                    new TableColumn({
                        name: 'downgradable',
                        type: 'boolean',
                        isNullable: true,
                        default: false,
                    }),
                    new TableColumn({
                        name: 'is_onboarding',
                        type: 'boolean',
                        isNullable: true,
                        default: false,
                    }),
                    new TableColumn({
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: true,
                    }),
                    new TableColumn({
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: true,
                    }),
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the "shops" table
        await queryRunner.dropTable('shops');
    }
}
