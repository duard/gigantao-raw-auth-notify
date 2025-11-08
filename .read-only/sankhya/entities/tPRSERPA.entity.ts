import { Column, Entity, Index } from 'typeorm';

@Index('PK_TPRSERPA', ['idiproc', 'codprodpa', 'seriepa'], { unique: true })
@Entity('TPRSERPA', { schema: 'SANKHYA' })
export class TprserpaEntity {
  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { primary: true, name: 'SERIEPA', length: 100 })
  seriepa: string;

  @Column('char', { name: 'PERDA', length: 1 })
  perda: string;

  @Column('char', { name: 'LIBERADO', length: 1 })
  liberado: string;

  @Column('int', { name: 'NUAPO', nullable: true })
  nuapo: number | null;
}
