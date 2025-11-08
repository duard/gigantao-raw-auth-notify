import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE311',
  ['codemp', 'dtref', 'regniv1', 'seqe300', 'regniv3', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFE311', { schema: 'SANKHYA' })
export class Tgfefdfe311Entity {
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

  @Column('int', { primary: true, name: 'SEQE300' })
  seqe300: number;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV3',
    length: 4,
    default: () => "'E310'",
  })
  regniv3: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E311'" })
  registro: string;

  @Column('varchar', { name: 'COD_AJ_APUR', length: 8 })
  codAjApur: string;

  @Column('varchar', { name: 'DESCR_COMPL_AJ', nullable: true, length: 255 })
  descrComplAj: string | null;

  @Column('float', { name: 'VL_AJ_APUR', nullable: true, precision: 53 })
  vlAjApur: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
