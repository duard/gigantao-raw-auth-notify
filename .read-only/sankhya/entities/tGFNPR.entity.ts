import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNPR', ['nunota', 'nunotaorig'], { unique: true })
@Entity('TGFNPR', { schema: 'SANKHYA' })
export class TgfnprEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('smallint', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;
}
