import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC410',
  ['codemp', 'dtref', 'regniv1', 'seqc400', 'seqc405', 'registro'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC410', { schema: 'SANKHYA' })
export class Tgfefdfc410Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQC400' })
  seqc400: number;

  @Column('int', { primary: true, name: 'SEQC405' })
  seqc405: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'C410'",
  })
  registro: string;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
