import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfphcpEntity } from './tFPHCP.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfphlmEntity } from './tFPHLM.entity';

@Index('PK_TFPHFX', ['nulimitehr', 'nucomphr', 'faixahr', 'sequencial'], {
  unique: true,
})
@Entity('TFPHFX', { schema: 'SANKHYA' })
export class TfphfxEntity {
  @Column('smallint', { primary: true, name: 'NULIMITEHR' })
  nulimitehr: number;

  @Column('smallint', { primary: true, name: 'NUCOMPHR' })
  nucomphr: number;

  @Column('int', { primary: true, name: 'FAIXAHR' })
  faixahr: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('float', { name: 'PERCACRESCBH', nullable: true, precision: 53 })
  percacrescbh: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIAL' })
  sequencial: number;

  @Column('smallint', { name: 'ACIMAFX1', nullable: true })
  acimafx1: number | null;

  @Column('float', { name: 'PERCACRESCFX1', nullable: true, precision: 53 })
  percacrescfx1: number | null;

  @Column('char', { name: 'MOVFOLHAFX1', length: 1, default: () => "'N'" })
  movfolhafx1: string;

  @Column('smallint', { name: 'ACIMAFX2', nullable: true })
  acimafx2: number | null;

  @Column('float', { name: 'PERCACRESCFX2', nullable: true, precision: 53 })
  percacrescfx2: number | null;

  @Column('char', { name: 'MOVFOLHAFX2', length: 1, default: () => "'N'" })
  movfolhafx2: string;

  @Column('smallint', { name: 'AGRUPAMENTO', default: () => '(1)' })
  agrupamento: number;

  @ManyToOne(() => TfphcpEntity, (tfphcpEntity) => tfphcpEntity.tfphfxes)
  @JoinColumn([
    { name: 'NULIMITEHR', referencedColumnName: 'nulimitehr' },
    { name: 'NUCOMPHR', referencedColumnName: 'nucomphr' },
  ])
  tfphcp: TfphcpEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfphfxes)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento: TfpeveEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphfxes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfphlmEntity, (tfphlmEntity) => tfphlmEntity.tfphfxes)
  @JoinColumn([{ name: 'CODTABHORAS', referencedColumnName: 'nulimitehr' }])
  codtabhoras: TfphlmEntity;
}
