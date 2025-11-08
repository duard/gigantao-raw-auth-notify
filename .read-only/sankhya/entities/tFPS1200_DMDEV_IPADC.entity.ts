import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1200DmdevPadcEntity } from './tFPS1200_DMDEV_PADC.entity';
import { Tfps1200DmdevRpadcEntity } from './tFPS1200_DMDEV_RPADC.entity';

@Index(
  'PK_TFPS1200_DMDEV_IPADC',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1200',
    'idedmdev',
    'chave1200PaAdc',
    'perref',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_IPADC', { schema: 'SANKHYA' })
export class Tfps1200DmdevIpadcEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CODLOTACAO', nullable: true, length: 100 })
  codlotacao: string | null;

  @ManyToOne(
    () => Tfps1200DmdevPadcEntity,
    (tfps1200DmdevPadcEntity) => tfps1200DmdevPadcEntity.tfps1200DmdevIpadcs,
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
    { name: 'PERREF', referencedColumnName: 'chave' },
  ])
  tfps1200DmdevPadc: Tfps1200DmdevPadcEntity;

  @OneToMany(
    () => Tfps1200DmdevRpadcEntity,
    (tfps1200DmdevRpadcEntity) => tfps1200DmdevRpadcEntity.tfps1200DmdevIpadc,
  )
  tfps1200DmdevRpadcs: Tfps1200DmdevRpadcEntity[];
}
