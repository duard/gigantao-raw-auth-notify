import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TFXADE', ['id'], { unique: true })
@Entity('TFXADE', { schema: 'SANKHYA' })
export class TfxadeEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'NOMETAB', nullable: true, length: 60 })
  nometab: string | null;

  @Column('varchar', { name: 'STRPK', nullable: true, length: 200 })
  strpk: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;
}
