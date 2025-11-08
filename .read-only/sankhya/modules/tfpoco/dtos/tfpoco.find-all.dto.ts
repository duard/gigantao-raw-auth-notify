import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { QueryDto } from '../../../../utils/dto/query.dto';
import { TfpocoEntity } from '../../../entities/tFPOCO.entity';

export class QueryTfpocoDto extends QueryDto<TfpocoEntity> {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    codemp?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    codfunc?: number;
    
}