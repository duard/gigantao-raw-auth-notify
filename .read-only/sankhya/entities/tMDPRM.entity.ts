import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMDPRM', ['proxresol'], { unique: true })
@Entity('TMDPRM', { schema: 'SANKHYA' })
export class TmdprmEntity {
  @Column('datetime', { primary: true, name: 'PROXRESOL' })
  proxresol: Date;
}
