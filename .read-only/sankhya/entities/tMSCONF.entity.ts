import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSCONF', ['chave'], { unique: true })
@Entity('TMSCONF', { schema: 'SANKHYA' })
export class TmsconfEntity {
  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('int', { name: 'CODGRUPOPROD', nullable: true })
  codgrupoprod: number | null;

  @Column('int', { name: 'CODPRODSERVFRETE', nullable: true })
  codprodservfrete: number | null;

  @Column('int', { name: 'NUOCOR', nullable: true })
  nuocor: number | null;

  @Column('varchar', { name: 'VALLIMCRED', nullable: true, length: 1 })
  vallimcred: string | null;

  @Column('varchar', { name: 'VALVENCNH', nullable: true, length: 1 })
  valvencnh: string | null;

  @Column('varchar', { name: 'VALSALDOCARREG', nullable: true, length: 10 })
  valsaldocarreg: string | null;

  @Column('int', { name: 'CODPRODSERVPEDAGIO', nullable: true })
  codprodservpedagio: number | null;

  @Column('int', { name: 'CODPRODSERVICMS', nullable: true })
  codprodservicms: number | null;

  @Column('int', { name: 'CODTABPAUTA', nullable: true })
  codtabpauta: number | null;

  @Column('int', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('varchar', {
    name: 'USALIBADIANT',
    nullable: true,
    length: 10,
    default: () => "'S'",
  })
  usalibadiant: string | null;

  @Column('varchar', {
    name: 'USALIBVLRMAX',
    nullable: true,
    length: 10,
    default: () => "'S'",
  })
  usalibvlrmax: string | null;

  @Column('int', { name: 'CODTIPCOBVALEABAST', nullable: true })
  codtipcobvaleabast: number | null;

  @Column('varchar', { name: 'ALTPEDAGIOAFT', nullable: true, length: 10 })
  altpedagioaft: string | null;

  @Column('varchar', { name: 'USAPARCDIFAFT', nullable: true, length: 10 })
  usaparcdifaft: string | null;

  @Column('int', { name: 'CODPRODAFT', nullable: true })
  codprodaft: number | null;

  @Column('varchar', { name: 'AMBIENTE', nullable: true, length: 1 })
  ambiente: string | null;

  @Column('int', { name: 'CODCTABCOINT', nullable: true })
  codctabcoint: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODTIPOPERADIANT', nullable: true })
  codtipoperadiant: number | null;

  @Column('int', { name: 'CODTIPOPERSAL', nullable: true })
  codtipopersal: number | null;

  @Column('int', { name: 'CODTIPTIT', nullable: true })
  codtiptit: number | null;

  @Column('varchar', { name: 'IMPRIMIRXMLLOG', nullable: true, length: 1 })
  imprimirxmllog: string | null;

  @Column('int', { name: 'QTDSAQUES', nullable: true })
  qtdsaques: number | null;

  @Column('int', { name: 'QTDTRANSF', nullable: true })
  qtdtransf: number | null;

  @Column('float', { name: 'VLRTARIFASAQUE', nullable: true, precision: 53 })
  vlrtarifasaque: number | null;

  @Column('float', { name: 'VLRTARIFATRANSF', nullable: true, precision: 53 })
  vlrtarifatransf: number | null;

  @Column('varchar', { name: 'USAPAMCARD', nullable: true, length: 1 })
  usapamcard: string | null;

  @Column('varchar', { name: 'USAREPOM', nullable: true, length: 1 })
  usarepom: string | null;

  @Column('varchar', { name: 'USACHEQUE', nullable: true, length: 1 })
  usacheque: string | null;

  @Column('varchar', { name: 'TIPODTIMPRESSA', nullable: true, length: 1 })
  tipodtimpressa: string | null;

  @Column('varchar', { name: 'GERARCOPIA', nullable: true, length: 1 })
  gerarcopia: string | null;

  @Column('float', { name: 'VLRLIMITECHEQUE', nullable: true, precision: 53 })
  vlrlimitecheque: number | null;

  @Column('int', { name: 'CODTIPTITCHEQUE', nullable: true })
  codtiptitcheque: number | null;

  @Column('int', { name: 'CODTIPOPERCHEQUE', nullable: true })
  codtipopercheque: number | null;

  @Column('int', { name: 'CODLANCCHEQUE', nullable: true })
  codlanccheque: number | null;

  @Column('int', { name: 'NURFERECPAMCARD', nullable: true })
  nurferecpamcard: number | null;

  @Column('varchar', { name: 'CARREGVLRFRETE', nullable: true, length: 1 })
  carregvlrfrete: string | null;

  @Column('varchar', { name: 'USACARTAFRETEAFT', nullable: true, length: 10 })
  usacartafreteaft: string | null;

  @Column('int', { name: 'NURFECARTAFRETE', nullable: true })
  nurfecartafrete: number | null;

  @Column('varchar', { name: 'FECHVIAGPOSTO', nullable: true, length: 10 })
  fechviagposto: string | null;

  @Column('int', { name: 'CODTIPVENDANFSE', nullable: true })
  codtipvendanfse: number | null;

  @Column('int', { name: 'CODCENCUSNFSE', nullable: true })
  codcencusnfse: number | null;

  @Column('int', { name: 'CODPRODSERVFRETENFSE', nullable: true })
  codprodservfretenfse: number | null;

  @Column('smallint', { name: 'CODEMPSF', nullable: true })
  codempsf: number | null;

  @Column('varchar', { name: 'USASIGAFACIL', nullable: true, length: 10 })
  usasigafacil: string | null;

  @Column('varchar', { name: 'CODCONTRATANTESF', nullable: true, length: 10 })
  codcontratantesf: string | null;

  @Column('varchar', { name: 'AMBIENTESF', nullable: true, length: 10 })
  ambientesf: string | null;

  @Column('varchar', { name: 'IMPXMLLOGSF', nullable: true, length: 10 })
  impxmllogsf: string | null;

  @Column('varchar', { name: 'TOKENSF', nullable: true, length: 10 })
  tokensf: string | null;

  @Column('int', { name: 'CODTIPTITSG', nullable: true })
  codtiptitsg: number | null;

  @Column('int', { name: 'CODCTABCOINTSG', nullable: true })
  codctabcointsg: number | null;

  @Column('int', { name: 'CODNATADIANT', nullable: true })
  codnatadiant: number | null;

  @Column('int', { name: 'CODTIPOPERBADIANT', nullable: true })
  codtipoperbadiant: number | null;

  @Column('int', { name: 'CODCENCUSADIANT', nullable: true })
  codcencusadiant: number | null;

  @Column('varchar', { name: 'REUSAORDEMCARREG', nullable: true, length: 10 })
  reusaordemcarreg: string | null;

  @Column('int', { name: 'NURFERECSIGAFACIL', nullable: true })
  nurferecsigafacil: number | null;

  @Column('varchar', { name: 'USAPEDAGIOITEM', nullable: true, length: 10 })
  usapedagioitem: string | null;

  @Column('varchar', { name: 'CARREGVLRADIANT', nullable: true, length: 10 })
  carregvlradiant: string | null;

  @Column('float', { name: 'VLRMINIMOCHEQUE', nullable: true, precision: 53 })
  vlrminimocheque: number | null;

  @Column('varchar', { name: 'CODCLIENTEREP', nullable: true, length: 100 })
  codclienterep: string | null;

  @Column('varchar', { name: 'ASSINATURAREP', nullable: true, length: 100 })
  assinaturarep: string | null;

  @Column('varchar', { name: 'IMPXMLLOGREP', nullable: true, length: 10 })
  impxmllogrep: string | null;

  @Column('varchar', { name: 'AMBIENTEREP', nullable: true, length: 10 })
  ambienterep: string | null;

  @Column('int', { name: 'NUPEDMOD', nullable: true })
  nupedmod: number | null;

  @Column('varchar', { name: 'MODEMAILCOTFRETE', nullable: true, length: 3103 })
  modemailcotfrete: string | null;

  @Column('varchar', {
    name: 'MODASSUNTOCOTFRETE',
    nullable: true,
    length: 100,
  })
  modassuntocotfrete: string | null;

  @Column('varchar', { name: 'GERARMAISCTEVIAGEM', nullable: true, length: 10 })
  gerarmaiscteviagem: string | null;

  @Column('int', { name: 'CODPRODSERVSEGURO', nullable: true })
  codprodservseguro: number | null;

  @Column('varchar', { name: 'BLOQEFETIVDEPOSITO', nullable: true, length: 10 })
  bloqefetivdeposito: string | null;

  @Column('varchar', {
    name: 'CARREGVLROCVLRFRETE',
    nullable: true,
    length: 10,
  })
  carregvlrocvlrfrete: string | null;

  @Column('varchar', { name: 'GRAVARNUMERACAO', nullable: true, length: 10 })
  gravarnumeracao: string | null;

  @Column('varchar', { name: 'USAVLRFRETEFIXOCF', nullable: true, length: 10 })
  usavlrfretefixocf: string | null;

  @Column('varchar', { name: 'USAEFRETE', nullable: true, length: 10 })
  usaefrete: string | null;

  @Column('varchar', { name: 'AMBIENTEEFRETE', nullable: true, length: 10 })
  ambienteefrete: string | null;

  @Column('varchar', { name: 'IMPXMLLOGEFRETE', nullable: true, length: 10 })
  impxmllogefrete: string | null;

  @Column('varchar', { name: 'USUARIOEFRETE', nullable: true, length: 100 })
  usuarioefrete: string | null;

  @Column('varchar', { name: 'TOKENEFRETE', nullable: true, length: 100 })
  tokenefrete: string | null;

  @Column('int', { name: 'CODCTABCOINTEFRETE', nullable: true })
  codctabcointefrete: number | null;

  @Column('int', { name: 'CODTIPTITEFRETE', nullable: true })
  codtiptitefrete: number | null;

  @Column('varchar', { name: 'TIPOVENCADIANT', nullable: true, length: 10 })
  tipovencadiant: string | null;

  @Column('varchar', { name: 'HISTADIANT', nullable: true, length: 255 })
  histadiant: string | null;

  @Column('varchar', {
    name: 'USAACESSOPGTOPAMCARD',
    nullable: true,
    length: 10,
  })
  usaacessopgtopamcard: string | null;

  @Column('int', { name: 'CODTIPVENDAPED', nullable: true })
  codtipvendaped: number | null;

  @Column('int', { name: 'CODCENCUSPED', nullable: true })
  codcencusped: number | null;

  @Column('int', { name: 'CODPRODSERVFRETEPED', nullable: true })
  codprodservfreteped: number | null;

  @Column('int', { name: 'DECVLRFRETE', nullable: true })
  decvlrfrete: number | null;

  @Column('int', { name: 'CODPRODSERVADVALOREM', nullable: true })
  codprodservadvalorem: number | null;

  @Column('varchar', { name: 'CALCVLRFRETEMOT', nullable: true, length: 10 })
  calcvlrfretemot: string | null;

  @Column('varchar', { name: 'USACONFMEDIDAS', nullable: true, length: 10 })
  usaconfmedidas: string | null;

  @Column('int', { name: 'EVENTOLIBORDTIPVEI', nullable: true })
  eventolibordtipvei: number | null;

  @Column('int', { name: 'CODPRODSERVADICENT', nullable: true })
  codprodservadicent: number | null;

  @Column('varchar', { name: 'VALVLRFRETEMOTMAX', nullable: true, length: 10 })
  valvlrfretemotmax: string | null;

  @Column('int', { name: 'EVENTOLIBORDVLRMAX', nullable: true })
  eventolibordvlrmax: number | null;

  @Column('varchar', { name: 'EXIGECIOTTER', nullable: true, length: 10 })
  exigeciotter: string | null;

  @Column('int', { name: 'CODPRODSERVISS', nullable: true })
  codprodserviss: number | null;

  @Column('varchar', { name: 'USANROCARTAOPEDAFT', nullable: true, length: 10 })
  usanrocartaopedaft: string | null;

  @Column('int', { name: 'CODCTABCOINTBAIREPOM', nullable: true })
  codctabcointbairepom: number | null;

  @Column('int', { name: 'CODTIPOPERBAIREPOM', nullable: true })
  codtipoperbairepom: number | null;

  @Column('varchar', { name: 'USATARGET', nullable: true, length: 10 })
  usatarget: string | null;

  @Column('varchar', { name: 'AMBIENTETARGET', nullable: true, length: 10 })
  ambientetarget: string | null;

  @Column('varchar', { name: 'IMPXMLLOGTARGET', nullable: true, length: 10 })
  impxmllogtarget: string | null;

  @Column('varchar', { name: 'USUARIOTARGET', nullable: true, length: 100 })
  usuariotarget: string | null;

  @Column('varchar', { name: 'SENHATARGET', nullable: true, length: 100 })
  senhatarget: string | null;

  @Column('int', { name: 'MESESVIGTARGET', nullable: true })
  mesesvigtarget: number | null;

  @Column('varchar', { name: 'EXIGEFINAFRE', nullable: true, length: 10 })
  exigefinafre: string | null;

  @Column('int', { name: 'CODCTABCOINTPEDTAR', nullable: true })
  codctabcointpedtar: number | null;

  @Column('int', { name: 'CODTIPOPERBAIPEDTAR', nullable: true })
  codtipoperbaipedtar: number | null;

  @Column('int', { name: 'CODTIPTITPEDTAR', nullable: true })
  codtiptitpedtar: number | null;

  @Column('varchar', { name: 'USAREPOMCONT', nullable: true, length: 10 })
  usarepomcont: string | null;

  @Column('int', { name: 'CODTIPTITREPOM', nullable: true })
  codtiptitrepom: number | null;

  @Column('int', { name: 'CODITEMDESCREPOM', nullable: true })
  coditemdescrepom: number | null;

  @Column('int', { name: 'CODOPERACAO', nullable: true })
  codoperacao: number | null;

  @Column('int', { name: 'CODCTABCOINTCHEQUE', nullable: true })
  codctabcointcheque: number | null;

  @Column('int', { name: 'EVENTOLIBCANCH', nullable: true })
  eventolibcanch: number | null;

  @Column('varchar', { name: 'USAPARCFINCHEQ', nullable: true, length: 10 })
  usaparcfincheq: string | null;

  @Column('int', { name: 'CODPARCFORNPAM', nullable: true })
  codparcfornpam: number | null;

  @Column('varchar', { name: 'DESVINCCANCVIAG', nullable: true, length: 10 })
  desvinccancviag: string | null;

  @Column('varchar', { name: 'USAITEMCTETDE', nullable: true, length: 10 })
  usaitemctetde: string | null;

  @Column('int', { name: 'CODPRODSERVTDE', nullable: true })
  codprodservtde: number | null;

  @Column('varchar', { name: 'NAOVALCIDCTENFSE', nullable: true, length: 10 })
  naovalcidctenfse: string | null;

  @Column('varchar', { name: 'VALEABTPGTOPOSTO', nullable: true, length: 10 })
  valeabtpgtoposto: string | null;

  @Column('varchar', { name: 'INFORMADATACHEQUE', nullable: true, length: 10 })
  informadatacheque: string | null;

  @Column('varchar', { name: 'USAPAGBEM', nullable: true, length: 10 })
  usapagbem: string | null;

  @Column('int', { name: 'CODPARCPB', nullable: true })
  codparcpb: number | null;

  @Column('varchar', { name: 'AMBIENTEPB', nullable: true, length: 10 })
  ambientepb: string | null;

  @Column('varchar', { name: 'IMPXMLLOGPB', nullable: true, length: 10 })
  impxmllogpb: string | null;

  @Column('int', { name: 'CODEMPCONTRATANTEPB', nullable: true })
  codempcontratantepb: number | null;

  @Column('int', { name: 'CODCTABCOINTPB', nullable: true })
  codctabcointpb: number | null;

  @Column('int', { name: 'CODTIPTITPB', nullable: true })
  codtiptitpb: number | null;

  @Column('int', { name: 'CODTIPOPERBAIXAPB', nullable: true })
  codtipoperbaixapb: number | null;

  @Column('varchar', { name: 'USACONFEMPPAMCARD', nullable: true, length: 10 })
  usaconfemppamcard: string | null;

  @Column('varchar', { name: 'USACONFEMPPAGBEM', nullable: true, length: 10 })
  usaconfemppagbem: string | null;

  @Column('varchar', { name: 'USACONFEMPEFRETE', nullable: true, length: 10 })
  usaconfempefrete: string | null;

  @Column('varchar', { name: 'EXIGEFINAFREEFRETE', nullable: true, length: 10 })
  exigefinafreefrete: string | null;

  @Column('varchar', { name: 'EXIGEFINAFREPB', nullable: true, length: 10 })
  exigefinafrepb: string | null;
}
