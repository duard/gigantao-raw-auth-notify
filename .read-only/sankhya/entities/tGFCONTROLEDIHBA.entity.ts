import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__TGFCONTR__3214EC27FA309179', ['id'], { unique: true })
@Entity('TGFCONTROLEDIHBA', { schema: 'SANKHYA' })
export class TgfcontroledihbaEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('datetime', { name: 'DHPROCESS', nullable: true })
  dhprocess: Date | null;

  @Column('datetime', { name: 'DHINC', default: () => 'getdate()' })
  dhinc: Date;
}
