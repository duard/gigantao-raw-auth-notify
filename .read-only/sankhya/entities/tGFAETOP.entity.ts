import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFAETOP', ['codaei', 'codtipoper'], { unique: true })
@Entity('TGFAETOP', { schema: 'SANKHYA' })
export class TgfaetopEntity {
  @Column('int', { primary: true, name: 'CODAEI' })
  codaei: number;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;
}
