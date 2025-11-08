import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2299Entity } from './tFPS2299.entity';
import { Tfps2299DmdevAdcEntity } from './tFPS2299_DMDEV_ADC.entity';
import { Tfps2299DmdevElEntity } from './tFPS2299_DMDEV_EL.entity';
import { Tfps2299DmdevRraEntity } from './tFPS2299_DMDEV_RRA.entity';

@Index(
  'PK_TFPS2299_DMDEV',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2299', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2299_DMDEV', { schema: 'SANKHYA' })
export class Tfps2299DmdevEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'IDEDMDEV', nullable: true, length: 30 })
  idedmdev: string | null;

  @Column('float', { name: 'QMESRRA', nullable: true, precision: 53 })
  qmesrra: number | null;

  @Column('char', { name: 'INDRRA', nullable: true, length: 1 })
  indrra: string | null;

  @ManyToOne(
    () => Tfps2299Entity,
    (tfps2299Entity) => tfps2299Entity.tfps2299Dmdevs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2299Entity;

  @OneToMany(
    () => Tfps2299DmdevAdcEntity,
    (tfps2299DmdevAdcEntity) => tfps2299DmdevAdcEntity.tfps2299Dmdev,
  )
  tfps2299DmdevAdcs: Tfps2299DmdevAdcEntity[];

  @OneToMany(
    () => Tfps2299DmdevElEntity,
    (tfps2299DmdevElEntity) => tfps2299DmdevElEntity.tfps2299Dmdev,
  )
  tfps2299DmdevEls: Tfps2299DmdevElEntity[];

  @OneToMany(
    () => Tfps2299DmdevRraEntity,
    (tfps2299DmdevRraEntity) => tfps2299DmdevRraEntity.tfps2299Dmdev,
  )
  tfps2299DmdevRras: Tfps2299DmdevRraEntity[];
}
