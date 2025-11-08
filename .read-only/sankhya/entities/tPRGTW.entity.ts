import { Entity, Index, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { TprefxEntity } from './tPREFX.entity';

@Index('PK_TPRGTW', ['idefx'], { unique: true })
@Entity('TPRGTW', { schema: 'SANKHYA' })
export class TprgtwEntity {
  @PrimaryColumn('int', { name: 'IDEFX' })
  idefx: number;

  @OneToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprgtw, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'IDEFX', referencedColumnName: 'idefx' })
  tprefx: TprefxEntity;
}
