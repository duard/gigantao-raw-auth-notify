import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFRUPQTDPROD', ['dtmov'], { unique: true })
@Entity('TGFRUPQTDPROD', { schema: 'SANKHYA' })
export class TgfrupqtdprodEntity {
  @Column('date', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('int', { name: 'QTDPRODTOTAL' })
  qtdprodtotal: number;
}
