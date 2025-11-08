import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFRTT', ['codtiptitori', 'codtiptitdes'], { unique: true })
@Entity('TGFRTT', { schema: 'SANKHYA' })
export class TgfrttEntity {
  @Column('smallint', { primary: true, name: 'CODTIPTITORI' })
  codtiptitori: number;

  @Column('smallint', { primary: true, name: 'CODTIPTITDES' })
  codtiptitdes: number;
}
