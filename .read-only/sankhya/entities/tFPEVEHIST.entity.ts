import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TFPEVEHIST', ['codhist'], { unique: true })
@Entity('TFPEVEHIST', { schema: 'SANKHYA' })
export class TfpevehistEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODHIST' })
  codhist: number;

  @Column('varchar', { name: 'CODEVENTO', nullable: true, length: 50 })
  codevento: string | null;

  @Column('varchar', { name: 'DESCREVENTO', nullable: true, length: 35 })
  descrevento: string | null;

  @Column('varchar', { name: 'UNIDADE', nullable: true, length: 5 })
  unidade: string | null;

  @Column('varchar', { name: 'CODFORM', nullable: true, length: 50 })
  codform: string | null;

  @Column('varchar', { name: 'INDICE', nullable: true, length: 150 })
  indice: string | null;

  @Column('varchar', { name: 'VLREVENTO', nullable: true, length: 150 })
  vlrevento: string | null;

  @Column('varchar', { name: 'IMPHOLLERIT', nullable: true, length: 5 })
  imphollerit: string | null;

  @Column('varchar', { name: 'INCSOBREMEDIAS', nullable: true, length: 5 })
  incsobremedias: string | null;

  @Column('varchar', { name: 'BASEINFREND', nullable: true, length: 5 })
  baseinfrend: string | null;

  @Column('varchar', { name: 'BASEMARGCONSIG', nullable: true, length: 5 })
  basemargconsig: string | null;

  @Column('varchar', { name: 'PROTEGIDO', nullable: true, length: 5 })
  protegido: string | null;

  @Column('varchar', { name: 'BASERAIS', nullable: true, length: 5 })
  baserais: string | null;

  @Column('varchar', { name: 'SEQCALCULO', nullable: true, length: 150 })
  seqcalculo: string | null;

  @Column('varchar', { name: 'ACUMULADOR', nullable: true, length: 5 })
  acumulador: string | null;

  @Column('varchar', { name: 'BASELIQUIDO', nullable: true, length: 5 })
  baseliquido: string | null;

  @Column('varchar', { name: 'FOLHA', nullable: true, length: 5 })
  folha: string | null;

  @Column('varchar', { name: 'FERIAS', nullable: true, length: 5 })
  ferias: string | null;

  @Column('varchar', { name: 'RESCISAO', nullable: true, length: 5 })
  rescisao: string | null;

  @Column('varchar', { name: 'DECTERC', nullable: true, length: 5 })
  decterc: string | null;

  @Column('varchar', { name: 'SEMANAL', nullable: true, length: 5 })
  semanal: string | null;

  @Column('varchar', { name: 'ADIANTAMENTO', nullable: true, length: 5 })
  adiantamento: string | null;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dtalter: Date | null;

  @Column('varchar', { name: 'CODUSU', nullable: true, length: 50 })
  codusu: string | null;

  @Column('varchar', { name: 'PENSAO', nullable: true, length: 5 })
  pensao: string | null;

  @Column('varchar', { name: 'CODCENCUS', nullable: true, length: 100 })
  codcencus: string | null;

  @Column('varchar', { name: 'CODNAT', nullable: true, length: 100 })
  codnat: string | null;

  @Column('varchar', { name: 'PROVISAOFIN', nullable: true, length: 50 })
  provisaofin: string | null;

  @Column('varchar', { name: 'INCORPORA', nullable: true, length: 5 })
  incorpora: string | null;

  @Column('varchar', { name: 'CODEVERESILICAO', nullable: true, length: 50 })
  codeveresilicao: string | null;

  @Column('varchar', { name: 'RESILICAO', nullable: true, length: 5 })
  resilicao: string | null;

  @Column('varchar', { name: 'COMPLEMENTORESC', nullable: true, length: 5 })
  complementoresc: string | null;

  @Column('varchar', { name: 'REGCALCULO', nullable: true, length: 5 })
  regcalculo: string | null;

  @Column('varchar', { name: 'TIPEVENTO', nullable: true, length: 50 })
  tipevento: string | null;

  @Column('varchar', { name: 'REFLEXIVOS', nullable: true, length: 30 })
  reflexivos: string | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 5 })
  ativo: string | null;

  @Column('varchar', { name: 'SANKHYA', nullable: true, length: 5 })
  sankhya: string | null;

  @Column('varchar', { name: 'IDENTIFICACAO', nullable: true, length: 50 })
  identificacao: string | null;

  @Column('varchar', { name: 'TIPOINSS', nullable: true, length: 50 })
  tipoinss: string | null;

  @Column('varchar', { name: 'TIPOIRRF', nullable: true, length: 50 })
  tipoirrf: string | null;

  @Column('varchar', { name: 'FGTS', nullable: true, length: 5 })
  fgts: string | null;

  @Column('varchar', { name: 'FGTSDECTERCEIRO', nullable: true, length: 5 })
  fgtsdecterceiro: string | null;

  @Column('varchar', { name: 'BASEAUXILIAR', nullable: true, length: 5 })
  baseauxiliar: string | null;

  @Column('varchar', { name: 'PIS', nullable: true, length: 5 })
  pis: string | null;

  @Column('varchar', { name: 'ISS', nullable: true, length: 5 })
  iss: string | null;

  @Column('varchar', { name: 'INFCOMPLRAIS1', nullable: true, length: 50 })
  infcomplrais1: string | null;

  @Column('varchar', { name: 'INFCOMPLRAIS2', nullable: true, length: 50 })
  infcomplrais2: string | null;

  @Column('varchar', { name: 'GRRFMES', nullable: true, length: 5 })
  grrfmes: string | null;

  @Column('varchar', { name: 'GRRFMESANTERIOR', nullable: true, length: 5 })
  grrfmesanterior: string | null;

  @Column('varchar', { name: 'GRRFINDENIZACAO', nullable: true, length: 5 })
  grrfindenizacao: string | null;

  @Column('varchar', { name: 'BASESEFIP', nullable: true, length: 50 })
  basesefip: string | null;

  @Column('varchar', { name: 'FGTSSEFIP', nullable: true, length: 5 })
  fgtssefip: string | null;

  @Column('varchar', { name: 'INSSSEFIP', nullable: true, length: 5 })
  insssefip: string | null;

  @Column('varchar', { name: 'CODEVECORRELATO', nullable: true, length: 50 })
  codevecorrelato: string | null;

  @Column('varchar', { name: 'RUBRICAMTE', nullable: true, length: 50 })
  rubricamte: string | null;

  @Column('varchar', { name: 'CODOUTRASMTE', nullable: true, length: 50 })
  codoutrasmte: string | null;

  @Column('varchar', { name: 'INDICEADMEDIAS', nullable: true, length: 150 })
  indiceadmedias: string | null;

  @Column('varchar', { name: 'USADOESOCIAL', nullable: true, length: 5 })
  usadoesocial: string | null;

  @Column('varchar', { name: 'CODNATRUBRICA', nullable: true, length: 4 })
  codnatrubrica: string | null;

  @Column('varchar', { name: 'CONTRIBSIND', nullable: true, length: 5 })
  contribsind: string | null;

  @Column('varchar', { name: 'RUBRICADSR', nullable: true, length: 5 })
  rubricadsr: string | null;

  @Column('varchar', { name: 'RUBRICA13', nullable: true, length: 5 })
  rubrica13: string | null;

  @Column('varchar', { name: 'RUBRICAFERIAS', nullable: true, length: 5 })
  rubricaferias: string | null;

  @Column('varchar', { name: 'RUBRICARESCISAO', nullable: true, length: 5 })
  rubricarescisao: string | null;

  @Column('varchar', { name: 'TEMCOMPLEMENTO', nullable: true, length: 5 })
  temcomplemento: string | null;

  @Column('varchar', { name: 'CODEVECOMPLEMENTO', nullable: true, length: 50 })
  codevecomplemento: string | null;

  @Column('varchar', { name: 'COMPLEMENTAR', nullable: true, length: 5 })
  complementar: string | null;

  @Column('varchar', { name: 'PLR', nullable: true, length: 5 })
  plr: string | null;

  @Column('varchar', { name: 'INTEGRACTB', nullable: true, length: 5 })
  integractb: string | null;

  @Column('varchar', { name: 'DSCSALVAR', nullable: true, length: 90 })
  dscsalvar: string | null;

  @Column('varchar', { name: 'FGTSRESCISAO', nullable: true, length: 5 })
  fgtsrescisao: string | null;

  @Column('varchar', { name: 'CODCRIRATEIO', nullable: true, length: 50 })
  codcrirateio: string | null;

  @Column('varchar', { name: 'GRUPOMEDIAS', nullable: true, length: 20 })
  grupomedias: string | null;

  @Column('varchar', { name: 'PENSAOSALLIQUIDO', nullable: true, length: 5 })
  pensaosalliquido: string | null;

  @Column('varchar', { name: 'PENSAOSALBRUTO', nullable: true, length: 5 })
  pensaosalbruto: string | null;

  @Column('varchar', { name: 'PENSAOSALMINIMO', nullable: true, length: 5 })
  pensaosalminimo: string | null;

  @Column('varchar', { name: 'CODINCCP', nullable: true, length: 5 })
  codinccp: string | null;

  @Column('varchar', { name: 'CODINCIRRF', nullable: true, length: 5 })
  codincirrf: string | null;

  @Column('varchar', { name: 'CODINCFGTS', nullable: true, length: 5 })
  codincfgts: string | null;

  @Column('varchar', { name: 'CODINCSIND', nullable: true, length: 5 })
  codincsind: string | null;

  @Column('varchar', { name: 'GRUPOEVENTO', nullable: true, length: 50 })
  grupoevento: string | null;

  @Column('varchar', { name: 'PSEUDOCODEVENTO', nullable: true, length: 100 })
  pseudocodevento: string | null;

  @Column('varchar', { name: 'ATIVOW', nullable: true, length: 5 })
  ativow: string | null;

  @Column('varchar', { name: 'CODMOEDA', nullable: true, length: 50 })
  codmoeda: string | null;

  @Column('varchar', { name: 'USACODMOEDA', nullable: true, length: 5 })
  usacodmoeda: string | null;

  @Column('varchar', { name: 'INDENIZACAOAPI', nullable: true, length: 5 })
  indenizacaoapi: string | null;
}
