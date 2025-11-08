import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprcpmEntity } from './tPRCPM.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TprefxEntity } from './tPREFX.entity';

@Index('PK_TPRIRPA', ['idefx', 'codprodpa'], { unique: true })
@Entity('TPRIRPA', { schema: 'SANKHYA' })
export class TprirpaEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'S'" })
  tipo: string;

  @ManyToOne(() => TprcpmEntity, (tprcpmEntity) => tprcpmEntity.tprirpas)
  @JoinColumn([{ name: 'CODCPM', referencedColumnName: 'codcpm' }])
  codcpm: TprcpmEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprirpas)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa2: TgfproEntity;

  @ManyToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprirpas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;
}
