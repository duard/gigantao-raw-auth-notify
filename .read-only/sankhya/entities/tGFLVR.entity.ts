import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFLVR', ['nulayout'], { unique: true })
@Entity('TGFLVR', { schema: 'SANKHYA' })
export class TgflvrEntity {
  @Column('smallint', { primary: true, name: 'NULAYOUT' })
  nulayout: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('varchar', {
    name: 'PADRAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  padrao: string | null;

  @Column('text', { name: 'LAYOUT', nullable: true })
  layout: string | null;

  @Column('text', { name: 'LAYOUT2', nullable: true })
  layout2: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;
}
