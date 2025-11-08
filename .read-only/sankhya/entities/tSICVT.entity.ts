import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSICPT', ['colcon'], { unique: true })
@Entity('TSICVT', { schema: 'SANKHYA' })
export class TsicvtEntity {
  @Column('char', { primary: true, name: 'COLCON', length: 30 })
  colcon: string;

  @Column('text', { name: 'CONSULTA', nullable: true })
  consulta: string | null;

  @Column('char', { name: 'COLRET', length: 30 })
  colret: string;

  @Column('char', { name: 'COLEXIBE', nullable: true, length: 30 })
  colexibe: string | null;
}
