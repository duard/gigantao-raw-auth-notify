import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprefxEntity } from './tPREFX.entity';
import { TprformEntity } from './tPRFORM.entity';

@Index('PK_TPRFRME', ['idefx', 'idform'], { unique: true })
@Entity('TPRFRME', { schema: 'SANKHYA' })
export class TprfrmeEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { primary: true, name: 'IDFORM' })
  idform: number;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('char', { name: 'OBRIGATORIO', length: 1, default: () => "'N'" })
  obrigatorio: string;

  @Column('char', { name: 'TIPOACESSO', length: 1, default: () => "'1'" })
  tipoacesso: string;

  @ManyToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprfrmes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;

  @ManyToOne(() => TprformEntity, (tprformEntity) => tprformEntity.tprfrmes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDFORM', referencedColumnName: 'idform' }])
  idform2: TprformEntity;
}
