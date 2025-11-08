import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2399DmdevDdrpaEntity } from './tFPS2399_DMDEV_DDRPA.entity';
import { Tfps2399DmdevElEntity } from './tFPS2399_DMDEV_EL.entity';

@Index(
  'PK_TFPS2399_DMDEV_DRPA',
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
@Entity('TFPS2399_DMDEV_DRPA', { schema: 'SANKHYA' })
export class Tfps2399DmdevDrpaEntity {
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

  @Column('varchar', { name: 'CNPJOPER', nullable: true, length: 100 })
  cnpjoper: string | null;

  @Column('varchar', { name: 'REGANS', nullable: true, length: 10 })
  regans: string | null;

  @Column('float', { name: 'VRPGTIT', nullable: true, precision: 53 })
  vrpgtit: number | null;

  @OneToMany(
    () => Tfps2399DmdevDdrpaEntity,
    (tfps2399DmdevDdrpaEntity) => tfps2399DmdevDdrpaEntity.tfps2399DmdevDrpa,
  )
  tfps2399DmdevDdrpas: Tfps2399DmdevDdrpaEntity[];

  @ManyToOne(
    () => Tfps2399DmdevElEntity,
    (tfps2399DmdevElEntity) => tfps2399DmdevElEntity.tfps2399DmdevDrpas,
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
}
