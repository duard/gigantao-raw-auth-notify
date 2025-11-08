import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMODTOP', ['numodtop'], { unique: true })
@Entity('TGFMODTOP', { schema: 'SANKHYA' })
export class TgfmodtopEntity {
  @Column('int', { primary: true, name: 'NUMODTOP' })
  numodtop: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('varchar', { name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'HASH', length: 200 })
  hash: string;

  @Column('text', { name: 'MODELO', nullable: true })
  modelo: string | null;
}
