import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TprefxEntity } from './tPREFX.entity';

@Index('PK_TPRTXP', ['idefx', 'sequencia'], { unique: true })
@Entity('TPRFXT', { schema: 'SANKHYA' })
export class TprfxtEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('char', { name: 'TIPOFILTRO', length: 1, default: () => "'P'" })
  tipofiltro: string;

  @Column('int', { name: 'IDEFXBASE' })
  idefxbase: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODLOCAL' })
  codlocal: number;

  @Column('varchar', { name: 'EXPSQL', length: 3103 })
  expsql: string;

  @Column('varchar', { name: 'CONTROLEMP', length: 11 })
  controlemp: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprfxts)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprfxts2)
  @JoinColumn([{ name: 'CODPRODMP', referencedColumnName: 'codprod' }])
  codprodmp: TgfproEntity;

  @ManyToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprfxts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;
}
