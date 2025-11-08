import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2299DmdevDdrpaEntity } from './tFPS2299_DMDEV_DDRPA.entity';
import { Tfps2299DmdevElEntity } from './tFPS2299_DMDEV_EL.entity';

@Index(
  'PK_TFPS2299_DMDEV_DRPA',
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
@Entity('TFPS2299_DMDEV_DRPA', { schema: 'SANKHYA' })
export class Tfps2299DmdevDrpaEntity {
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

  @Column('varchar', { name: 'CNPJOPER', nullable: true, length: 14 })
  cnpjoper: string | null;

  @Column('varchar', { name: 'REGANS', nullable: true, length: 10 })
  regans: string | null;

  @Column('float', { name: 'VRPGTIT', nullable: true, precision: 53 })
  vrpgtit: number | null;

  @OneToMany(
    () => Tfps2299DmdevDdrpaEntity,
    (tfps2299DmdevDdrpaEntity) => tfps2299DmdevDdrpaEntity.tfps2299DmdevDrpa,
  )
  tfps2299DmdevDdrpas: Tfps2299DmdevDdrpaEntity[];

  @ManyToOne(
    () => Tfps2299DmdevElEntity,
    (tfps2299DmdevElEntity) => tfps2299DmdevElEntity.tfps2299DmdevDrpas,
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
}
