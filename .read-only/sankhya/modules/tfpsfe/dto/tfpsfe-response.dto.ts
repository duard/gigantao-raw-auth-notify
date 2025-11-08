import { ApiProperty } from '@nestjs/swagger';
import { TsiusuResponseDto } from '../../../shared/dto/tsiusu.response.dto';

class TfpfunBasicDto {
  @ApiProperty()
  codfunc: number;

  @ApiProperty({ nullable: true })
  nomefunc: string | null;

  @ApiProperty({ nullable: true })
  email: string | null;

  @ApiProperty({ nullable: true })
  situacao: string | null;

  @ApiProperty({ nullable: true })
  dtadm: Date | null;

  @ApiProperty({ nullable: true })
  diasDeEmpresa: number | null;

  @ApiProperty({ nullable: true })
  dtnasc: Date | null;

  @ApiProperty({ nullable: true })
  idade: number | null;
}

class TsiempBasicDto {
  @ApiProperty()
  codemp: number;

  @ApiProperty({ nullable: true })
  nomefantasia: string | null;

  @ApiProperty({ nullable: true })
  razaosocial: string | null;

  @ApiProperty({ nullable: true })
  cgc: string | null;
}

class TfpreqBasicDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ nullable: true })
  dtcriacao: Date | null;

  @ApiProperty({ nullable: true })
  status: string | null; // Translated status

  @ApiProperty({ nullable: true })
  statusOriginal: number | null; // Original numeric status

  @ApiProperty({ nullable: true })
  observacao: string | null;

  @ApiProperty({ nullable: true })
  prioridade: string | null; // Translated priority

  @ApiProperty({ nullable: true })
  prioridadeOriginal: number | null; // Original numeric priority

  @ApiProperty({ nullable: true })
  dtlimite: Date | null;

  @ApiProperty({ type: TsiusuResponseDto, nullable: true })
  codusu?: TsiusuResponseDto;

  @ApiProperty({ type: TfpfunBasicDto, nullable: true })
  tfpfun?: TfpfunBasicDto;

  @ApiProperty({ type: TsiempBasicDto, nullable: true })
  empresa?: TsiempBasicDto;
}

export class TfpsfeResponseDto {
  @ApiProperty({ nullable: true })
  id: number | null;

  @ApiProperty()
  codemp: number;

  @ApiProperty({ type: TsiempBasicDto, nullable: true })
  empresa?: TsiempBasicDto;

  @ApiProperty()
  codfunc: number;

  @ApiProperty({ type: TfpfunBasicDto, nullable: true })
  tfpfun?: TfpfunBasicDto;

  @ApiProperty()
  nusolicit: number;

  @ApiProperty({ type: TfpreqBasicDto, nullable: true })
  tfpreq?: TfpreqBasicDto;

  @ApiProperty()
  dhsolicit: Date;

  @ApiProperty()
  status: string;

  @ApiProperty({ nullable: true })
  statusSolicitacao?: string;

  @ApiProperty()
  previnicio: Date;

  @ApiProperty()
  diassolicitados: number;

  @ApiProperty()
  adiantadecterc: string;

  @ApiProperty()
  abonopecuniario: string;

  @ApiProperty({ nullable: true })
  observacao: string | null;

  @ApiProperty()
  dtiniaqui: Date;

  @ApiProperty({ nullable: true })
  seqfer: number | null;

  @ApiProperty({ nullable: true })
  diasabonopec: number | null;
}
