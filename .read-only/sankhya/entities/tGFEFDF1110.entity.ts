import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF1110',
  ['codemp', 'dtref', 'regniv1', 'seq1100', 'seq1105', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDF1110', { schema: 'SANKHYA' })
export class Tgfefdf1110Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQ1100' })
  seq1100: number;

  @Column('int', { primary: true, name: 'SEQ1105' })
  seq1105: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1110'" })
  registro: string;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('varchar', { name: 'CHV_NFE', nullable: true, length: 44 })
  chvNfe: string | null;

  @Column('varchar', { name: 'NR_MEMO', nullable: true, length: 15 })
  nrMemo: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
