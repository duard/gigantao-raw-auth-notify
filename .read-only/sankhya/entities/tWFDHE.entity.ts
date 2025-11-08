import { Column, Entity, Index } from 'typeorm';

@Index('PK_TWFDHE', ['nuele', 'nugdg'], { unique: true })
@Entity('TWFDHE', { schema: 'SANKHYA' })
export class TwfdheEntity {
  @Column('int', { primary: true, name: 'NUELE' })
  nuele: number;

  @Column('int', { primary: true, name: 'NUGDG' })
  nugdg: number;

  @Column('varchar', { name: 'TITULO', length: 50 })
  titulo: string;
}
