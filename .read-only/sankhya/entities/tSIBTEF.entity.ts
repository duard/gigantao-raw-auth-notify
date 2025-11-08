import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIBTEF_CODIGO', ['codigo'], { unique: true })
@Entity('TSIBTEF', { schema: 'SANKHYA' })
export class TsibtefEntity {
  @Column('varchar', { primary: true, name: 'CODIGO', length: 10 })
  codigo: string;

  @Column('varchar', { name: 'BANDEIRA', length: 50 })
  bandeira: string;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 50 })
  tipo: string | null;
}
