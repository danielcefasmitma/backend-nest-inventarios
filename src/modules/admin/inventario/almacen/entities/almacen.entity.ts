import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Sucursal } from '../../sucursal/entities/sucursal.entity';
import { AlmacenProducto } from './almacen_prodcuto.entity';

@Entity()
export class Almacen {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100, nullable: true })
  codigo!: string;

  @Column({ length: 100, nullable: true })
  descripcion?: string;

  @ManyToOne(() => Sucursal, (suc) => suc.almacenes, { eager: true })
  sucursal!: Sucursal;

  @OneToMany(() => AlmacenProducto, (ap) => ap.almacen)
  productos!: AlmacenProducto[];
}
