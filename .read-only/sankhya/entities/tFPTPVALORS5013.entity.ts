import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPTPVALORS5013', ['codtpvalor'], { unique: true })
@Entity('TFPTPVALORS5013', { schema: 'SANKHYA' })
export class Tfptpvalors5013Entity {
  @Column('smallint', { primary: true, name: 'CODTPVALOR' })
  codtpvalor: number;

  @Column('varchar', { name: 'TPVALOR', length: 5 })
  tpvalor: string;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;
}
