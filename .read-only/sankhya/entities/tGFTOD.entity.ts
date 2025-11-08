import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFTOD', ['codtipoper'], { unique: true })
@Entity('TGFTOD', { schema: 'SANKHYA' })
export class TgftodEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('text', { name: 'DOCUMENTACAO', nullable: true })
  documentacao: string | null;
}
