import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPCRIEVE', ['codevento'], { unique: true })
@Entity('TFPCRIEVE', { schema: 'SANKHYA' })
export class TfpcrieveEntity {
  @Column('int', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('image', { name: 'DESCREVENTO', nullable: true })
  descrevento: Buffer | null;

  @Column('image', { name: 'UNIDADE', nullable: true })
  unidade: Buffer | null;

  @Column('image', { name: 'CODFORM', nullable: true })
  codform: Buffer | null;

  @Column('image', { name: 'INDICE', nullable: true })
  indice: Buffer | null;

  @Column('image', { name: 'VLREVENTO', nullable: true })
  vlrevento: Buffer | null;

  @Column('image', { name: 'IMPHOLLERIT', nullable: true })
  imphollerit: Buffer | null;

  @Column('image', { name: 'INCSOBREMEDIAS', nullable: true })
  incsobremedias: Buffer | null;

  @Column('image', { name: 'BASEINFREND', nullable: true })
  baseinfrend: Buffer | null;

  @Column('image', { name: 'BASEMARGCONSIG', nullable: true })
  basemargconsig: Buffer | null;

  @Column('image', { name: 'PROTEGIDO', nullable: true })
  protegido: Buffer | null;

  @Column('image', { name: 'BASERAIS', nullable: true })
  baserais: Buffer | null;

  @Column('image', { name: 'SEQCALCULO', nullable: true })
  seqcalculo: Buffer | null;

  @Column('image', { name: 'REGCALCULO', nullable: true })
  regcalculo: Buffer | null;

  @Column('image', { name: 'ACUMULADOR', nullable: true })
  acumulador: Buffer | null;

  @Column('image', { name: 'BASELIQUIDO', nullable: true })
  baseliquido: Buffer | null;

  @Column('image', { name: 'FERIAS', nullable: true })
  ferias: Buffer | null;

  @Column('image', { name: 'FOLHA', nullable: true })
  folha: Buffer | null;

  @Column('image', { name: 'SEMANAL', nullable: true })
  semanal: Buffer | null;

  @Column('image', { name: 'DECTERC', nullable: true })
  decterc: Buffer | null;

  @Column('image', { name: 'RESCISAO', nullable: true })
  rescisao: Buffer | null;

  @Column('image', { name: 'ADIANTAMENTO', nullable: true })
  adiantamento: Buffer | null;

  @Column('image', { name: 'DTALTER', nullable: true })
  dtalter: Buffer | null;

  @Column('image', { name: 'CODUSU', nullable: true })
  codusu: Buffer | null;

  @Column('image', { name: 'CODCENCUS', nullable: true })
  codcencus: Buffer | null;

  @Column('image', { name: 'PROVISAOFIN', nullable: true })
  provisaofin: Buffer | null;

  @Column('image', { name: 'PENSAO', nullable: true })
  pensao: Buffer | null;

  @Column('image', { name: 'INCORPORA', nullable: true })
  incorpora: Buffer | null;

  @Column('image', { name: 'RESILICAO', nullable: true })
  resilicao: Buffer | null;

  @Column('image', { name: 'COMPLEMENTORESC', nullable: true })
  complementoresc: Buffer | null;

  @Column('image', { name: 'TIPEVENTO', nullable: true })
  tipevento: Buffer | null;

  @Column('image', { name: 'REFLEXIVOS', nullable: true })
  reflexivos: Buffer | null;

  @Column('image', { name: 'SANKHYA', nullable: true })
  sankhya: Buffer | null;

  @Column('image', { name: 'IDENTIFICACAO', nullable: true })
  identificacao: Buffer | null;

  @Column('image', { name: 'TIPOINSS', nullable: true })
  tipoinss: Buffer | null;

  @Column('image', { name: 'TIPOIRRF', nullable: true })
  tipoirrf: Buffer | null;

  @Column('image', { name: 'FGTS', nullable: true })
  fgts: Buffer | null;

  @Column('image', { name: 'FGTSDECTERCEIRO', nullable: true })
  fgtsdecterceiro: Buffer | null;

  @Column('image', { name: 'BASEAUXILIAR', nullable: true })
  baseauxiliar: Buffer | null;

  @Column('image', { name: 'PIS', nullable: true })
  pis: Buffer | null;

  @Column('image', { name: 'ISS', nullable: true })
  iss: Buffer | null;

  @Column('image', { name: 'INFCOMPLRAIS1', nullable: true })
  infcomplrais1: Buffer | null;

  @Column('image', { name: 'INFCOMPLRAIS2', nullable: true })
  infcomplrais2: Buffer | null;

  @Column('image', { name: 'GRRFMES', nullable: true })
  grrfmes: Buffer | null;

  @Column('image', { name: 'GRRFMESANTERIOR', nullable: true })
  grrfmesanterior: Buffer | null;

  @Column('image', { name: 'GRRFINDENIZACAO', nullable: true })
  grrfindenizacao: Buffer | null;

  @Column('image', { name: 'BASESEFIP', nullable: true })
  basesefip: Buffer | null;

  @Column('image', { name: 'FGTSSEFIP', nullable: true })
  fgtssefip: Buffer | null;

  @Column('image', { name: 'INSSSEFIP', nullable: true })
  insssefip: Buffer | null;

  @Column('image', { name: 'CODOUTRASMTE', nullable: true })
  codoutrasmte: Buffer | null;

  @Column('image', { name: 'INDICEADMEDIAS', nullable: true })
  indiceadmedias: Buffer | null;

  @Column('image', { name: 'CONTRIBSIND', nullable: true })
  contribsind: Buffer | null;

  @Column('image', { name: 'COMPLEMENTAR', nullable: true })
  complementar: Buffer | null;

  @Column('image', { name: 'PLR', nullable: true })
  plr: Buffer | null;

  @Column('image', { name: 'INTEGRACTB', nullable: true })
  integractb: Buffer | null;

  @Column('image', { name: 'DSCSALVAR', nullable: true })
  dscsalvar: Buffer | null;

  @Column('image', { name: 'FGTSRESCISAO', nullable: true })
  fgtsrescisao: Buffer | null;

  @Column('image', { name: 'CODCRIRATEIO', nullable: true })
  codcrirateio: Buffer | null;

  @Column('image', { name: 'GRUPOMEDIAS', nullable: true })
  grupomedias: Buffer | null;

  @Column('image', { name: 'PENSAOSALLIQUIDO', nullable: true })
  pensaosalliquido: Buffer | null;

  @Column('image', { name: 'PENSAOSALBRUTO', nullable: true })
  pensaosalbruto: Buffer | null;

  @Column('image', { name: 'PENSAOSALMINIMO', nullable: true })
  pensaosalminimo: Buffer | null;

  @Column('image', { name: 'GRUPOEVENTO', nullable: true })
  grupoevento: Buffer | null;

  @Column('image', { name: 'PSEUDOCODEVENTO', nullable: true })
  pseudocodevento: Buffer | null;

  @Column('image', { name: 'ATIVOW', nullable: true })
  ativow: Buffer | null;

  @Column('image', { name: 'CODMOEDA', nullable: true })
  codmoeda: Buffer | null;

  @Column('image', { name: 'USACODMOEDA', nullable: true })
  usacodmoeda: Buffer | null;

  @Column('image', { name: 'INDENIZACAOAPI', nullable: true })
  indenizacaoapi: Buffer | null;

  @Column('image', { name: 'CHECKSUM', nullable: true })
  checksum: Buffer | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('image', { name: 'INTERMITENTE', nullable: true })
  intermitente: Buffer | null;

  @Column('image', { name: 'PROVIDECTERSAL', nullable: true })
  providectersal: Buffer | null;

  @Column('image', { name: 'PROVIFERIAS', nullable: true })
  proviferias: Buffer | null;
}
