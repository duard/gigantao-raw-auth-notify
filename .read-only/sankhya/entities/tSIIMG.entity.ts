import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIIMG', ['codimg'], { unique: true })
@Entity('TSIIMG', { schema: 'SANKHYA' })
export class TsiimgEntity {
  @Column('smallint', { primary: true, name: 'CODIMG' })
  codimg: number;

  @Column('image', { name: 'FOTO', nullable: true })
  foto: Buffer | null;
}
