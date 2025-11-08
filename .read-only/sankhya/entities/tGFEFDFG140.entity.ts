import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFG140',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqg125', 'seqg130', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFG140', { schema: 'SANKHYA' })
export class Tgfefdfg140Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'G001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQG125' })
  seqg125: number;

  @Column('int', { primary: true, name: 'SEQG130' })
  seqg130: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'G140'" })
  registro: string;

  @Column('int', { name: 'NUM_ITEM', nullable: true })
  numItem: number | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('float', { name: 'QTDE', nullable: true, precision: 53 })
  qtde: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', {
    name: 'VL_ICMS_OP_APLICADO',
    nullable: true,
    precision: 53,
  })
  vlIcmsOpAplicado: number | null;

  @Column('float', {
    name: 'VL_ICMS_ST_APLICADO',
    nullable: true,
    precision: 53,
  })
  vlIcmsStAplicado: number | null;

  @Column('float', {
    name: 'VL_ICMS_FRT_APLICADO',
    nullable: true,
    precision: 53,
  })
  vlIcmsFrtAplicado: number | null;

  @Column('float', {
    name: 'VL_ICMS_DIF_APLICADO',
    nullable: true,
    precision: 53,
  })
  vlIcmsDifAplicado: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
