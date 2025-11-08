import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprapaEntity } from './tPRAPA.entity';

@Index('PK_TPRAPF', ['nuapo', 'seqapa', 'nunota', 'seqite'], { unique: true })
@Entity('TPRAPF', { schema: 'SANKHYA' })
export class TprapfEntity {
  @Column('int', { primary: true, name: 'NUAPO' })
  nuapo: number;

  @Column('smallint', { primary: true, name: 'SEQAPA' })
  seqapa: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQITE' })
  seqite: number;

  @Column('float', { name: 'QTD', precision: 53 })
  qtd: number;

  @ManyToOne(() => TprapaEntity, (tprapaEntity) => tprapaEntity.tprapfs)
  @JoinColumn([
    { name: 'NUAPO', referencedColumnName: 'nuapo' },
    { name: 'SEQAPA', referencedColumnName: 'seqapa' },
  ])
  tprapa: TprapaEntity;
}
