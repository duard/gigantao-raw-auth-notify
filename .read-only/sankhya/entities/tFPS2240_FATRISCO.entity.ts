import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2240Entity } from './tFPS2240.entity';
import { Tfps2240FatriscoEpiEntity } from './tFPS2240_FATRISCO_EPI.entity';

@Index(
  'PK_TFPS2240_FATRISCO',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2240', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2240_FATRISCO', { schema: 'SANKHYA' })
export class Tfps2240FatriscoEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CODFATRIS', nullable: true, length: 9 })
  codfatris: string | null;

  @Column('smallint', { name: 'TPAVAL', nullable: true })
  tpaval: number | null;

  @Column('float', { name: 'INTCONC', nullable: true, precision: 53 })
  intconc: number | null;

  @Column('float', { name: 'LIMTOT', nullable: true, precision: 53 })
  limtot: number | null;

  @Column('smallint', { name: 'UNMED', nullable: true })
  unmed: number | null;

  @Column('varchar', { name: 'TECMEDICAO', nullable: true, length: 40 })
  tecmedicao: string | null;

  @Column('char', { name: 'INSALUBRIDADE', nullable: true, length: 1 })
  insalubridade: string | null;

  @Column('char', { name: 'PERICULOSIDADE', nullable: true, length: 1 })
  periculosidade: string | null;

  @Column('char', { name: 'APOSENTESP', nullable: true, length: 1 })
  aposentesp: string | null;

  @Column('smallint', { name: 'UTILIZEPC', nullable: true })
  utilizepc: number | null;

  @Column('smallint', { name: 'UTILIZEPI', nullable: true })
  utilizepi: number | null;

  @Column('char', { name: 'EFICEPC', nullable: true, length: 1 })
  eficepc: string | null;

  @Column('varchar', { name: 'DSCFATRISC', nullable: true, length: 999 })
  dscfatrisc: string | null;

  @ManyToOne(
    () => Tfps2240Entity,
    (tfps2240Entity) => tfps2240Entity.tfps2240Fatriscos,
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
    () => Tfps2240FatriscoEpiEntity,
    (tfps2240FatriscoEpiEntity) => tfps2240FatriscoEpiEntity.tfps2240Fatrisco,
  )
  tfps2240FatriscoEpis: Tfps2240FatriscoEpiEntity[];
}
