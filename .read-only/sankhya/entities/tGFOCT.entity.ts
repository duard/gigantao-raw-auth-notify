import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFOCT', ['codoco'], { unique: true })
@Entity('TGFOCT', { schema: 'SANKHYA' })
export class TgfoctEntity {
  @Column('smallint', { primary: true, name: 'CODOCO' })
  codoco: number;

  @Column('varchar', { name: 'DESCRICAO', length: 80 })
  descricao: string;
}
