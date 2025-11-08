import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1970', ['codemp', 'dtref', 'regniv1', 'indAp'], {
  unique: true,
})
@Entity('TGFEFDF1970', { schema: 'SANKHYA' })
export class Tgfefdf1970Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1960'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'IND_AP', length: 1 })
  indAp: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('float', { name: 'G3_01', nullable: true, precision: 53 })
  g3_01: number | null;

  @Column('float', { name: 'G3_02', nullable: true, precision: 53 })
  g3_02: number | null;

  @Column('float', { name: 'G3_03', nullable: true, precision: 53 })
  g3_03: number | null;

  @Column('float', { name: 'G3_04', nullable: true, precision: 53 })
  g3_04: number | null;

  @Column('float', { name: 'G3_05', nullable: true, precision: 53 })
  g3_05: number | null;

  @Column('float', { name: 'G3_06', nullable: true, precision: 53 })
  g3_06: number | null;

  @Column('float', { name: 'G3_07', nullable: true, precision: 53 })
  g3_07: number | null;

  @Column('float', { name: 'G3_T', nullable: true, precision: 53 })
  g3T: number | null;

  @Column('float', { name: 'G3_08', nullable: true, precision: 53 })
  g3_08: number | null;

  @Column('float', { name: 'G3_09', nullable: true, precision: 53 })
  g3_09: number | null;
}
