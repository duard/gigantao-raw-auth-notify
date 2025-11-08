import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwrecEntity } from './tGWREC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TGWTRCD',
  ['codprod', 'codbarra', 'controle', 'nurecebimento', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGWTRCD', { schema: 'SANKHYA' })
export class TgwtrcdEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'CODBARRA', length: 25 })
  codbarra: string;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'NURECEBIMENTO' })
  nurecebimento: number;

  @Column('decimal', {
    name: 'QTDTRIADAVOLPAD',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdtriadavolpad: number | null;

  @Column('decimal', {
    name: 'QTDTRIADA',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdtriada: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'CROSSDOCKING', length: 1, default: () => "'N'" })
  crossdocking: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @ManyToOne(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.tgwtrcds)
  @JoinColumn([
    { name: 'NURECEBIMENTO', referencedColumnName: 'nurecebimento' },
  ])
  nurecebimento2: TgwrecEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwtrcds)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwtrcds)
  @JoinColumn([{ name: 'CODUSUCONF', referencedColumnName: 'codusu' }])
  codusuconf: TsiusuEntity;
}
