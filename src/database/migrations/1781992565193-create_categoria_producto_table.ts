import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoriaProductoTable1781992565193 implements MigrationInterface {
    name = 'CreateCategoriaProductoTable1781992565193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "producto" ("id" integer NOT NULL, "nombre" text NOT NULL, "descripcion" text, "marca" character varying(255), "precio_venta_actual" numeric(12,2) NOT NULL, "imagen" character varying(255), "estado" boolean NOT NULL, "categoriaId" integer, CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categoria" ("id" integer NOT NULL, "nombre" character varying(255) NOT NULL, "descripcion" text, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "FK_6465b0476dcfd393c4808d53b95" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "FK_6465b0476dcfd393c4808d53b95"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "producto"`);
    }

}
