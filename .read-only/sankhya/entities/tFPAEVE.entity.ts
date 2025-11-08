import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPAEVE', ['caracteristica'], { unique: true })
@Entity('TFPAEVE', { schema: 'SANKHYA' })
export class TfpaeveEntity {
  @Column('varchar', { primary: true, name: 'CARACTERISTICA', length: 25 })
  caracteristica: string;

  @Column('smallint', { name: 'CODEVENTO', nullable: true })
  codevento: number | null;

  @Column('varchar', { name: 'PADRONIZAR', nullable: true, length: 1 })
  padronizar: string | null;

  @Column('varchar', { name: 'REVERTER', nullable: true, length: 1 })
  reverter: string | null;

  @Column('smallint', { name: 'CODEVENTOANT', nullable: true })
  codeventoant: number | null;

  @Column('varchar', { name: 'TROCACTX', length: 1, default: () => "'N'" })
  trocactx: string;
}
