import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1960', ['codemp', 'dtref', 'regniv1', 'indAp'], {
  unique: true,
})
@Entity('TGFEFDF1960', { schema: 'SANKHYA' })
export class Tgfefdf1960Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1960'" })
  registro: string;

  @Column('int', { primary: true, name: 'IND_AP' })
  indAp: number;

  @Column('float', { name: 'G1_01', nullable: true, precision: 53 })
  g1_01: number | null;

  @Column('float', { name: 'G1_02', nullable: true, precision: 53 })
  g1_02: number | null;

  @Column('float', { name: 'G1_03', nullable: true, precision: 53 })
  g1_03: number | null;

  @Column('float', { name: 'G1_04', nullable: true, precision: 53 })
  g1_04: number | null;

  @Column('float', { name: 'G1_05', nullable: true, precision: 53 })
  g1_05: number | null;

  @Column('float', { name: 'G1_06', nullable: true, precision: 53 })
  g1_06: number | null;

  @Column('float', { name: 'G1_07', nullable: true, precision: 53 })
  g1_07: number | null;

  @Column('float', { name: 'G1_08', nullable: true, precision: 53 })
  g1_08: number | null;

  @Column('float', { name: 'G1_09', nullable: true, precision: 53 })
  g1_09: number | null;

  @Column('float', { name: 'G1_10', nullable: true, precision: 53 })
  g1_10: number | null;

  @Column('float', { name: 'G1_11', nullable: true, precision: 53 })
  g1_11: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
