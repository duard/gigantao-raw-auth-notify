import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1200DmdevEntity } from './tFPS1200_DMDEV.entity';
import { Tfps1200DmdevRpaEntity } from './tFPS1200_DMDEV_RPA.entity';

@Index(
  'PK_TFPS1200_DMDEV_EL',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1200', 'idedmdev', 'chave'],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_EL', { schema: 'SANKHYA' })
export class Tfps1200DmdevElEntity {
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

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CODLOTACAO', nullable: true, length: 30 })
  codlotacao: string | null;

  @Column('smallint', { name: 'QTDDIASAV', nullable: true })
  qtddiasav: number | null;

  @ManyToOne(
    () => Tfps1200DmdevEntity,
    (tfps1200DmdevEntity) => tfps1200DmdevEntity.tfps1200DmdevEls,
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
    () => Tfps1200DmdevRpaEntity,
    (tfps1200DmdevRpaEntity) => tfps1200DmdevRpaEntity.tfps1200DmdevEl,
  )
  tfps1200DmdevRpas: Tfps1200DmdevRpaEntity[];
}
