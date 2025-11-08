import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';

@Index(
  'PK_TPRIDEP',
  [
    'idiprocpi',
    'idiprocpa',
    'codprodpa',
    'controlepa',
    'codprodpi',
    'controlepi',
  ],
  { unique: true },
)
@Entity('TPRIDEP', { schema: 'SANKHYA' })
export class TpridepEntity {
  @Column('int', { primary: true, name: 'IDIPROCPI' })
  idiprocpi: number;

  @Column('int', { primary: true, name: 'IDIPROCPA' })
  idiprocpa: number;

  @Column('int', { primary: true, name: 'CODPRODPI' })
  codprodpi: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPI',
    length: 11,
    default: () => "' '",
  })
  controlepi: string;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('datetime', { name: 'DHINC', default: () => 'getdate()' })
  dhinc: Date;

  @Column('float', { name: 'QTDDEP', precision: 53, default: () => '(0)' })
  qtddep: number;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tprideps)
  @JoinColumn([{ name: 'IDIPROCPA', referencedColumnName: 'idiproc' }])
  idiprocpa2: TpriprocEntity;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tprideps2)
  @JoinColumn([{ name: 'IDIPROCPI', referencedColumnName: 'idiproc' }])
  idiprocpi2: TpriprocEntity;
}
