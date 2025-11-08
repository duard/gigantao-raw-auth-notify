import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE113',
  ['codemp', 'dtref', 'regniv1', 'seqe100', 'regniv3', 'seqe111', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFE113', { schema: 'SANKHYA' })
export class Tgfefdfe113Entity {
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

  @Column('int', { primary: true, name: 'SEQE100' })
  seqe100: number;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV3',
    length: 4,
    default: () => "'E110'",
  })
  regniv3: string;

  @Column('int', { primary: true, name: 'SEQE111' })
  seqe111: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E113'" })
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
