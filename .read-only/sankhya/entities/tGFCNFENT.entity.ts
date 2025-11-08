import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCNFENT', ['versaont'], { unique: true })
@Entity('TGFCNFENT', { schema: 'SANKHYA' })
export class TgfcnfentEntity {
  @Column('smallint', { primary: true, name: 'VERSAONT' })
  versaont: number;

  @Column('datetime', { name: 'DTENTHOMOLOG', nullable: true })
  dtenthomolog: Date | null;

  @Column('datetime', { name: 'DTENTPROD', nullable: true })
  dtentprod: Date | null;
}
