import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGAAPC', ['codfatcont'], { unique: true })
@Entity('TGAAPC', { schema: 'SANKHYA' })
export class TgaapcEntity {
  @Column('int', { primary: true, name: 'CODFATCONT' })
  codfatcont: number;

  @Column('int', { name: 'CONTRATO' })
  contrato: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 200 })
  nome: string | null;

  @Column('varchar', { name: 'TIPCOBR', nullable: true, length: 1 })
  tipcobr: string | null;

  @Column('varchar', { name: 'PERCOBRA', nullable: true, length: 1 })
  percobra: string | null;

  @Column('int', { name: 'DIACARENCEX', nullable: true })
  diacarencex: number | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('datetime', { name: 'DATAINICIO', nullable: true })
  datainicio: Date | null;

  @Column('datetime', { name: 'DATAFINAL', nullable: true })
  datafinal: Date | null;

  @Column('float', { name: 'PESOTOTAL', nullable: true, precision: 53 })
  pesototal: number | null;

  @Column('float', { name: 'TOTALSACAS', nullable: true, precision: 53 })
  totalsacas: number | null;

  @Column('float', { name: 'VALORSERVICO', nullable: true, precision: 53 })
  valorservico: number | null;

  @Column('float', { name: 'TOTALRETENCAO', nullable: true, precision: 53 })
  totalretencao: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('float', { name: 'VLRFATURADO', nullable: true, precision: 53 })
  vlrfaturado: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'VLRTRANS', nullable: true, precision: 53 })
  vlrtrans: number | null;

  @Column('float', { name: 'VLRLIQ', nullable: true, precision: 53 })
  vlrliq: number | null;

  @Column('float', { name: 'VLRLIQFAT', nullable: true, precision: 53 })
  vlrliqfat: number | null;

  @Column('int', { name: 'CODSERV', nullable: true })
  codserv: number | null;

  @Column('int', { name: 'VLRTRANSORIG', nullable: true })
  vlrtransorig: number | null;

  @Column('float', { name: 'CODTRANSORIG', nullable: true, precision: 53 })
  codtransorig: number | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;
}
