import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC199',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codprod', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCC199', { schema: 'SANKHYA' })
export class Tgfefdcc199Entity {
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

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C199'" })
  registro: string;

  @Column('varchar', { name: 'COD_DOC_IMP', nullable: true, length: 1 })
  codDocImp: string | null;

  @Column('varchar', { name: 'NUM_DOC_IMP', nullable: true, length: 15 })
  numDocImp: string | null;

  @Column('float', { name: 'VL_PIS_IMP', nullable: true, precision: 53 })
  vlPisImp: number | null;

  @Column('float', { name: 'VL_COFINS_IMP', nullable: true, precision: 53 })
  vlCofinsImp: number | null;

  @Column('varchar', { name: 'NUM_ACDRAW', nullable: true, length: 20 })
  numAcdraw: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
