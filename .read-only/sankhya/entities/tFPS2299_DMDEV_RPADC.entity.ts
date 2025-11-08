import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2299DmdevIrpadcEntity } from './tFPS2299_DMDEV_IRPADC.entity';
import { Tfps2299DmdevIpadcEntity } from './tFPS2299_DMDEV_IPADC.entity';
import { Tfps2299DmdevTrpadcEntity } from './tFPS2299_DMDEV_TRPADC.entity';

@Index(
  'PK_TFPS2299_DMDEV_RPADC',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2299',
    'idedmdev',
    'chave2299PaAdc',
    'perref',
    'codlotacao',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2299_DMDEV_RPADC', { schema: 'SANKHYA' })
export class Tfps2299DmdevRpadcEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE2299_PA_ADC', length: 100 })
  chave2299PaAdc: string;

  @Column('varchar', { primary: true, name: 'PERREF', length: 100 })
  perref: string;

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

  @OneToMany(
    () => Tfps2299DmdevIrpadcEntity,
    (tfps2299DmdevIrpadcEntity) => tfps2299DmdevIrpadcEntity.tfps2299DmdevRpadc,
  )
  tfps2299DmdevIrpadcs: Tfps2299DmdevIrpadcEntity[];

  @ManyToOne(
    () => Tfps2299DmdevIpadcEntity,
    (tfps2299DmdevIpadcEntity) => tfps2299DmdevIpadcEntity.tfps2299DmdevRpadcs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave2299' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CHAVE2299_PA_ADC', referencedColumnName: 'chave2299PaAdc' },
    { name: 'PERREF', referencedColumnName: 'perref' },
    { name: 'CODLOTACAO', referencedColumnName: 'chave' },
  ])
  tfps2299DmdevIpadc: Tfps2299DmdevIpadcEntity;

  @OneToMany(
    () => Tfps2299DmdevTrpadcEntity,
    (tfps2299DmdevTrpadcEntity) => tfps2299DmdevTrpadcEntity.tfps2299DmdevRpadc,
  )
  tfps2299DmdevTrpadcs: Tfps2299DmdevTrpadcEntity[];
}
