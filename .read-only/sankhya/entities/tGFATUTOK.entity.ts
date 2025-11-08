import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFATUTOKD', ['codprod', 'dhalter'], { unique: true })
@Entity('TGFATUTOK', { schema: 'SANKHYA' })
export class TgfatutokEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;
}
