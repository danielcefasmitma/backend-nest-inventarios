import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Almacen } from '../../almacen/entities/almacen.entity';

@Entity('sucursales')
export class Sucursal {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255, nullable: false })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  direccion?: string;

  @Column({ length: 20, nullable: true })
  telefono?: string;

  @Column({ length: 100, nullable: true })
  ciudad?: string;

  @OneToMany(() => Almacen, (alm) => alm.sucursal)
  almacenes!: Almacen[];
}
