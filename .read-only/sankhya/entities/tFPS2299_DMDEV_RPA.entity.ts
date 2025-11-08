import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2299DmdevElEntity } from './tFPS2299_DMDEV_EL.entity';
import { Tfps2299DmdevTrpaEntity } from './tFPS2299_DMDEV_TRPA.entity';

@Index(
  'PK_TFPS2299_DMDEV_RPA',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2299',
    'idedmdev',
    'codlotacao',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2299_DMDEV_RPA', { schema: 'SANKHYA' })
export class Tfps2299DmdevRpaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE2299', length: 100 })
  chave2299: string;

  @Column('varchar', { primary: true, name: 'IDEDMDEV', length: 100 })
  idedmdev: string;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 100 })
  codlotacao: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'INDSIMPLES', nullable: true })
  indsimples: number | null;

  @Column('smallint', { name: 'GRAUEXP', nullable: true })
  grauexp: number | null;

  @ManyToOne(
    () => Tfps2299DmdevElEntity,
    (tfps2299DmdevElEntity) => tfps2299DmdevElEntity.tfps2299DmdevRpas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave2299' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CODLOTACAO', referencedColumnName: 'chave' },
  ])
  tfps2299DmdevEl: Tfps2299DmdevElEntity;

  @OneToMany(
    () => Tfps2299DmdevTrpaEntity,
    (tfps2299DmdevTrpaEntity) => tfps2299DmdevTrpaEntity.tfps2299DmdevRpa,
  )
  tfps2299DmdevTrpas: Tfps2299DmdevTrpaEntity[];
}
