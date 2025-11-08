import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgmcfgEntity } from './tGMCFG.entity';

@Index('PK_TGMTME', ['codtipoper', 'codmeta'], { unique: true })
@Entity('TGMTME', { schema: 'SANKHYA' })
export class TgmtmeEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('smallint', { name: 'RECDESP', default: () => '(0)' })
  recdesp: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('char', { name: 'COMPROMISSO', length: 1, default: () => "'N'" })
  compromisso: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmtmes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tgmtmes)
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta2: TgmcfgEntity;
}
