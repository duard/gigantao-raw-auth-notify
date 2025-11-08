import { ApiProperty } from '@nestjs/swagger';

export class TfpdpdCreateDto {
  @ApiProperty()
  codEmp: number;
  @ApiProperty()
  codfunc: number;
  @ApiProperty()
  grauParentesco: number;
  @ApiProperty()
  dependIrf: string;
  @ApiProperty()
  salFam: string;
  @ApiProperty()
  pensionista: string;
  @ApiProperty()
  dtNasc: Date;
  @ApiProperty()
  percPensao: number;
  @ApiProperty()
  codfuncpens: number;
  @ApiProperty()
  dtAlter: Date;
  @ApiProperty()
  codCid: number;
  @ApiProperty({ example: 'N' })
  semAtestado: string;
  @ApiProperty({ example: 'N' })
  convenio: string;
  @ApiProperty({ example: 'N' })
  idadeEscolar: string;
  @ApiProperty()
  sexo: string;
  @ApiProperty()
  nomeMae: string;
}
