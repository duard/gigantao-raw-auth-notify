import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TprrpaEntity } from './tPRRPA.entity';

@Index(
  'PK_TPRESR',
  ['idrpa', 'idiproc', 'codprodpa', 'controlepa', 'codcpm', 'statusexec'],
  {
    unique: true,
  },
)
@Entity('TPRESR', { schema: 'SANKHYA' })
export class TpresrEntity {
  @Column('int', { primary: true, name: 'IDRPA' })
  idrpa: number;

  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('int', { primary: true, name: 'CODCPM', default: () => '(0)' })
  codcpm: number;

  @Column('varchar', {
    primary: true,
    name: 'STATUSEXEC',
    length: 1,
    default: () => "'N'",
  })
  statusexec: string;

  @Column('float', { name: 'ESTOQUE', precision: 53, default: () => '(0)' })
  estoque: number;

  @Column('float', {
    name: 'ESTOQUEPERDA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  estoqueperda: number | null;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tpresrs)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc2: TpriprocEntity;

  @ManyToOne(() => TprrpaEntity, (tprrpaEntity) => tprrpaEntity.tpresrs)
  @JoinColumn([{ name: 'IDRPA', referencedColumnName: 'idrpa' }])
  idrpa2: TprrpaEntity;
}
