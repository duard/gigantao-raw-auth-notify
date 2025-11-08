import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSCALOCONOTA', ['codcal', 'seqocor', 'seqnota'], { unique: true })
@Entity('TMSCALOCONOTA', { schema: 'SANKHYA' })
export class TmscaloconotaEntity {
  @Column('int', { primary: true, name: 'CODCAL' })
  codcal: number;

  @Column('int', { primary: true, name: 'SEQOCOR' })
  seqocor: number;

  @Column('int', { primary: true, name: 'SEQNOTA' })
  seqnota: number;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 100 })
  chavenfe: string | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('varchar', { name: 'SITUACAODEV', nullable: true, length: 10 })
  situacaodev: string | null;

  @Column('varchar', { name: 'SITUACAOFAL', nullable: true, length: 10 })
  situacaofal: string | null;

  @Column('varchar', { name: 'SITUACAOAVA', nullable: true, length: 10 })
  situacaoava: string | null;

  @Column('float', { name: 'PESOTOT', nullable: true, precision: 53 })
  pesotot: number | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;
}
