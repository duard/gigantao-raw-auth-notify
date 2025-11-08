import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFDMG', ['dtinicial', 'codemp', 'codgrupoprod', 'codtab'], {
  unique: true,
})
@Entity('TGFDMG', { schema: 'SANKHYA' })
export class TgfdmgEntity {
  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { name: 'DTFINAL' })
  dtfinal: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('smallint', { primary: true, name: 'CODTAB' })
  codtab: number;

  @Column('float', { name: 'DESCMAX', precision: 53 })
  descmax: number;

  @Column('float', { name: 'BONIFMAX', nullable: true, precision: 53 })
  bonifmax: number | null;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfdmgs)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfdmgs)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab2: TgfntaEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdmgs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
