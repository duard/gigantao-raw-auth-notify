import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE240',
  ['codemp', 'dtref', 'regniv1', 'seqe200', 'regniv3', 'seqe220', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFE240', { schema: 'SANKHYA' })
export class Tgfefdfe240Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'E001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQE200' })
  seqe200: number;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV3',
    length: 4,
    default: () => "'E210'",
  })
  regniv3: string;

  @Column('int', { primary: true, name: 'SEQE220' })
  seqe220: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E240'" })
  registro: string;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('int', { name: 'SUB', nullable: true })
  sub: number | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('float', { name: 'VL_AJ_ITEM', nullable: true, precision: 53 })
  vlAjItem: number | null;

  @Column('varchar', { name: 'CHV_DOCE', nullable: true, length: 44 })
  chvDoce: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
