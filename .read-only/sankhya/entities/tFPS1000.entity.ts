import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPS1000', ['codemp', 'dtref', 'tpamb', 'sequencia'], {
  unique: true,
})
@Entity('TFPS1000', { schema: 'SANKHYA' })
export class Tfps1000Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 14 })
  nrinscempregador: string | null;

  @Column('varchar', { name: 'NMRAZAO', nullable: true, length: 40 })
  nmrazao: string | null;

  @Column('varchar', { name: 'CLASSTRIB', nullable: true, length: 2 })
  classtrib: string | null;

  @Column('smallint', { name: 'NATJURID', nullable: true })
  natjurid: number | null;

  @Column('smallint', { name: 'INDCOOP' })
  indcoop: number;

  @Column('smallint', { name: 'INDCONSTR' })
  indconstr: number;

  @Column('smallint', { name: 'INDDESFOLHA', nullable: true })
  inddesfolha: number | null;

  @Column('smallint', { name: 'INDOPTREGELETRON', nullable: true })
  indoptregeletron: number | null;

  @Column('char', { name: 'INDENTED', length: 1 })
  indented: string;

  @Column('char', { name: 'INDETT', length: 1 })
  indett: string;

  @Column('varchar', { name: 'NRREGETT', nullable: true, length: 30 })
  nrregett: string | null;

  @Column('varchar', { name: 'IDEMINLEI', nullable: true, length: 70 })
  ideminlei: string | null;

  @Column('varchar', { name: 'NRCERTIF', nullable: true, length: 40 })
  nrcertif: string | null;

  @Column('datetime', { name: 'DTEMISCERTIF', nullable: true })
  dtemiscertif: Date | null;

  @Column('datetime', { name: 'DTVENCCERTIF', nullable: true })
  dtvenccertif: Date | null;

  @Column('varchar', { name: 'NRPROTRENOV', nullable: true, length: 40 })
  nrprotrenov: string | null;

  @Column('datetime', { name: 'DTPROTRENOV', nullable: true })
  dtprotrenov: Date | null;

  @Column('datetime', { name: 'DTDOU', nullable: true })
  dtdou: Date | null;

  @Column('smallint', { name: 'PAGDOU', nullable: true })
  pagdou: number | null;

  @Column('varchar', { name: 'NMCTT', nullable: true, length: 60 })
  nmctt: string | null;

  @Column('varchar', { name: 'CPFCTT', nullable: true, length: 11 })
  cpfctt: string | null;

  @Column('varchar', { name: 'FONEFIXO', nullable: true, length: 11 })
  fonefixo: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 50 })
  email: string | null;

  @Column('int', { name: 'NRSIAFI', nullable: true })
  nrsiafi: number | null;

  @Column('char', { name: 'IDEEFR', length: 1 })
  ideefr: string;

  @Column('varchar', { name: 'CNPJEFR', nullable: true, length: 14 })
  cnpjefr: string | null;

  @Column('varchar', { name: 'NMENTE', nullable: true, length: 115 })
  nmente: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('smallint', { name: 'CODMUNIC', nullable: true })
  codmunic: number | null;

  @Column('char', { name: 'INDRPPS', length: 1 })
  indrpps: string;

  @Column('smallint', { name: 'SUBTETO', nullable: true })
  subteto: number | null;

  @Column('float', { name: 'VRSUBTETO', nullable: true, precision: 53 })
  vrsubteto: number | null;

  @Column('smallint', { name: 'INDACORDOISENMULTA', nullable: true })
  indacordoisenmulta: number | null;

  @Column('smallint', { name: 'INDSITPJ', nullable: true })
  indsitpj: number | null;

  @Column('smallint', { name: 'INDSITPF', nullable: true })
  indsitpf: number | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 100 })
  chave: string | null;

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

  @Column('smallint', { name: 'INDOPCCP', nullable: true })
  indopccp: number | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('char', { name: 'INDTRIBFOLHAPISCOFINS', nullable: true, length: 1 })
  indtribfolhapiscofins: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;
}
