import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfpplEntity } from './tGFPPL.entity';

@Index('PK_TGFAGM', ['nuplan', 'dtref', 'numeq'], { unique: true })
@Entity('TGFAGM', { schema: 'SANKHYA' })
export class TgfagmEntity {
  @Column('int', { primary: true, name: 'NUMEQ' })
  numeq: number;

  @Column('int', { primary: true, name: 'NUPLAN' })
  nuplan: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { name: 'HRINI' })
  hrini: number;

  @Column('int', { name: 'HRFIM' })
  hrfim: number;

  @ManyToOne(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.tgfagms)
  @JoinColumn([{ name: 'NUPLAN', referencedColumnName: 'nuplan' }])
  nuplan2: TgfpplEntity;
}
