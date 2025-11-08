import { ApiProperty } from '@nestjs/swagger';
import { getNewDateTime } from '../../../../utils/date-utils';

export class TfpocoCreateDto {
    @ApiProperty()
    codemp: number;
    @ApiProperty()
    codfunc: number;
    @ApiProperty()
    codhistocor: number;
    @ApiProperty()
    dtinicocor: Date;
    @ApiProperty()
    descrocor: string;
    @ApiProperty()
    dtalter: Date;
    @ApiProperty()
    nuocor: number;
    @ApiProperty()
    recorrente: string;
    @ApiProperty()
    digitado: string;
    @ApiProperty()
    indefeitoretro: string;
    @ApiProperty()
    reajustecct: string;
    @ApiProperty()
    envesocial: string;
    @ApiProperty()
    forcadtfim: string;
    @ApiProperty()
    sequenciacnv: number;
}