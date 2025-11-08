import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1200Entity } from './tFPS1200.entity';
import { Tfps1200DmdevAdcEntity } from './tFPS1200_DMDEV_ADC.entity';
import { Tfps1200DmdevElEntity } from './tFPS1200_DMDEV_EL.entity';
import { Tfps1200DmdevRraEntity } from './tFPS1200_DMDEV_RRA.entity';

@Index(
  'PK_TFPS1200_DMDEV',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1200', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1200_DMDEV', { schema: 'SANKHYA' })
export class Tfps1200DmdevEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'IDEDMDEV', nullable: true, length: 30 })
  idedmdev: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('varchar', { name: 'CODCBO', nullable: true, length: 6 })
  codcbo: string | null;

  @Column('smallint', { name: 'NATATIVIDADE', nullable: true })
  natatividade: number | null;

  @Column('smallint', { name: 'QTDDIASTRAB', nullable: true })
  qtddiastrab: number | null;

  @Column('float', { name: 'QMESRRA', nullable: true, precision: 53 })
  qmesrra: number | null;

  @Column('char', { name: 'INDRRA', nullable: true, length: 1 })
  indrra: string | null;

  @Column('varchar', { name: 'REMUNAPOSDESLIG', nullable: true, length: 1 })
  remunaposdeslig: string | null;

  @ManyToOne(
    () => Tfps1200Entity,
    (tfps1200Entity) => tfps1200Entity.tfps1200Dmdevs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1200', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1200Entity;

  @OneToMany(
    () => Tfps1200DmdevAdcEntity,
    (tfps1200DmdevAdcEntity) => tfps1200DmdevAdcEntity.tfps1200Dmdev,
  )
  tfps1200DmdevAdcs: Tfps1200DmdevAdcEntity[];

  @OneToMany(
    () => Tfps1200DmdevElEntity,
    (tfps1200DmdevElEntity) => tfps1200DmdevElEntity.tfps1200Dmdev,
  )
  tfps1200DmdevEls: Tfps1200DmdevElEntity[];

  @OneToMany(
    () => Tfps1200DmdevRraEntity,
    (tfps1200DmdevRraEntity) => tfps1200DmdevRraEntity.tfps1200Dmdev,
  )
  tfps1200DmdevRras: Tfps1200DmdevRraEntity[];
}
