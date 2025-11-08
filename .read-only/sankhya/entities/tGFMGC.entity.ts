import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcmvEntity } from './tGFCMV.entity';

@Index(
  'PK_TGFMGC',
  [
    'codtipvenda',
    'codconfig',
    'codemp',
    'referencia',
    'codprod',
    'controle',
    'codvend',
    'codparc',
    'codcencus',
    'codnat',
    'codproj',
    'codtipoper',
    'codlocal',
    'golsinal',
    'goldev',
    'recdesp',
  ],
  { unique: true },
)
@Entity('TGFMGC', { schema: 'SANKHYA' })
export class TgfmgcEntity {
  @Column('int', { primary: true, name: 'CODCONFIG' })
  codconfig: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('smallint', { primary: true, name: 'CODVEND', default: () => '(0)' })
  codvend: number;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODNAT', default: () => '(0)' })
  codnat: number;

  @Column('int', { primary: true, name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('smallint', {
    primary: true,
    name: 'CODTIPOPER',
    default: () => '(0)',
  })
  codtipoper: number;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('float', { name: 'CUSTOVAR', nullable: true, precision: 53 })
  custovar: number | null;

  @Column('float', { name: 'CUSTOGER', nullable: true, precision: 53 })
  custoger: number | null;

  @Column('float', { name: 'PARTCUSTOFIXO', nullable: true, precision: 53 })
  partcustofixo: number | null;

  @Column('float', { name: 'VALORVENDA', nullable: true, precision: 53 })
  valorvenda: number | null;

  @Column('float', { name: 'LUCRO', nullable: true, precision: 53 })
  lucro: number | null;

  @Column('float', { name: 'MARGEMCONTRIB', nullable: true, precision: 53 })
  margemcontrib: number | null;

  @Column('float', { name: 'QTDNEGTOTAL', nullable: true, precision: 53 })
  qtdnegtotal: number | null;

  @Column('float', { name: 'PESOLIQTOTAL', nullable: true, precision: 53 })
  pesoliqtotal: number | null;

  @Column('float', { name: 'M3TOTAL', nullable: true, precision: 53 })
  m3Total: number | null;

  @Column('float', { name: 'PIS', nullable: true, precision: 53 })
  pis: number | null;

  @Column('float', { name: 'COFINS', nullable: true, precision: 53 })
  cofins: number | null;

  @Column('smallint', { primary: true, name: 'GOLSINAL', default: () => '(0)' })
  golsinal: number;

  @Column('smallint', { primary: true, name: 'RECDESP', default: () => '(0)' })
  recdesp: number;

  @Column('smallint', { primary: true, name: 'GOLDEV', default: () => '(0)' })
  goldev: number;

  @Column('float', { name: 'PESOBRUTOTOTAL', nullable: true, precision: 53 })
  pesobrutototal: number | null;

  @Column('float', { name: 'QTDNOTASTOTAL', nullable: true, precision: 53 })
  qtdnotastotal: number | null;

  @Column('smallint', {
    primary: true,
    name: 'CODTIPVENDA',
    default: () => '(0)',
  })
  codtipvenda: number;

  @ManyToOne(() => TgfcmvEntity, (tgfcmvEntity) => tgfcmvEntity.tgfmgcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCONFIG', referencedColumnName: 'codconfig' }])
  codconfig2: TgfcmvEntity;
}
