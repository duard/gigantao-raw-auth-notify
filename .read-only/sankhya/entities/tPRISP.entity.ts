import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';

@Index('PK_TPRISP', ['idiproc', 'idefx', 'seqlsp'], { unique: true })
@Entity('TPRISP', { schema: 'SANKHYA' })
export class TprispEntity {
  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { primary: true, name: 'SEQLSP' })
  seqlsp: number;

  @Column('int', { name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11, default: () => "' '" })
  controlepa: string;

  @Column('int', { name: 'CODPRODSP' })
  codprodsp: number;

  @Column('varchar', { name: 'CONTROLESP', length: 11, default: () => "' '" })
  controlesp: string;

  @Column('varchar', { name: 'NROLOTE', nullable: true, length: 20 })
  nrolote: string | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('datetime', { name: 'DTFAB', nullable: true })
  dtfab: Date | null;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tprisps)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc2: TpriprocEntity;
}
