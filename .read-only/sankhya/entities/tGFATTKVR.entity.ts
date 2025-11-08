import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFATTKVR', ['codprod', 'dhalter'], { unique: true })
@Entity('TGFATTKVR', { schema: 'SANKHYA' })
export class TgfattkvrEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;
}
