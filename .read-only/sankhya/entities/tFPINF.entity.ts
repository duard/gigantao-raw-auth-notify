import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPINF', ['codinffisc'], { unique: true })
@Entity('TFPINF', { schema: 'SANKHYA' })
export class TfpinfEntity {
  @Column('smallint', { primary: true, name: 'CODINFFISC' })
  codinffisc: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('varchar', { name: 'HISTORICO', nullable: true, length: 255 })
  historico: string | null;

  @Column('smallint', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('int', { name: 'CODNAT' })
  codnat: number;

  @Column('int', { name: 'CODPROJ' })
  codproj: number;

  @Column('smallint', { name: 'CODTIPTIT' })
  codtiptit: number;

  @Column('smallint', { name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('char', { name: 'TIPOCHEQUE', length: 1 })
  tipocheque: string;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;

  @Column('datetime', { name: 'DTVENC' })
  dtvenc: Date;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;
}
