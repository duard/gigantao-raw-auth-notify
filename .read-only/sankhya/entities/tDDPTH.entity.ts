import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TddcreEntity } from './tDDCRE.entity';
import { TddinsEntity } from './tDDINS.entity';

@Index('PK_TDDPTH', ['codpath', 'nivel'], { unique: true })
@Entity('TDDPTH', { schema: 'SANKHYA' })
export class TddpthEntity {
  @Column('varchar', { primary: true, name: 'CODPATH', length: 32 })
  codpath: string;

  @Column('smallint', { primary: true, name: 'NIVEL' })
  nivel: number;

  @OneToMany(() => TddcreEntity, (tddcreEntity) => tddcreEntity.tddpth)
  tddcres: TddcreEntity[];

  @ManyToOne(() => TddinsEntity, (tddinsEntity) => tddinsEntity.tddpths)
  @JoinColumn([{ name: 'NUINSTANCIA', referencedColumnName: 'nuinstancia' }])
  nuinstancia: TddinsEntity;
}
