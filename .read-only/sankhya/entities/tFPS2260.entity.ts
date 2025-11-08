import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPS2260', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index('TFPS2260_I01', ['codemp', 'chave'], {})
@Entity('TFPS2260', { schema: 'SANKHYA' })
export class Tfps2260Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'CODEMPFUNC' })
  codempfunc: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 15 })
  nrinscempregador: string | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NISTRAB', nullable: true, length: 11 })
  nistrab: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('varchar', { name: 'CODCONV', nullable: true, length: 30 })
  codconv: string | null;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('varchar', { name: 'CODHORCONTRAT', nullable: true, length: 30 })
  codhorcontrat: string | null;

  @Column('varchar', { name: 'DSCJORNADA', nullable: true, length: 999 })
  dscjornada: string | null;

  @Column('char', { name: 'INDLOCAL', nullable: true, length: 1 })
  indlocal: string | null;

  @Column('varchar', { name: 'TPLOGRAD', nullable: true, length: 4 })
  tplograd: string | null;

  @Column('varchar', { name: 'DSCLOGRAD', nullable: true, length: 80 })
  dsclograd: string | null;

  @Column('varchar', { name: 'NRLOGRAD', nullable: true, length: 10 })
  nrlograd: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'CODMUNIC', nullable: true, length: 7 })
  codmunic: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTPREVPGTO', nullable: true })
  dtprevpgto: Date | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;
}
