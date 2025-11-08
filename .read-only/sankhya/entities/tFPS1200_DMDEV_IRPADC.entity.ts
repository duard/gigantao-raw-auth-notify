import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1200DmdevRpadcEntity } from './tFPS1200_DMDEV_RPADC.entity';

@Index(
  'PK_TFPS1200_DMDEV_IRPADC',
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
    'matricula',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_IRPADC', { schema: 'SANKHYA' })
export class Tfps1200DmdevIrpadcEntity {
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

  @Column('varchar', { primary: true, name: 'MATRICULA', length: 100 })
  matricula: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CODRUBR', nullable: true, length: 30 })
  codrubr: string | null;

  @Column('varchar', { name: 'IDETABRUBR', nullable: true, length: 8 })
  idetabrubr: string | null;

  @Column('float', { name: 'QTDRUBR', nullable: true, precision: 53 })
  qtdrubr: number | null;

  @Column('float', { name: 'FATORRUBR', nullable: true, precision: 53 })
  fatorrubr: number | null;

  @Column('float', { name: 'VRUNIT', nullable: true, precision: 53 })
  vrunit: number | null;

  @Column('float', { name: 'VRRUBR', nullable: true, precision: 53 })
  vrrubr: number | null;

  @Column('varchar', { name: 'INDAPURIR', nullable: true, length: 1 })
  indapurir: string | null;

  @ManyToOne(
    () => Tfps1200DmdevRpadcEntity,
    (tfps1200DmdevRpadcEntity) => tfps1200DmdevRpadcEntity.tfps1200DmdevIrpadcs,
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
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
    { name: 'MATRICULA', referencedColumnName: 'chave' },
  ])
  tfps1200DmdevRpadc: Tfps1200DmdevRpadcEntity;
}
