import { ApiProperty } from '@nestjs/swagger';

export class TsiusuResponseDto {
  @ApiProperty()
  codusu: number;

  @ApiProperty()
  nomeusu: string | null;

  @ApiProperty()
  email: string | null;
}
