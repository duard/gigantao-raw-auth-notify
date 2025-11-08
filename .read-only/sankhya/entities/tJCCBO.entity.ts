import { Column, Entity, Index } from 'typeorm';

@Index('PK_TJCCBO', ['pagas'], { unique: true })
@Entity('TJCCBO', { schema: 'SANKHYA' })
export class TjccboEntity {
  @Column('smallint', { primary: true, name: 'PAGAS' })
  pagas: number;

  @Column('smallint', { name: 'LIMBONIF' })
  limbonif: number;
}
