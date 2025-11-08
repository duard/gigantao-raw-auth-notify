import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPDI', ['dtinicio'], { unique: true })
@Entity('TGFPDI', { schema: 'SANKHYA' })
export class TgfpdiEntity {
  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('float', { name: 'PERCPARTDIFAL', precision: 53 })
  percpartdifal: number;
}
