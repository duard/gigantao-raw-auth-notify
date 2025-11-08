import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFBAL', ['nubal'], { unique: true })
@Entity('TGFBAL', { schema: 'SANKHYA' })
export class TgfbalEntity {
  @Column('smallint', { primary: true, name: 'NUBAL' })
  nubal: number;

  @Column('varchar', { name: 'MARCA', nullable: true, length: 50 })
  marca: string | null;

  @Column('varchar', { name: 'MODELO', nullable: true, length: 50 })
  modelo: string | null;

  @Column('varchar', { name: 'EXPRESSAOREGULAR', nullable: true, length: 400 })
  expressaoregular: string | null;

  @Column('smallint', { name: 'POSINI', nullable: true })
  posini: number | null;

  @Column('smallint', { name: 'TAMANHO', nullable: true })
  tamanho: number | null;
}
