import { ApiProperty } from '@nestjs/swagger';

export class CreateTfpfunDto {
  @ApiProperty()
  codemp: number;

  @ApiProperty()
  codfunc: number;

  @ApiProperty()
  nomefunc: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  pis: string;

  @ApiProperty()
  dtnasc: Date;

  @ApiProperty()
  dtadm: Date;

  @ApiProperty()
  dtdem: Date;

  @ApiProperty()
  email: string;

  @ApiProperty()
  celular: string;

  @ApiProperty()
  codcargo: number;

  @ApiProperty()
  codfuncao: number;

  @ApiProperty()
  situacao: string;

  @ApiProperty({ required: false })
  adApadrinhado?: string;

  @ApiProperty({ required: false })
  mesdia?: number;

  @ApiProperty({ required: false })
  nomemae?: string;

  @ApiProperty({ required: false })
  nomepai?: string;

  @ApiProperty({ required: false })
  numend?: string;

  @ApiProperty({ required: false })
  complemento?: string;

  @ApiProperty({ required: false })
  cep?: string;

  @ApiProperty({ required: false })
  telefone?: string;

  @ApiProperty({ required: false })
  numcps?: number;

  @ApiProperty({ required: false })
  identidade?: string;

  @ApiProperty({ required: false })
  sexo?: string;

  @ApiProperty({ required: false })
  estadocivil?: number;

  @ApiProperty({ required: false })
  codcarreira?: number;

  @ApiProperty({ required: false })
  codusu?: number;

  @ApiProperty({ required: false })
  coddep?: number;

  @ApiProperty({ required: false })
  codlocalponto?: number;

  @ApiProperty({ required: false })
  codage?: number;

  @ApiProperty({ required: false })
  codbco?: number;

  @ApiProperty({ required: false })
  codbai?: number;

  @ApiProperty({ required: false })
  codgrupohorario?: number;

  @ApiProperty({ required: false })
  orgaorg?: string;
}
