import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMDPRS', ['proxresol'], { unique: true })
@Entity('TMDPRS', { schema: 'SANKHYA' })
export class TmdprsEntity {
  @Column('datetime', { primary: true, name: 'PROXRESOL' })
  proxresol: Date;
}
