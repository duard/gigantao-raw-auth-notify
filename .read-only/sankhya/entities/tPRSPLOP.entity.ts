import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprilopEntity } from './tPRILOP.entity';

@Index('PK_TPRSPLOP', ['nulop', 'seqop', 'idefx', 'seqlsp'], { unique: true })
@Entity('TPRSPLOP', { schema: 'SANKHYA' })
export class TprsplopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('smallint', { primary: true, name: 'SEQOP' })
  seqop: number;

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

  @ManyToOne(() => TprilopEntity, (tprilopEntity) => tprilopEntity.tprsplops)
  @JoinColumn([
    { name: 'NULOP', referencedColumnName: 'nulop' },
    { name: 'SEQOP', referencedColumnName: 'seqop' },
  ])
  tprilop: TprilopEntity;
}
