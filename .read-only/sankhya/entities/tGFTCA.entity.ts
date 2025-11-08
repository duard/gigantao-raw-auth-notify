import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFTCA', ['nunota'], { unique: true })
@Entity('TGFTCA', { schema: 'SANKHYA' })
export class TgftcaEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;
}
