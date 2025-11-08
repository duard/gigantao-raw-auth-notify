import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPFRE', ['codreint'], { unique: true })
@Entity('TFPFRE', { schema: 'SANKHYA' })
export class TfpfreEntity {
  @Column('int', { primary: true, name: 'CODREINT' })
  codreint: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('datetime', { name: 'DTREFERENCIA', nullable: true })
  dtreferencia: Date | null;

  @Column('datetime', { name: 'DTRETORNO', nullable: true })
  dtretorno: Date | null;

  @Column('char', { name: 'TIPFOLHA', nullable: true, length: 1 })
  tipfolha: string | null;

  @Column('float', { name: 'SALLIQ', nullable: true, precision: 53 })
  salliq: number | null;

  @Column('float', { name: 'SALBRUTO', nullable: true, precision: 53 })
  salbruto: number | null;

  @Column('datetime', { name: 'DTDEM', nullable: true })
  dtdem: Date | null;

  @Column('varchar', { name: 'AFASTFGTS', nullable: true, length: 2 })
  afastfgts: string | null;
}
