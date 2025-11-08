import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2299DmdevIpadcEntity } from './tFPS2299_DMDEV_IPADC.entity';
import { Tfps2299DmdevAdcEntity } from './tFPS2299_DMDEV_ADC.entity';

@Index(
  'PK_TFPS2299_DMDEV_PADC',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2299',
    'idedmdev',
    'chave2299PaAdc',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2299_DMDEV_PADC', { schema: 'SANKHYA' })
export class Tfps2299DmdevPadcEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @OneToMany(
    () => Tfps2299DmdevIpadcEntity,
    (tfps2299DmdevIpadcEntity) => tfps2299DmdevIpadcEntity.tfps2299DmdevPadc,
  )
  tfps2299DmdevIpadcs: Tfps2299DmdevIpadcEntity[];

  @ManyToOne(
    () => Tfps2299DmdevAdcEntity,
    (tfps2299DmdevAdcEntity) => tfps2299DmdevAdcEntity.tfps2299DmdevPadcs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave2299' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CHAVE2299_PA_ADC', referencedColumnName: 'chave' },
  ])
  tfps2299DmdevAdc: Tfps2299DmdevAdcEntity;
}
