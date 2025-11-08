import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TddcreEntity } from './tDDCRE.entity';
import { TddpreEntity } from './tDDPRE.entity';

@Index('PK_TDDREL', ['nurel'], { unique: true })
@Entity('TDDREL', { schema: 'SANKHYA' })
export class TddrelEntity {
  @Column('numeric', { primary: true, name: 'NUREL', precision: 10, scale: 0 })
  nurel: number;

  @Column('varchar', { name: 'NOMEREL', length: 50 })
  nomerel: string;

  @Column('varchar', { name: 'DESCRREL', nullable: true, length: 255 })
  descrrel: string | null;

  @Column('text', { name: 'SQL', nullable: true })
  sql: string | null;

  @OneToMany(() => TddcreEntity, (tddcreEntity) => tddcreEntity.nurel2)
  tddcres: TddcreEntity[];

  @OneToMany(() => TddpreEntity, (tddpreEntity) => tddpreEntity.nurel2)
  tddpres: TddpreEntity[];
}
