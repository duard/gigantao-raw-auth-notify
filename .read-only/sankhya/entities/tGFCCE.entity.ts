import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCCE', ['nunota', 'seqcce'], { unique: true })
@Entity('TGFCCE', { schema: 'SANKHYA' })
export class TgfcceEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQCCE' })
  seqcce: number;

  @Column('text', { name: 'XMLCCE' })
  xmlcce: string;

  @Column('varchar', { name: 'PATHALT', nullable: true, length: 3103 })
  pathalt: string | null;
}
