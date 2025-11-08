import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE510',
  ['codemp', 'dtref', 'regniv1', 'seqe500', 'cfop', 'cstIpi'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFE510', { schema: 'SANKHYA' })
export class Tgfefdfe510Entity {
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

  @Column('int', { primary: true, name: 'SEQE500' })
  seqe500: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E510'" })
  registro: string;

  @Column('int', { primary: true, name: 'CFOP' })
  cfop: number;

  @Column('varchar', { primary: true, name: 'CST_IPI', length: 2 })
  cstIpi: string;

  @Column('float', { name: 'VL_CONT_IPI', nullable: true, precision: 53 })
  vlContIpi: number | null;

  @Column('float', { name: 'VL_BC_IPI', nullable: true, precision: 53 })
  vlBcIpi: number | null;

  @Column('float', { name: 'VL_IPI', nullable: true, precision: 53 })
  vlIpi: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
