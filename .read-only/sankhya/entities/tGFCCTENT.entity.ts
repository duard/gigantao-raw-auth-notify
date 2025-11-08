import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCCTENT', ['versaont'], { unique: true })
@Entity('TGFCCTENT', { schema: 'SANKHYA' })
export class TgfcctentEntity {
  @Column('smallint', { primary: true, name: 'VERSAONT' })
  versaont: number;

  @Column('datetime', { name: 'DTENTHOMOLOG', nullable: true })
  dtenthomolog: Date | null;

  @Column('datetime', { name: 'DTENTPROD', nullable: true })
  dtentprod: Date | null;
}
