import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC172',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqc170', 'registro'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC172', { schema: 'SANKHYA' })
export class Tgfefdfc172Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQC170' })
  seqc170: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'C172'",
  })
  registro: string;

  @Column('float', { name: 'VL_BC_ISSQN', nullable: true, precision: 53 })
  vlBcIssqn: number | null;

  @Column('float', { name: 'ALIQ_ISSQN', nullable: true, precision: 53 })
  aliqIssqn: number | null;

  @Column('float', { name: 'VL_ISSQN', nullable: true, precision: 53 })
  vlIssqn: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
