import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1100', ['codemp', 'dtref', 'regniv1', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDF1100', { schema: 'SANKHYA' })
export class Tgfefdf1100Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1100'" })
  registro: string;

  @Column('smallint', { name: 'IND_DOC', nullable: true })
  indDoc: number | null;

  @Column('varchar', { name: 'NRO_DE', nullable: true, length: 14 })
  nroDe: string | null;

  @Column('datetime', { name: 'DT_DE', nullable: true })
  dtDe: Date | null;

  @Column('smallint', { name: 'NAT_EXP', nullable: true })
  natExp: number | null;

  @Column('varchar', { name: 'NRO_RE', nullable: true, length: 12 })
  nroRe: string | null;

  @Column('datetime', { name: 'DT_RE', nullable: true })
  dtRe: Date | null;

  @Column('varchar', { name: 'CHC_EMB', nullable: true, length: 18 })
  chcEmb: string | null;

  @Column('datetime', { name: 'DT_CHC', nullable: true })
  dtChc: Date | null;

  @Column('datetime', { name: 'DT_AVB', nullable: true })
  dtAvb: Date | null;

  @Column('int', { name: 'TP_CHC', nullable: true })
  tpChc: number | null;

  @Column('int', { name: 'PAIS', nullable: true })
  pais: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
