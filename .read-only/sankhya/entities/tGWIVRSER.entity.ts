import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwittEntity } from './tGWITT.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index(
  'PK_TGWIVRSER',
  ['nutarefa', 'seqtarefa', 'codprod', 'controle', 'serie'],
  { unique: true },
)
@Entity('TGWIVRSER', { schema: 'SANKHYA' })
export class TgwivrserEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQTAREFA' })
  seqtarefa: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('varchar', { primary: true, name: 'SERIE', length: 100 })
  serie: string;

  @Column('char', { name: 'TIPOCOD', nullable: true, length: 1 })
  tipocod: string | null;

  @ManyToOne(() => TgwittEntity, (tgwittEntity) => tgwittEntity.tgwivrsers)
  @JoinColumn([
    { name: 'NUTAREFA', referencedColumnName: 'nutarefa' },
    { name: 'SEQTAREFA', referencedColumnName: 'sequencia' },
  ])
  tgwitt: TgwittEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwivrsers)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
