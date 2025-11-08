import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2299DmdevDrpaEntity } from './tFPS2299_DMDEV_DRPA.entity';
import { Tfps2299DmdevEntity } from './tFPS2299_DMDEV.entity';
import { Tfps2299DmdevIrpaEntity } from './tFPS2299_DMDEV_IRPA.entity';
import { Tfps2299DmdevRpaEntity } from './tFPS2299_DMDEV_RPA.entity';

@Index(
  'PK_TFPS2299_DMDEV_EL',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2299', 'idedmdev', 'chave'],
  { unique: true },
)
@Entity('TFPS2299_DMDEV_EL', { schema: 'SANKHYA' })
export class Tfps2299DmdevElEntity {
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

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CODLOTACAO', nullable: true, length: 100 })
  codlotacao: string | null;

  @Column('smallint', { name: 'GRAUEXP', nullable: true })
  grauexp: number | null;

  @Column('smallint', { name: 'INDSIMPLES', nullable: true })
  indsimples: number | null;

  @OneToMany(
    () => Tfps2299DmdevDrpaEntity,
    (tfps2299DmdevDrpaEntity) => tfps2299DmdevDrpaEntity.tfps2299DmdevEl,
  )
  tfps2299DmdevDrpas: Tfps2299DmdevDrpaEntity[];

  @ManyToOne(
    () => Tfps2299DmdevEntity,
    (tfps2299DmdevEntity) => tfps2299DmdevEntity.tfps2299DmdevEls,
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
    () => Tfps2299DmdevIrpaEntity,
    (tfps2299DmdevIrpaEntity) => tfps2299DmdevIrpaEntity.tfps2299DmdevEl,
  )
  tfps2299DmdevIrpas: Tfps2299DmdevIrpaEntity[];

  @OneToMany(
    () => Tfps2299DmdevRpaEntity,
    (tfps2299DmdevRpaEntity) => tfps2299DmdevRpaEntity.tfps2299DmdevEl,
  )
  tfps2299DmdevRpas: Tfps2299DmdevRpaEntity[];
}
