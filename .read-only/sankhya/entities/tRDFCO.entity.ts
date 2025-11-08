import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrdconEntity } from './tRDCON.entity';

@Index(
  'IX_TRDFCO_CONTROLE_3E7EA',
  ['nucontrole', 'nucontrolefilho', 'ordem', 'ativo', 'adicional', 'controle'],
  {},
)
@Index('PK_TRDFCO', ['nucontrole', 'nucontrolefilho'], { unique: true })
@Entity('TRDFCO', { schema: 'SANKHYA' })
export class TrdfcoEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLE',
    precision: 10,
    scale: 0,
  })
  nucontrole: number;

  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLEFILHO',
    precision: 10,
    scale: 0,
  })
  nucontrolefilho: number;

  @Column('numeric', {
    name: 'ORDEM',
    precision: 10,
    scale: 0,
    default: () => '(100)',
  })
  ordem: number;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @Column('char', { name: 'ADICIONAL', nullable: true, length: 1 })
  adicional: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @ManyToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdfcos)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TrdconEntity;

  @ManyToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdfcos2)
  @JoinColumn([{ name: 'NUCONTROLEFILHO', referencedColumnName: 'nucontrole' }])
  nucontrolefilho2: TrdconEntity;
}
