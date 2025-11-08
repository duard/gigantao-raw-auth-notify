import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprefxEntity } from './tPREFX.entity';

@Index(
  'PK_TPREVPI',
  ['idefx', 'codprodpa', 'controlepa', 'codprodpi', 'controlepi'],
  {
    unique: true,
  },
)
@Entity('TPREVPI', { schema: 'SANKHYA' })
export class TprevpiEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('int', { primary: true, name: 'CODPRODPI' })
  codprodpi: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPI',
    length: 11,
    default: () => "' '",
  })
  controlepi: string;

  @ManyToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprevpis)
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;
}
