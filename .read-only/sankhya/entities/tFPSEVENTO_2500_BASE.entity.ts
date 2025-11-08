import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSEVENTO_2500_BASE', ['codemp', 'chave'], { unique: true })
@Entity('TFPSEVENTO_2500_BASE', { schema: 'SANKHYA' })
export class Tfpsevento_2500BaseEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'IDESEQTRAB', nullable: true })
  ideseqtrab: number | null;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 14 })
  nrinscempregador: string | null;

  @Column('smallint', { name: 'TPINSCCONTRIBUINTE', nullable: true })
  tpinsccontribuinte: number | null;

  @Column('varchar', { name: 'NRINSCCONTRIBUINTE', nullable: true, length: 14 })
  nrinsccontribuinte: string | null;

  @Column('smallint', { name: 'ORIGEM', nullable: true })
  origem: number | null;

  @Column('varchar', { name: 'NRPROCTRAB', nullable: true, length: 20 })
  nrproctrab: string | null;

  @Column('varchar', { name: 'OBSPROCTRAB', nullable: true, length: 999 })
  obsproctrab: string | null;

  @Column('datetime', { name: 'DTSENT', nullable: true })
  dtsent: Date | null;

  @Column('varchar', { name: 'UFVARA', nullable: true, length: 2 })
  ufvara: string | null;

  @Column('int', { name: 'CODMUNIC', nullable: true })
  codmunic: number | null;

  @Column('smallint', { name: 'IDVARA', nullable: true })
  idvara: number | null;

  @Column('datetime', { name: 'DTCCP', nullable: true })
  dtccp: Date | null;

  @Column('smallint', { name: 'TPCCP', nullable: true })
  tpccp: number | null;

  @Column('varchar', { name: 'CNPJCCP', nullable: true, length: 14 })
  cnpjccp: string | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NMTRAB', nullable: true, length: 70 })
  nmtrab: string | null;

  @Column('datetime', { name: 'DTNASCTO', nullable: true })
  dtnascto: Date | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'INCPORTALESOCIAL', nullable: true, length: 1 })
  incportalesocial: string | null;

  @Column('varchar', { name: 'ENVIAEVENTO', nullable: true, length: 1 })
  enviaevento: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('int', { name: 'NUPRT' })
  nuprt: number;
}
