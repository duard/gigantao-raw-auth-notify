import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1975', ['codemp', 'dtref', 'regniv1', 'indAp', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDF1975', { schema: 'SANKHYA' })
export class Tgfefdf1975Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1975'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'IND_AP', length: 1 })
  indAp: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('float', { name: 'ALIQ_IMP_BASE', nullable: true, precision: 53 })
  aliqImpBase: number | null;

  @Column('float', { name: 'G3_10', nullable: true, precision: 53 })
  g3_10: number | null;

  @Column('float', { name: 'G3_11', nullable: true, precision: 53 })
  g3_11: number | null;

  @Column('float', { name: 'G3_12', nullable: true, precision: 53 })
  g3_12: number | null;
}
