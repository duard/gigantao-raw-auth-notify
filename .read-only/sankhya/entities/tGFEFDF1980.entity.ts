import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1980', ['codemp', 'dtref', 'regniv1', 'indAp'], {
  unique: true,
})
@Entity('TGFEFDF1980', { schema: 'SANKHYA' })
export class Tgfefdf1980Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1980'" })
  registro: string;

  @Column('int', { primary: true, name: 'IND_AP' })
  indAp: number;

  @Column('float', { name: 'G4_01', nullable: true, precision: 53 })
  g4_01: number | null;

  @Column('float', { name: 'G4_02', nullable: true, precision: 53 })
  g4_02: number | null;

  @Column('float', { name: 'G4_03', nullable: true, precision: 53 })
  g4_03: number | null;

  @Column('float', { name: 'G4_04', nullable: true, precision: 53 })
  g4_04: number | null;

  @Column('float', { name: 'G4_05', nullable: true, precision: 53 })
  g4_05: number | null;

  @Column('float', { name: 'G4_06', nullable: true, precision: 53 })
  g4_06: number | null;

  @Column('float', { name: 'G4_07', nullable: true, precision: 53 })
  g4_07: number | null;

  @Column('float', { name: 'G4_08', nullable: true, precision: 53 })
  g4_08: number | null;

  @Column('float', { name: 'G4_09', nullable: true, precision: 53 })
  g4_09: number | null;

  @Column('float', { name: 'G4_10', nullable: true, precision: 53 })
  g4_10: number | null;

  @Column('float', { name: 'G4_11', nullable: true, precision: 53 })
  g4_11: number | null;

  @Column('float', { name: 'G4_12', nullable: true, precision: 53 })
  g4_12: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
