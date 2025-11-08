import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwrecEntity } from './tGWREC.entity';

@Index(
  'PK_TGWRCON',
  ['uma', 'codprod', 'codbarra', 'controle', 'nurecebimento', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGWRCON', { schema: 'SANKHYA' })
export class TgwrconEntity {
  @Column('varchar', { primary: true, name: 'UMA', length: 30 })
  uma: string;

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

  @Column('float', { name: 'QTDRECEBIDAVOLPAD', nullable: true, precision: 53 })
  qtdrecebidavolpad: number | null;

  @Column('float', { name: 'QTDAVARIAVOLPAD', nullable: true, precision: 53 })
  qtdavariavolpad: number | null;

  @Column('datetime', { name: 'DHINI', default: () => 'getdate()' })
  dhini: Date;

  @Column('datetime', { name: 'DHFIM', nullable: true })
  dhfim: Date | null;

  @Column('varchar', { name: 'RECONTAGEM', length: 1, default: () => "'N'" })
  recontagem: string;

  @Column('int', { name: 'NUTAREFA', nullable: true })
  nutarefa: number | null;

  @Column('varchar', { name: 'FECHADO', length: 1, default: () => "'N'" })
  fechado: string;

  @Column('varchar', {
    name: 'CONFFINALIZADA',
    length: 1,
    default: () => "'N'",
  })
  conffinalizada: string;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('int', { primary: true, name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwrcons)
  @JoinColumn([{ name: 'CODUSUCONF', referencedColumnName: 'codusu' }])
  codusuconf: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwrcons)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.tgwrcons)
  @JoinColumn([
    { name: 'NURECEBIMENTO', referencedColumnName: 'nurecebimento' },
  ])
  nurecebimento2: TgwrecEntity;
}
