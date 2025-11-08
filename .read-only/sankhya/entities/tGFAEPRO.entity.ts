import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFAEPRO', ['codaei', 'codprod'], { unique: true })
@Entity('TGFAEPRO', { schema: 'SANKHYA' })
export class TgfaeproEntity {
  @Column('int', { primary: true, name: 'CODAEI' })
  codaei: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;
}
