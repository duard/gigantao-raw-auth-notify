import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2240Entity } from './tFPS2240.entity';
import { Tfps2240AgnocEpiEntity } from './tFPS2240_AGNOC_EPI.entity';

@Index(
  'PK_TFPS2240_AGNOC',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2240', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2240_AGNOC', { schema: 'SANKHYA' })
export class Tfps2240AgnocEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2240', length: 100 })
  chave2240: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 9 })
  chave: string;

  @Column('varchar', { name: 'CODAGNOC', nullable: true, length: 9 })
  codagnoc: string | null;

  @Column('varchar', { name: 'DSCAGNOC', nullable: true, length: 1000 })
  dscagnoc: string | null;

  @Column('smallint', { name: 'TPAVAL', nullable: true })
  tpaval: number | null;

  @Column('float', { name: 'INTCONC', nullable: true, precision: 53 })
  intconc: number | null;

  @Column('int', { name: 'LIMTOL', nullable: true })
  limtol: number | null;

  @Column('smallint', { name: 'UNMED', nullable: true })
  unmed: number | null;

  @Column('varchar', { name: 'TECMEDICAO', nullable: true, length: 40 })
  tecmedicao: string | null;

  @Column('smallint', { name: 'UTILIZEPC', nullable: true })
  utilizepc: number | null;

  @Column('smallint', { name: 'UTILIZEPI', nullable: true })
  utilizepi: number | null;

  @Column('char', { name: 'MEDPROTECAO', nullable: true, length: 1 })
  medprotecao: string | null;

  @Column('char', { name: 'CONDFUNCTO', nullable: true, length: 1 })
  condfuncto: string | null;

  @Column('char', { name: 'USOININT', nullable: true, length: 1 })
  usoinint: string | null;

  @Column('char', { name: 'PRZVALID', nullable: true, length: 1 })
  przvalid: string | null;

  @Column('char', { name: 'PERIODICTROCA', nullable: true, length: 1 })
  periodictroca: string | null;

  @Column('char', { name: 'HIGIENIZACAO', nullable: true, length: 1 })
  higienizacao: string | null;

  @Column('char', { name: 'EFICEPC', nullable: true, length: 1 })
  eficepc: string | null;

  @Column('varchar', { name: 'NRPROCJUD', nullable: true, length: 21 })
  nrprocjud: string | null;

  @ManyToOne(
    () => Tfps2240Entity,
    (tfps2240Entity) => tfps2240Entity.tfps2240Agnocs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2240', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2240Entity;

  @OneToMany(
    () => Tfps2240AgnocEpiEntity,
    (tfps2240AgnocEpiEntity) => tfps2240AgnocEpiEntity.tfps2240Agnoc,
  )
  tfps2240AgnocEpis: Tfps2240AgnocEpiEntity[];
}
