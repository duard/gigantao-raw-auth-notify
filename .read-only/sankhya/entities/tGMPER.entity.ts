import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgmcfgEntity } from './tGMCFG.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGMPER', ['codmeta', 'dtref'], { unique: true })
@Entity('TGMPER', { schema: 'SANKHYA' })
export class TgmperEntity {
  @Column('smallint', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tgmpers)
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta2: TgmcfgEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmpers)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
