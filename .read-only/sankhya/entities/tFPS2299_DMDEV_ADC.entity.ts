import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2299DmdevEntity } from './tFPS2299_DMDEV.entity';
import { Tfps2299DmdevPadcEntity } from './tFPS2299_DMDEV_PADC.entity';

@Index(
  'PK_TFPS2299_DMDEV_ADC',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2299', 'idedmdev', 'chave'],
  { unique: true },
)
@Entity('TFPS2299_DMDEV_ADC', { schema: 'SANKHYA' })
export class Tfps2299DmdevAdcEntity {
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
    () => Tfps2299DmdevEntity,
    (tfps2299DmdevEntity) => tfps2299DmdevEntity.tfps2299DmdevAdcs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave2299' },
    { name: 'IDEDMDEV', referencedColumnName: 'chave' },
  ])
  tfps2299Dmdev: Tfps2299DmdevEntity;

  @OneToMany(
    () => Tfps2299DmdevPadcEntity,
    (tfps2299DmdevPadcEntity) => tfps2299DmdevPadcEntity.tfps2299DmdevAdc,
  )
  tfps2299DmdevPadcs: Tfps2299DmdevPadcEntity[];
}
