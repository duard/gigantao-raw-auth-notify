import { Column, Entity, Index } from 'typeorm';

@Index('PK_TPRSERMP', ['idiproc', 'codprodmp', 'seriemp'], { unique: true })
@Entity('TPRSERMP', { schema: 'SANKHYA' })
export class TprsermpEntity {
  @Column('int', { primary: true, name: 'CODPRODMP' })
  codprodmp: number;

  @Column('varchar', { primary: true, name: 'SERIEMP', length: 100 })
  seriemp: string;

  @Column('int', { name: 'NUAPO' })
  nuapo: number;

  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { name: 'CODPRODPA', nullable: true })
  codprodpa: number | null;

  @Column('varchar', { name: 'SERIEPA', nullable: true, length: 100 })
  seriepa: string | null;

  @Column('char', { name: 'LIBERADO', nullable: true, length: 1 })
  liberado: string | null;
}
