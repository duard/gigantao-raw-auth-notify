import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1200DmdevIrpadcEntity } from './tFPS1200_DMDEV_IRPADC.entity';
import { Tfps1200DmdevIpadcEntity } from './tFPS1200_DMDEV_IPADC.entity';
import { Tfps1200DmdevTrpadcEntity } from './tFPS1200_DMDEV_TRPADC.entity';

@Index(
  'PK_TFPS1200_DMDEV_RPADC',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1200',
    'idedmdev',
    'chave1200PaAdc',
    'perref',
    'codlotacao',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_RPADC', { schema: 'SANKHYA' })
export class Tfps1200DmdevRpadcEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE1200', length: 100 })
  chave1200: string;

  @Column('varchar', { primary: true, name: 'IDEDMDEV', length: 100 })
  idedmdev: string;

  @Column('varchar', { primary: true, name: 'CHAVE1200_PA_ADC', length: 100 })
  chave1200PaAdc: string;

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
    () => Tfps1200DmdevIrpadcEntity,
    (tfps1200DmdevIrpadcEntity) => tfps1200DmdevIrpadcEntity.tfps1200DmdevRpadc,
  )
  tfps1200DmdevIrpadcs: Tfps1200DmdevIrpadcEntity[];

  @ManyToOne(
    () => Tfps1200DmdevIpadcEntity,
    (tfps1200DmdevIpadcEntity) => tfps1200DmdevIpadcEntity.tfps1200DmdevRpadcs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1200', referencedColumnName: 'chave1200' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CHAVE1200_PA_ADC', referencedColumnName: 'chave1200PaAdc' },
    { name: 'PERREF', referencedColumnName: 'perref' },
    { name: 'CODLOTACAO', referencedColumnName: 'chave' },
  ])
  tfps1200DmdevIpadc: Tfps1200DmdevIpadcEntity;

  @OneToMany(
    () => Tfps1200DmdevTrpadcEntity,
    (tfps1200DmdevTrpadcEntity) => tfps1200DmdevTrpadcEntity.tfps1200DmdevRpadc,
  )
  tfps1200DmdevTrpadcs: Tfps1200DmdevTrpadcEntity[];
}
