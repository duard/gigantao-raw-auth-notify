import { ApiProperty } from '@nestjs/swagger';

export class CreateTsiusuDto {
  @ApiProperty()
  codusu: number;

  @ApiProperty()
  nomeusu: string | null;

  @ApiProperty()
  contacesso: string | null;

  @ApiProperty()
  dtlimacesso: Date | null;

  @ApiProperty()
  interno: string | null;

  @ApiProperty()
  codfunc: number | null;

  @ApiProperty()
  email: string | null;

  @ApiProperty()
  optgat: string | null;

  @ApiProperty()
  vlrmaxaut: number | null;

  @ApiProperty()
  nivel: number;

  @ApiProperty()
  dtalter: Date;

  @ApiProperty()
  caixa: string;

  @ApiProperty()
  servidorsmtp: string | null;

  @ApiProperty()
  tiposmtp: string | null;

  @ApiProperty()
  usuariosmtp: string | null;

  @ApiProperty()
  senhasmtp: string | null;

  @ApiProperty()
  nomefila: string | null;

  @ApiProperty()
  dtultimasenha: Date | null;

  @ApiProperty()
  senhanuncaexpira: string | null;

  @ApiProperty()
  temecf: string;

  @ApiProperty()
  topbaixareceita: number | null;

  @ApiProperty()
  topbaixadespesa: number | null;

  @ApiProperty()
  baixarec: string | null;

  @ApiProperty()
  baixadesp: string | null;

  @ApiProperty()
  altctafat: string;

  @ApiProperty()
  altctaimpbol: string;

  @ApiProperty()
  rendiasvaljur: number | null;

  @ApiProperty()
  vercabpropria: string;

  @ApiProperty()
  portasmtp: number;

  @ApiProperty()
  segurancasmtp: string;

  @ApiProperty()
  altordcfech: string;

  @ApiProperty()
  exibirvalanalrent: string;

  @ApiProperty()
  aprovcot: string;

  @ApiProperty()
  userName: string | null;

  @ApiProperty()
  codetapa: number | null;

  @ApiProperty()
  contagol: string | null;

  @ApiProperty()
  dtultacesso: Date | null;

  @ApiProperty()
  emailsollib: string | null;

  @ApiProperty()
  notslafila: string | null;

  @ApiProperty()
  cpf: string | null;

  @ApiProperty()
  rg: string | null;

  @ApiProperty()
  nomeusucplt: string | null;

  @ApiProperty()
  dtnasc: Date | null;

  @ApiProperty()
  impnfcentral: string;

  @ApiProperty()
  codusualter: number | null;

  @ApiProperty()
  nomeusualter: string | null;

  @ApiProperty()
  minutosfin: number;

  @ApiProperty()
  acessovisualcab: string;

  @ApiProperty()
  restringecart: string;

  @ApiProperty()
  verimpcurs: string;

  @ApiProperty()
  excliborc: string;

  @ApiProperty()
  locale: string;

  @ApiProperty()
  foto: Buffer | null;

  @ApiProperty()
  permexprel: string;

  @ApiProperty()
  toleranciaacesso: number | null;

  @ApiProperty()
  visacesoutusu: string;

  @ApiProperty()
  apenascomplib: string;

  @ApiProperty()
  impsep: string | null;

  @ApiProperty()
  acessaformularel: string;

  @ApiProperty()
  integraeconect: string;

  @ApiProperty()
  infrecsen: string | null;

  @ApiProperty()
  avisavarpreco: string;

  @ApiProperty()
  nivelacesso: string | null;

  @ApiProperty()
  permaltmoeda: string | null;

  @ApiProperty()
  permimprimerel: string;

  @ApiProperty()
  instalapacotess: string;

  @ApiProperty()
  infbiomdig: string | null;

  @ApiProperty()
  ignorahorascruz: string;

  @ApiProperty()
  senhaeconect: number | null;

  @ApiProperty()
  codideconect: string | null;

  @ApiProperty()
  idperfileconect: string | null;

  @ApiProperty()
  permreperro: string;

  @ApiProperty()
  selectwcapo: string;

  @ApiProperty()
  proprietario: string | null;

  @ApiProperty()
  operacional: string | null;

  @ApiProperty()
  implantador: string | null;

  @ApiProperty()
  gestor: string | null;

  @ApiProperty()
  codperfil: number | null;

  @ApiProperty()
  nuversao: number | null;

  @ApiProperty()
  timvertodasfacs: string | null;

  @ApiProperty()
  timpathscanner: string | null;

  @ApiProperty()
  timbaixaword: string | null;

  @ApiProperty()
  usurede: string | null;

  @ApiProperty()
  gruporede: string | null;

  @ApiProperty()
  ignoraldap: string | null;

  @ApiProperty()
  timbaixtitrecabe: string;

  @ApiProperty()
  atunuversao: string | null;

  @ApiProperty()
  accountdhexpira: Date | null;

  @ApiProperty()
  accounttoken: string | null;

  @ApiProperty()
  accountid: string | null;

  @ApiProperty()
  accountnomefoto: string | null;

  @ApiProperty()
  accountemail: string | null;

  @ApiProperty()
  tokencheckout: string | null;

  @ApiProperty()
  acessopdvcancitens: string | null;

  @ApiProperty()
  acessopdvsang: string | null;

  @ApiProperty()
  acessopdvsupr: string | null;

  @ApiProperty()
  acessopdvsangpdesp: string | null;

  @ApiProperty()
  tipenvnotsol: string | null;

  @ApiProperty()
  liberacredito: string | null;

  @ApiProperty()
  codempnegoc: number | null;

  @ApiProperty()
  podealterarpef: string | null;

  @ApiProperty()
  adIdexterno: string | null;

  @ApiProperty()
  adRecebenotificacao: string | null;

  @ApiProperty()
  adReabriros: string | null;

  @ApiProperty()
  adAutosirvo: string | null;

  @ApiProperty()
  adRecebenotifaso: string | null;

  @ApiProperty()
  accountpartner: number | null;

  @ApiProperty()
  tipousu: number;

  @ApiProperty()
  imp2Sansupcai: string;

  @ApiProperty()
  abregaveta: string | null;

  @ApiProperty()
  adCadeadomos: string | null;

  @ApiProperty()
  adAutoperar1: string | null;

  @ApiProperty()
  adAutoperar2: string | null;

  @ApiProperty()
  adAutoperar3: string | null;

  @ApiProperty()
  adAutoperar4: string | null;

  @ApiProperty()
  adAutoperar5: string | null;

  @ApiProperty()
  adAutoperar6: string | null;

  @ApiProperty()
  adAutoperar7: string | null;

  @ApiProperty()
  desctotalnotapdv: string | null;

  @ApiProperty()
  adTelefonecorp: string | null;

  @ApiProperty()
  adMatmosaic: string | null;

  @ApiProperty()
  adEnviaWpp: string | null;
}
