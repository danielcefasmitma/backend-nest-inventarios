import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { AlmacenProducto } from '../../almacen/entities/almacen_prodcuto.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text', nullable: false })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ length: 255, nullable: true })
  marca?: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  precio_venta_actual?: number;

  @Column({ length: '255', nullable: true })
  imagen?: string;

  @Column({ type: 'boolean' })
  estado!: boolean;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos, {
    eager: true,
  })
  categoria!: Categoria;

  @OneToMany(() => AlmacenProducto, (ap) => ap.producto)
  almacenes!: AlmacenProducto[];
}
