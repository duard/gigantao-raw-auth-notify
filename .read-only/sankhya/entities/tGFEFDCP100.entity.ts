import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCP100',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave'],
  { unique: true },
)
@Entity('TGFEFDCP100', { schema: 'SANKHYA' })
export class Tgfefdcp100Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'P001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'P100'" })
  registro: string;

  @Column('datetime', { name: 'DT_INI' })
  dtIni: Date;

  @Column('datetime', { name: 'DT_FIN' })
  dtFin: Date;

  @Column('float', { name: 'VL_REC_TOT_EST', nullable: true, precision: 53 })
  vlRecTotEst: number | null;

  @Column('varchar', { name: 'COD_ATIV_ECON', nullable: true, length: 8 })
  codAtivEcon: string | null;

  @Column('float', { name: 'VL_REC_ATIV_ESTAB', nullable: true, precision: 53 })
  vlRecAtivEstab: number | null;

  @Column('float', { name: 'VL_EXC', nullable: true, precision: 53 })
  vlExc: number | null;

  @Column('float', { name: 'VL_BC_CONT', nullable: true, precision: 53 })
  vlBcCont: number | null;

  @Column('float', { name: 'ALIQ_CONT', nullable: true, precision: 53 })
  aliqCont: number | null;

  @Column('float', { name: 'VL_CONT_APU', nullable: true, precision: 53 })
  vlContApu: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('varchar', { name: 'INFO_COMPL', nullable: true, length: 3103 })
  infoCompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'COD_INC_TRIB', nullable: true })
  codIncTrib: number | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
