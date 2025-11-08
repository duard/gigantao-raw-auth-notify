import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprconfEntity } from './tPRCONF.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRCOI', ['nuconf', 'codprod', 'controle'], { unique: true })
@Entity('TPRCOI', { schema: 'SANKHYA' })
export class TprcoiEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 10,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { name: 'QTDCONF' })
  qtdconf: number;

  @ManyToOne(() => TprconfEntity, (tprconfEntity) => tprconfEntity.tprcois)
  @JoinColumn([{ name: 'NUCONF', referencedColumnName: 'nuconf' }])
  nuconf2: TprconfEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprcois)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
