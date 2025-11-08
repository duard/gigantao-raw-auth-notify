import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFREN_TEMP', ['nunota', 'nufin'], { unique: true })
@Entity('TGFREN_TEMP', { schema: 'SANKHYA' })
export class TgfrenTempEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('money', { name: 'VLRDESDOB', nullable: true })
  vlrdesdob: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
