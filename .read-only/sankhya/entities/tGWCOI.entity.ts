import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgwmdivEntity } from './tGWMDIV.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwconEntity } from './tGWCON.entity';
import { TgwcoivalEntity } from './tGWCOIVAL.entity';

@Index(
  'PK_TGWCOI',
  [
    'nuconferencia',
    'codprod',
    'codbarra',
    'sequencia',
    'tipovolume',
    'codvolume',
    'controle',
  ],
  { unique: true },
)
@Entity('TGWCOI', { schema: 'SANKHYA' })
export class TgwcoiEntity {
  @Column('int', { primary: true, name: 'NUCONFERENCIA' })
  nuconferencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'CODBARRA', length: 25 })
  codbarra: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(1)',
  })
  sequencia: number;

  @Column('numeric', {
    name: 'QTDECONF',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdeconf: number | null;

  @Column('char', { name: 'RECONTAGEM', length: 1, default: () => "'N'" })
  recontagem: string;

  @Column('char', { name: 'ACEITARDIF', length: 1, default: () => "'N'" })
  aceitardif: string;

  @Column('numeric', {
    name: 'QTDEDIF',
    nullable: true,
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  qtdedif: number | null;

  @Column('char', { name: 'IGNORAR', length: 1, default: () => "'N'" })
  ignorar: string;

  @Column('char', { name: 'CODVOLCOMPRA', nullable: true, length: 2 })
  codvolcompra: string | null;

  @Column('varchar', {
    primary: true,
    name: 'TIPOVOLUME',
    length: 1,
    default: () => "'N'",
  })
  tipovolume: string;

  @Column('int', { primary: true, name: 'CODVOLUME', default: () => '(0)' })
  codvolume: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('decimal', {
    name: 'QTDAVARIA',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdavaria: number | null;

  @Column('char', { name: 'RECEBERAVARIA', length: 1, default: () => "'N'" })
  receberavaria: string;

  @Column('char', { name: 'DEVOLVER', length: 1, default: () => "'N'" })
  devolver: string;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('datetime', { name: 'DTVALMIN', nullable: true })
  dtvalmin: Date | null;

  @Column('smallint', { name: 'QTDPECAS', nullable: true })
  qtdpecas: number | null;

  @ManyToOne(() => TgwmdivEntity, (tgwmdivEntity) => tgwmdivEntity.tgwcois)
  @JoinColumn([{ name: 'CODMDIV', referencedColumnName: 'codmdiv' }])
  codmdiv: TgwmdivEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwcois)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwcois2)
  @JoinColumn([{ name: 'CODUSUDIV', referencedColumnName: 'codusu' }])
  codusudiv: TsiusuEntity;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwcois, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia2: TgwconEntity;

  @OneToMany(() => TgwcoivalEntity, (tgwcoivalEntity) => tgwcoivalEntity.tgwcoi)
  tgwcoivals: TgwcoivalEntity[];
}
