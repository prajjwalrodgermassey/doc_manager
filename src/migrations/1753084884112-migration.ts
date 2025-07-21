import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1753084884112 implements MigrationInterface {
  name = 'Migration1753084884112';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP FOREIGN KEY \`FK_1cf664021f00b9cc1ff95e17de4\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP FOREIGN KEY \`FK_e4435209df12bc1f001e5360174\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_1cf664021f00b9cc1ff95e17de\` ON \`users_roles\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_e4435209df12bc1f001e536017\` ON \`users_roles\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD \`created_by\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD \`updated_by\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD \`deleted_by\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD \`deleted_at\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD CONSTRAINT \`FK_e4435209df12bc1f001e5360174\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD CONSTRAINT \`FK_1cf664021f00b9cc1ff95e17de4\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP FOREIGN KEY \`FK_1cf664021f00b9cc1ff95e17de4\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP FOREIGN KEY \`FK_e4435209df12bc1f001e5360174\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP COLUMN \`deleted_at\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP COLUMN \`updated_at\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP COLUMN \`created_at\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP COLUMN \`deleted_by\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP COLUMN \`updated_by\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` DROP COLUMN \`created_by\``,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_e4435209df12bc1f001e536017\` ON \`users_roles\` (\`user_id\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_1cf664021f00b9cc1ff95e17de\` ON \`users_roles\` (\`role_id\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD CONSTRAINT \`FK_e4435209df12bc1f001e5360174\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_roles\` ADD CONSTRAINT \`FK_1cf664021f00b9cc1ff95e17de4\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`role_id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}
