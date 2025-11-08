import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2399DmdevElEntity } from './tFPS2399_DMDEV_EL.entity';
import { Tfps2399EconsignadoEntity } from './tFPS2399_ECONSIGNADO.entity';

@Index(
  'PK_TFPS2399_DMDEV_IRPA',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2399',
    'idedmdev',
    'codlotacao',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2399_DMDEV_IRPA', { schema: 'SANKHYA' })
export class Tfps2399DmdevIrpaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE2399', length: 100 })
  chave2399: string;

  @Column('varchar', { primary: true, name: 'IDEDMDEV', length: 100 })
  idedmdev: string;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 100 })
  codlotacao: string;

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
    () => Tfps2399DmdevElEntity,
    (tfps2399DmdevElEntity) => tfps2399DmdevElEntity.tfps2399DmdevIrpas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2399', referencedColumnName: 'chave2399' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CODLOTACAO', referencedColumnName: 'chave' },
  ])
  tfps2399DmdevEl: Tfps2399DmdevElEntity;

  @OneToMany(
    () => Tfps2399EconsignadoEntity,
    (tfps2399EconsignadoEntity) => tfps2399EconsignadoEntity.tfps2399DmdevIrpa,
  )
  tfps2399Econsignados: Tfps2399EconsignadoEntity[];
}
