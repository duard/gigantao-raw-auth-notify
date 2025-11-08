import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSSE', ['serie'], { unique: true })
@Entity('TGFSSE', { schema: 'SANKHYA' })
export class TgfsseEntity {
  @Column('varchar', { primary: true, name: 'SERIE', length: 12 })
  serie: string;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQNOTA', nullable: true })
  seqnota: number | null;
}
