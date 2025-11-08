import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE220',
  ['codemp', 'dtref', 'regniv1', 'seqe200', 'regniv3', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFE220', { schema: 'SANKHYA' })
export class Tgfefdfe220Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E220'" })
  registro: string;

  @Column('varchar', { name: 'COD_AJ_APUR', nullable: true, length: 8 })
  codAjApur: string | null;

  @Column('varchar', { name: 'DESCR_COMPL_AJ', nullable: true, length: 255 })
  descrComplAj: string | null;

  @Column('float', { name: 'VL_AJ_APUR', nullable: true, precision: 53 })
  vlAjApur: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
