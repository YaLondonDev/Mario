import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1611512097570 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `INSERT INTO theme_entity VALUES (0, 'Default', '#fa5c5c', '#fff', '#152f3b', '#fff', true, 'admin');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DELETE FROM theme_entity WHERE id = 0`);
  }
}
