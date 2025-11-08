import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1200DmdevDrpaEntity } from './tFPS1200_DMDEV_DRPA.entity';
import { Tfps1200DmdevIrpaEntity } from './tFPS1200_DMDEV_IRPA.entity';
import { Tfps1200DmdevElEntity } from './tFPS1200_DMDEV_EL.entity';
import { Tfps1200DmdevTrpaEntity } from './tFPS1200_DMDEV_TRPA.entity';

@Index(
  'PK_TFPS1200_DMDEV_RPA',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1200',
    'idedmdev',
    'codlotacao',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_RPA', { schema: 'SANKHYA' })
export class Tfps1200DmdevRpaEntity {
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
    () => Tfps1200DmdevDrpaEntity,
    (tfps1200DmdevDrpaEntity) => tfps1200DmdevDrpaEntity.tfps1200DmdevRpa,
  )
  tfps1200DmdevDrpas: Tfps1200DmdevDrpaEntity[];

  @OneToMany(
    () => Tfps1200DmdevIrpaEntity,
    (tfps1200DmdevIrpaEntity) => tfps1200DmdevIrpaEntity.tfps1200DmdevRpa,
  )
  tfps1200DmdevIrpas: Tfps1200DmdevIrpaEntity[];

  @ManyToOne(
    () => Tfps1200DmdevElEntity,
    (tfps1200DmdevElEntity) => tfps1200DmdevElEntity.tfps1200DmdevRpas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1200', referencedColumnName: 'chave1200' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CODLOTACAO', referencedColumnName: 'chave' },
  ])
  tfps1200DmdevEl: Tfps1200DmdevElEntity;

  @OneToMany(
    () => Tfps1200DmdevTrpaEntity,
    (tfps1200DmdevTrpaEntity) => tfps1200DmdevTrpaEntity.tfps1200DmdevRpa,
  )
  tfps1200DmdevTrpas: Tfps1200DmdevTrpaEntity[];
}
