import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWLOGFATAUTO', ['nunota'], { unique: true })
@Entity('TGWLOGFATAUTO', { schema: 'SANKHYA' })
export class TgwlogfatautoEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('text', { name: 'LOG', nullable: true })
  log: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
