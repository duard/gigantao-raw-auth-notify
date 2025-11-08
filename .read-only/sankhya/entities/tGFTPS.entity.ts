import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFTPS', ['codtipsaz'], { unique: true })
@Entity('TGFTPS', { schema: 'SANKHYA' })
export class TgftpsEntity {
  @Column('int', { primary: true, name: 'CODTIPSAZ' })
  codtipsaz: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;
}
