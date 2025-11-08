import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDC0145',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'registro'],
  {
    unique: true,
  },
)
@Entity('TGFEFDC0145', { schema: 'SANKHYA' })
export class Tgfefdc0145Entity {
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

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0145'",
  })
  registro: string;

  @Column('int', { name: 'COD_INC_TRIB' })
  codIncTrib: number;

  @Column('float', { name: 'VL_REC_TOT', nullable: true, precision: 53 })
  vlRecTot: number | null;

  @Column('float', { name: 'VL_REC_ATIV', nullable: true, precision: 53 })
  vlRecAtiv: number | null;

  @Column('float', {
    name: 'VL_REC_DEMAIS_ATIV',
    nullable: true,
    precision: 53,
  })
  vlRecDemaisAtiv: number | null;

  @Column('varchar', { name: 'INFO_COMPL', nullable: true, length: 3103 })
  infoCompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
