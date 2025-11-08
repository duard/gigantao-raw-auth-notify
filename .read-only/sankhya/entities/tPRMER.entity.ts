import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TpriatvEntity } from './tPRIATV.entity';
import { TprrpaEntity } from './tPRRPA.entity';

@Index('PK_TPRMER', ['idmer', 'seqmer'], { unique: true })
@Entity('TPRMER', { schema: 'SANKHYA' })
export class TprmerEntity {
  @Column('int', { primary: true, name: 'IDMER' })
  idmer: number;

  @Column('smallint', { primary: true, name: 'SEQMER', default: () => '(1)' })
  seqmer: number;

  @Column('int', { name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11, default: () => "' '" })
  controlepa: string;

  @Column('float', { name: 'QTD', precision: 53, default: () => '(0)' })
  qtd: number;

  @Column('smallint', { name: 'SINAL' })
  sinal: number;

  @Column('datetime', { name: 'DHMOV' })
  dhmov: Date;

  @Column('varchar', { name: 'STATUSEXEC', length: 1, default: () => "'N'" })
  statusexec: string;

  @Column('int', { name: 'CODCPM', default: () => '(0)' })
  codcpm: number;

  @Column('float', {
    name: 'QTDPERDA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdperda: number | null;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tprmers)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc: TpriprocEntity;

  @ManyToOne(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.tprmers)
  @JoinColumn([{ name: 'IDIATV', referencedColumnName: 'idiatv' }])
  idiatv: TpriatvEntity;

  @ManyToOne(() => TprrpaEntity, (tprrpaEntity) => tprrpaEntity.tprmers)
  @JoinColumn([{ name: 'IDRPA', referencedColumnName: 'idrpa' }])
  idrpa: TprrpaEntity;
}
