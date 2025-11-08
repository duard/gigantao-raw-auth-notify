import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2299DmdevElEntity } from './tFPS2299_DMDEV_EL.entity';
import { Tfps2299EconsignadoEntity } from './tFPS2299_ECONSIGNADO.entity';

@Index(
  'PK_TFPS2299_DMDEV_IRPA',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2299',
    'idedmdev',
    'codlotacao',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2299_DMDEV_IRPA', { schema: 'SANKHYA' })
export class Tfps2299DmdevIrpaEntity {
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

  @Column('smallint', { name: 'INDAPURIR', nullable: true })
  indapurir: number | null;

  @ManyToOne(
    () => Tfps2299DmdevElEntity,
    (tfps2299DmdevElEntity) => tfps2299DmdevElEntity.tfps2299DmdevIrpas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave2299' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CODLOTACAO', referencedColumnName: 'chave' },
  ])
  tfps2299DmdevEl: Tfps2299DmdevElEntity;

  @OneToMany(
    () => Tfps2299EconsignadoEntity,
    (tfps2299EconsignadoEntity) => tfps2299EconsignadoEntity.tfps2299DmdevIrpa,
  )
  tfps2299Econsignados: Tfps2299EconsignadoEntity[];
}
