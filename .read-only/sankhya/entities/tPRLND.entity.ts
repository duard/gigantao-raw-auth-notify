import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TprefxEntity } from './tPREFX.entity';
import { TprrpaEntity } from './tPRRPA.entity';

@Index('PK_TPRLND', ['idefx'], { unique: true })
@Entity('TPRLND', { schema: 'SANKHYA' })
export class TprlndEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @OneToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprlnd, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;

  @ManyToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprlnds)
  @JoinColumn([{ name: 'IDEFXPOOL', referencedColumnName: 'idefx' }])
  idefxpool: TprefxEntity;

  @ManyToOne(() => TprrpaEntity, (tprrpaEntity) => tprrpaEntity.tprlnds)
  @JoinColumn([{ name: 'IDRPAPADRAO', referencedColumnName: 'idrpa' }])
  idrpapadrao: TprrpaEntity;
}
