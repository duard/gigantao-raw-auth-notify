import { ApiProperty } from '@nestjs/swagger';

export class EmpresaResponseDto {
  @ApiProperty()
  codemp: number;

  @ApiProperty({ nullable: true })
  nomefantasia: string | null;
}

export class IdentidadeResponseDto {
  @ApiProperty({ nullable: true })
  identidade: string | null;

  @ApiProperty({ nullable: true })
  orgaorg: string | null;
}

export class CnhResponseDto {
  @ApiProperty({ nullable: true })
  nrocnh: string | null;

  @ApiProperty({ nullable: true })
  categoriacnh: string | null;

  @ApiProperty({ nullable: true })
  orgaocnh: string | null;
}

export class ReservistaResponseDto {
  @ApiProperty({ nullable: true })
  nroreservista: string | null;
}

export class CtpsResponseDto {
  @ApiProperty({ nullable: true })
  numcps: number | null;

  @ApiProperty({ nullable: true })
  seriecps: string | null;

  @ApiProperty({ nullable: true })
  ctpsdigital: string | null;
}

export class DocumentosResponseDto {
  @ApiProperty({ type: () => IdentidadeResponseDto })
  identidade: IdentidadeResponseDto;

  @ApiProperty({ type: () => CnhResponseDto })
  cnh: CnhResponseDto;

  @ApiProperty({ type: () => ReservistaResponseDto })
  reservista: ReservistaResponseDto;

  @ApiProperty({ type: () => CtpsResponseDto })
  ctps: CtpsResponseDto;
}

export class EmpregoResponseDto {
  @ApiProperty({ nullable: true })
  codcargo: number | null;

  @ApiProperty({ nullable: true })
  descrcargo: string | null;

  @ApiProperty({ nullable: true })
  situacao: string | null;

  @ApiProperty({ nullable: true })
  dtadm: Date | null;

  @ApiProperty({ nullable: true })
  dtdem: Date | null;

  @ApiProperty({ nullable: true })
  primemprego: string | null;

  @ApiProperty({ nullable: true })
  novoemprego: string | null;

  @ApiProperty({ nullable: true })
  matriculaold: string | null;
}

export class EnderecoResponseDto {
  @ApiProperty({ nullable: true })
  codend: number | null;

  @ApiProperty({ nullable: true })
  nomeend: string | null;

  @ApiProperty({ nullable: true })
  numend: string | null;

  @ApiProperty({ nullable: true })
  codbai: number | null;

  @ApiProperty({ nullable: true })
  nomebai: string | null;

  @ApiProperty({ nullable: true })
  codcid: number | null;

  @ApiProperty({ nullable: true })
  nomecid: string | null;

  @ApiProperty({ nullable: true })
  cep: string | null;
}

export class ContatoResponseDto {
  @ApiProperty({ nullable: true })
  email: string | null;

  @ApiProperty({ nullable: true })
  celular: string | null;
}

export class BancarioResponseDto {
  @ApiProperty({ nullable: true })
  tipconta: string | null;

  @ApiProperty({ nullable: true })
  codctabco: string | null;
}

export class EsocialResponseDto {
  @ApiProperty({ nullable: true })
  reciboesocial2200: string | null;

  @ApiProperty({ nullable: true })
  motdesligesocial: string | null;

  @ApiProperty({ nullable: true })
  sitesocial: string | null;

  @ApiProperty({ nullable: true })
  sitsind: string | null;

  @ApiProperty({ nullable: true })
  temcontribsindical: string | null;

  @ApiProperty({ nullable: true })
  provisaoferias: string | null;

  @ApiProperty({ nullable: true })
  provisao13: string | null;

  @ApiProperty({ nullable: true })
  cagedadm: string | null;

  @ApiProperty({ nullable: true })
  envesocial: string | null;

  @ApiProperty({ nullable: true })
  nisenviado: string | null;
}

export class OutrosResponseDto {
  @ApiProperty({ nullable: true })
  tipsal: string | null;

  @ApiProperty({ nullable: true })
  tiptab: string | null;

  @ApiProperty({ nullable: true })
  afastfgts: string | null;

  @ApiProperty({ nullable: true })
  convmed: string | null;

  @ApiProperty({ nullable: true })
  tipreceb: string | null;

  @ApiProperty({ nullable: true })
  codadmfgts: string | null;

