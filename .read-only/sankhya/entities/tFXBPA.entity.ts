import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TFXBPA', ['id'], { unique: true })
@Entity('TFXBPA', { schema: 'SANKHYA' })
export class TfxbpaEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'SUBTIPOVENDA' })
  subtipovenda: number;

  @Column('varchar', { name: 'FISCAL', nullable: true, length: 101 })
  fiscal: string | null;

  @Column('int', { name: 'CODPARCTEF' })
  codparctef: number;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', {
    name: 'EHPOS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ehpos: string | null;
}
