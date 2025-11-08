import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE115',
  ['codemp', 'dtref', 'regniv1', 'seqe100', 'regniv3', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFE115', { schema: 'SANKHYA' })
export class Tgfefdfe115Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E115'" })
  registro: string;

  @Column('varchar', { name: 'COD_INF_ADIC', nullable: true, length: 8 })
  codInfAdic: string | null;

  @Column('float', { name: 'VL_INF_ADIC', nullable: true, precision: 53 })
  vlInfAdic: number | null;

  @Column('varchar', { name: 'DESCR_COMPL_AJ', nullable: true, length: 255 })
  descrComplAj: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