  @ApiProperty({ nullable: true })
  codadmfgtsii: string | null;

  @ApiProperty({ nullable: true })
  traboutraemp: string | null;

  @ApiProperty({ nullable: true })
  partpat: string | null;

  @ApiProperty({ nullable: true })
  sindicalizado: string | null;

  @ApiProperty({ nullable: true })
  tipponto: string | null;

  @ApiProperty({ nullable: true })
  dirreciproco: string | null;

  @ApiProperty({ nullable: true })
  possuirra: string | null;

  @ApiProperty({ nullable: true })
  tempoparcial: string | null;

  @ApiProperty({ nullable: true })
  semintegral: string | null;

  @ApiProperty({ nullable: true })
  compensasabado: string | null;

  @ApiProperty({ nullable: true })
  dispensaponto: string | null;

  @ApiProperty({ nullable: true })
  mei: string | null;

  @ApiProperty({ nullable: true })
  casadobr: string | null;

  @ApiProperty({ nullable: true })
  segdesemprego: string | null;

  @ApiProperty({ nullable: true })
  trabaposent: string | null;

  @ApiProperty({ nullable: true })
  infocota: string | null;

  @ApiProperty({ nullable: true })
  suspexpafast: string | null;

  @ApiProperty({ nullable: true })
  temdescassist: string | null;

  @ApiProperty({ nullable: true })
  idconsig: string | null;

  @ApiProperty({ nullable: true })
  dispperexp: string | null;

  @ApiProperty({ nullable: true })
  jornadaespprof: string | null;

  @ApiProperty({ nullable: true })
  cadini: string | null;

  @ApiProperty({ nullable: true })
  aderimp927: string | null;

  @ApiProperty({ nullable: true })
  ajudacomp: string | null;

  @ApiProperty({ nullable: true })
  suspcontrato: string | null;

  @ApiProperty({ nullable: true })
  transfexterna: string | null;

  @ApiProperty({ nullable: true })
  bloqueiabatidaonline: string | null;

  @ApiProperty({ nullable: true })
  dispensamatricula: string | null;

  @ApiProperty({ nullable: true })
  pvd: string | null;
}

export class UsuarioRegistroResponseDto {
  @ApiProperty({ nullable: true })
  codusu: number | null;

  @ApiProperty({ nullable: true })
  nomeusu: string | null;
}

export class FuncionarioResponseDto {
  @ApiProperty({ nullable: true })
  codfunc: number | null;

  @ApiProperty({ nullable: true })
  nomefunc: string | null;

  @ApiProperty({ nullable: true })
  cpf: string | null;

  @ApiProperty({ nullable: true })
  pis: string | null;

  @ApiProperty({ nullable: true })
  dtnasc: Date | null;

  @ApiProperty({ nullable: true })
  sexo: string | null;

  @ApiProperty({ nullable: true })
  estadocivil: number | null;

  @ApiProperty({ nullable: true })
  nomemae: string | null;

  @ApiProperty({ nullable: true })
  nomepai: string | null;

  @ApiProperty({ nullable: true })
  deficientefisico: string | null;

  @ApiProperty({ nullable: true })
  aprendizgravida: string | null;

  @ApiProperty({ nullable: true })
  filhosbr: string | null;
}

export class TfpfunResponseDto {
  @ApiProperty({ type: () => EmpresaResponseDto })
  empresa: EmpresaResponseDto;

  @ApiProperty({ type: () => FuncionarioResponseDto })
  funcionario: FuncionarioResponseDto;

  @ApiProperty({ type: () => DocumentosResponseDto })
  documentos: DocumentosResponseDto;

  @ApiProperty({ type: () => EmpregoResponseDto })
  emprego: EmpregoResponseDto;

  @ApiProperty({ type: () => EnderecoResponseDto })
  endereco: EnderecoResponseDto;

  @ApiProperty({ type: () => ContatoResponseDto })
  contato: ContatoResponseDto;

  @ApiProperty({ type: () => BancarioResponseDto })
  bancario: BancarioResponseDto;

  @ApiProperty({ type: () => EsocialResponseDto })
  esocial: EsocialResponseDto;

  @ApiProperty({ type: () => OutrosResponseDto })
  outros: OutrosResponseDto;

  @ApiProperty({ type: () => UsuarioRegistroResponseDto })
  usuarioRegistro: UsuarioRegistroResponseDto;
}
