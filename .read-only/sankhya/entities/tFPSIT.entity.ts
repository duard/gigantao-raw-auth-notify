import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfppubEntity } from './tFPPUB.entity';
import { TfpeveEntity } from './tFPEVE.entity';

@Index('PK_TFPSIT', ['codsitestat'], { unique: true })
@Entity('TFPSIT', { schema: 'SANKHYA' })
export class TfpsitEntity {
  @Column('smallint', { primary: true, name: 'CODSITESTAT' })
  codsitestat: number;

  @Column('char', { name: 'DESCRSIT', length: 20 })
  descrsit: string;

  @OneToMany(() => TfppubEntity, (tfppubEntity) => tfppubEntity.codsitestat)
  tfppubs: TfppubEntity[];

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpsits)
  @JoinColumn([{ name: 'PARCUNICA13SAL', referencedColumnName: 'codevento' }])
  parcunica13Sal: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpsits2)
  @JoinColumn([{ name: 'PARCELA2_13SAL', referencedColumnName: 'codevento' }])
  parcela2_13Sal: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpsits3)
  @JoinColumn([{ name: 'PARCELA1_13SAL', referencedColumnName: 'codevento' }])
  parcela1_13Sal: TfpeveEntity;
}
