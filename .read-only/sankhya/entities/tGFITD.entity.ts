import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfitcEntity } from './tGFITC.entity';

@Index(
  'PK_TGFITD',
  [
    'numcotacao',
    'codprod',
    'codparc',
    'controle',
    'codlocal',
    'cabecalho',
    'diferenciador',
    'sequencia',
  ],
  { unique: true },
)
@Entity('TGFITD', { schema: 'SANKHYA' })
export class TgfitdEntity {
  @Column('int', { primary: true, name: 'NUMCOTACAO' })
  numcotacao: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('money', { name: 'PERCENTUAL', nullable: true })
  percentual: number | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'D'" })
  tipo: string;

  @Column('char', {
    primary: true,
    name: 'CABECALHO',
    length: 1,
    default: () => "'N'",
  })
  cabecalho: string;

  @Column('smallint', {
    primary: true,
    name: 'DIFERENCIADOR',
    default: () => '(0)',
  })
  diferenciador: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfitds)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfitds)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfitcEntity, (tgfitcEntity) => tgfitcEntity.tgfitds)
  @JoinColumn([
    { name: 'NUMCOTACAO', referencedColumnName: 'numcotacao' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CONTROLE', referencedColumnName: 'controle' },
    { name: 'CODLOCAL', referencedColumnName: 'codlocal' },
    { name: 'CABECALHO', referencedColumnName: 'cabecalho' },
    { name: 'DIFERENCIADOR', referencedColumnName: 'diferenciador' },
  ])
  tgfitc: TgfitcEntity;
}
