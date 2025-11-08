import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1200DmdevIpadcEntity } from './tFPS1200_DMDEV_IPADC.entity';
import { Tfps1200DmdevAdcEntity } from './tFPS1200_DMDEV_ADC.entity';

@Index(
  'PK_TFPS1200_DMDEV_PADC',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1200',
    'idedmdev',
    'chave1200PaAdc',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_PADC', { schema: 'SANKHYA' })
export class Tfps1200DmdevPadcEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @OneToMany(
    () => Tfps1200DmdevIpadcEntity,
    (tfps1200DmdevIpadcEntity) => tfps1200DmdevIpadcEntity.tfps1200DmdevPadc,
  )
  tfps1200DmdevIpadcs: Tfps1200DmdevIpadcEntity[];

  @ManyToOne(
    () => Tfps1200DmdevAdcEntity,
    (tfps1200DmdevAdcEntity) => tfps1200DmdevAdcEntity.tfps1200DmdevPadcs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1200', referencedColumnName: 'chave1200' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CHAVE1200_PA_ADC', referencedColumnName: 'chave' },
  ])
  tfps1200DmdevAdc: Tfps1200DmdevAdcEntity;
}
