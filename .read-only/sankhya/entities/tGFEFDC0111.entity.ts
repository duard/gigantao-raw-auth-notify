import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDC0111',
  ['codemp', 'dtref', 'regniv1', 'regniv2', 'registro'],
  { unique: true },
)
@Entity('TGFEFDC0111', { schema: 'SANKHYA' })
export class Tgfefdc0111Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'0001'",
  })
  regniv1: string;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV2',
    length: 4,
    default: () => "'0110'",
  })
  regniv2: string;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0111'",
  })
  registro: string;

  @Column('float', {
    name: 'REC_BRU_NCUM_TRIB_MI',
    nullable: true,
    precision: 53,
  })
  recBruNcumTribMi: number | null;

  @Column('float', {
    name: 'REC_BRU_NCUM_NT_MI',
    nullable: true,
    precision: 53,
  })
  recBruNcumNtMi: number | null;

  @Column('float', { name: 'REC_BRU_NCUM_EXP', nullable: true, precision: 53 })
  recBruNcumExp: number | null;

  @Column('float', { name: 'REC_BRU_CUM', nullable: true, precision: 53 })
  recBruCum: number | null;

  @Column('float', { name: 'REC_BRU_TOTAL', nullable: true, precision: 53 })
  recBruTotal: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
