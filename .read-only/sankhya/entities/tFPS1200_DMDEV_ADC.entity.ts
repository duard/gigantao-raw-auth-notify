import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1200DmdevEntity } from './tFPS1200_DMDEV.entity';
import { Tfps1200DmdevPadcEntity } from './tFPS1200_DMDEV_PADC.entity';

@Index(
  'PK_TFPS1200_DMDEV_ADC',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1200', 'idedmdev', 'chave'],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_ADC', { schema: 'SANKHYA' })
export class Tfps1200DmdevAdcEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('datetime', { name: 'DTACCONV', nullable: true })
  dtacconv: Date | null;

  @Column('char', { name: 'TPACCONV', nullable: true, length: 1 })
  tpacconv: string | null;

  @Column('varchar', { name: 'COMPACCONV', nullable: true, length: 7 })
  compacconv: string | null;

  @Column('datetime', { name: 'DTEFACCONV', nullable: true })
  dtefacconv: Date | null;

  @Column('varchar', { name: 'DSC', nullable: true, length: 255 })
  dsc: string | null;

  @Column('char', { name: 'REMUNSUC', nullable: true, length: 1 })
  remunsuc: string | null;

  @ManyToOne(
    () => Tfps1200DmdevEntity,
    (tfps1200DmdevEntity) => tfps1200DmdevEntity.tfps1200DmdevAdcs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1200', referencedColumnName: 'chave1200' },
    { name: 'IDEDMDEV', referencedColumnName: 'chave' },
  ])
  tfps1200Dmdev: Tfps1200DmdevEntity;

  @OneToMany(
    () => Tfps1200DmdevPadcEntity,
    (tfps1200DmdevPadcEntity) => tfps1200DmdevPadcEntity.tfps1200DmdevAdc,
  )
  tfps1200DmdevPadcs: Tfps1200DmdevPadcEntity[];
}
