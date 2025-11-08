import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFACE', ['tipo', 'id', 'dhalter'], { unique: true })
@Entity('TGFACE', { schema: 'SANKHYA' })
export class TgfaceEntity {
  @Column('varchar', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('varchar', { primary: true, name: 'ID', length: 50 })
  id: string;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('datetime', { name: 'DHDONE', nullable: true })
  dhdone: Date | null;
}
