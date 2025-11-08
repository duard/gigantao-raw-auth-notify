import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprapaEntity } from './tPRAPA.entity';

@Index('PK_TPRASP', ['nuapo', 'seqapa', 'codprodsp', 'controlesp'], {
  unique: true,
})
@Entity('TPRASP', { schema: 'SANKHYA' })
export class TpraspEntity {
  @Column('int', { primary: true, name: 'NUAPO' })
  nuapo: number;

  @Column('smallint', { primary: true, name: 'SEQAPA' })
  seqapa: number;

  @Column('int', { primary: true, name: 'CODPRODSP' })
  codprodsp: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLESP',
    length: 11,
    default: () => "' '",
  })
  controlesp: string;

  @Column('float', { name: 'QTD', precision: 53 })
  qtd: number;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @ManyToOne(() => TprapaEntity, (tprapaEntity) => tprapaEntity.tprasps)
  @JoinColumn([
    { name: 'NUAPO', referencedColumnName: 'nuapo' },
    { name: 'SEQAPA', referencedColumnName: 'seqapa' },
  ])
  tprapa: TprapaEntity;
}
