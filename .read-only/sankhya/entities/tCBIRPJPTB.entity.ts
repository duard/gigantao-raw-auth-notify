import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBIRPJPTB', ['codemp', 'referencia', 'codctactb'], { unique: true })
@Entity('TCBIRPJPTB', { schema: 'SANKHYA' })
export class TcbirpjptbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('varchar', { name: 'NATCONTA', nullable: true, length: 1 })
  natconta: string | null;

  @Column('datetime', { name: 'DTCRIACAO', nullable: true })
  dtcriacao: Date | null;

  @Column('varchar', { name: 'HISTORICO', nullable: true, length: 50 })
  historico: string | null;

  @Column('datetime', { name: 'DTLIMITE', nullable: true })
  dtlimite: Date | null;

  @Column('varchar', { name: 'NATCONTA_CSLL', nullable: true, length: 1 })
  natcontaCsll: string | null;

  @Column('datetime', { name: 'DTCRIACAO_CSLL', nullable: true })
  dtcriacaoCsll: Date | null;

  @Column('varchar', { name: 'HISTORICO_CSLL', nullable: true, length: 50 })
  historicoCsll: string | null;

  @Column('datetime', { name: 'DTLIMITE_CSLL', nullable: true })
  dtlimiteCsll: Date | null;

  @Column('float', { name: 'ADICOES', nullable: true, precision: 53 })
  adicoes: number | null;

  @Column('float', { name: 'ADICOES_CSLL', nullable: true, precision: 53 })
  adicoesCsll: number | null;

  @Column('float', { name: 'EXCLUSOES', nullable: true, precision: 53 })
  exclusoes: number | null;

  @Column('float', { name: 'EXCLUSOES_CSLL', nullable: true, precision: 53 })
  exclusoesCsll: number | null;

  @Column('float', { name: 'SALDOINICIAL', nullable: true, precision: 53 })
  saldoinicial: number | null;

  @Column('float', { name: 'SALDOINICIAL_CSLL', nullable: true, precision: 53 })
  saldoinicialCsll: number | null;

  @Column('float', { name: 'SALDOFINAL', nullable: true, precision: 53 })
  saldofinal: number | null;

  @Column('float', { name: 'SALDOFINAL_CSLL', nullable: true, precision: 53 })
  saldofinalCsll: number | null;
}
