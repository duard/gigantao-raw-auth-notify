import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCM110',
  ['codemp', 'dtref', 'regniv1', 'aliqPis', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDCM110', { schema: 'SANKHYA' })
export class Tgfefdcm110Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'M001'",
  })
  regniv1: string;

  @Column('float', { primary: true, name: 'ALIQ_PIS', precision: 53 })
  aliqPis: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'M110'" })
  registro: string;

  @Column('varchar', { name: 'IND_AJ', nullable: true, length: 1 })
  indAj: string | null;

  @Column('float', { name: 'VL_AJ', nullable: true, precision: 53 })
  vlAj: number | null;

  @Column('varchar', { name: 'COD_AJ', nullable: true, length: 2 })
  codAj: string | null;

  @Column('varchar', { name: 'NUM_DOC', nullable: true, length: 3103 })
  numDoc: string | null;

  @Column('varchar', { name: 'DESCR_AJ', nullable: true, length: 3103 })
  descrAj: string | null;

  @Column('datetime', { name: 'DT_REF', nullable: true })
  dtRef: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
