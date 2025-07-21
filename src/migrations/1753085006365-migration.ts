import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1753085006365 implements MigrationInterface {
  name = 'Migration1753085006365';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`permission\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`roles_permissions\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`role\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`role\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`roles_permissions\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`permission\` CHANGE \`deleted_by\` \`deleted_by\` varchar(255) NOT NULL`,
    );
  }
}
