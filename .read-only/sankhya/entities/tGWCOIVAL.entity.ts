import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwcoiEntity } from './tGWCOI.entity';

@Index(
  'PK_TGWCOIVAL',
  [
    'nuconferencia',
    'codprod',
    'codbarra',
    'sequencia',
    'tipovolume',
    'codvolume',
    'controle',
    'dtval',
  ],
  { unique: true },
)
@Entity('TGWCOIVAL', { schema: 'SANKHYA' })
export class TgwcoivalEntity {
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

  @Column('varchar', {
    primary: true,
    name: 'TIPOVOLUME',
    length: 1,
    default: () => "'N'",
  })
  tipovolume: string;

  @Column('int', { primary: true, name: 'CODVOLUME', default: () => '(0)' })
  codvolume: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('datetime', { primary: true, name: 'DTVAL' })
  dtval: Date;

  @Column('numeric', {
    name: 'QTDSHELFLIFE',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdshelflife: number | null;

  @Column('decimal', {
    name: 'QTDAVARIA',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdavaria: number | null;

  @ManyToOne(() => TgwcoiEntity, (tgwcoiEntity) => tgwcoiEntity.tgwcoivals)
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'CODBARRA', referencedColumnName: 'codbarra' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TIPOVOLUME', referencedColumnName: 'tipovolume' },
    { name: 'CODVOLUME', referencedColumnName: 'codvolume' },
    { name: 'CONTROLE', referencedColumnName: 'controle' },
  ])
  tgwcoi: TgwcoiEntity;
}
