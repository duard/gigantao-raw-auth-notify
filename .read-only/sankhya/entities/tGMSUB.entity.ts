import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgmcfgEntity } from './tGMCFG.entity';

@Index('PK_TGMSUB', ['codmeta', 'codcampo'], { unique: true })
@Entity('TGMSUB', { schema: 'SANKHYA' })
export class TgmsubEntity {
  @Column('smallint', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('char', { primary: true, name: 'CODCAMPO', length: 32 })
  codcampo: string;

  @Column('char', { name: 'CAMPOSUBSTITUTO', nullable: true, length: 64 })
  camposubstituto: string | null;

  @Column('smallint', { name: 'GRAU', default: () => '(0)' })
  grau: number;

  @ManyToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tgmsubs)
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta2: TgmcfgEntity;
}
