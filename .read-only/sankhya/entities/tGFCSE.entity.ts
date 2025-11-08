import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCSE', ['serie'], { unique: true })
@Entity('TGFCSE', { schema: 'SANKHYA' })
export class TgfcseEntity {
  @Column('varchar', { primary: true, name: 'SERIE', length: 12 })
  serie: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
