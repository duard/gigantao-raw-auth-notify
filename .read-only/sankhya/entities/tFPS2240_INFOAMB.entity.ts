import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2240Entity } from './tFPS2240.entity';
import { Tfps2240InfoambApEntity } from './tFPS2240_INFOAMB_AP.entity';

@Index(
  'PK_TFPS2240_INFOAMB',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2240', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2240_INFOAMB', { schema: 'SANKHYA' })
export class Tfps2240InfoambEntity {
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

  @Column('varchar', { name: 'CODAMB', nullable: true, length: 30 })
  codamb: string | null;

  @Column('varchar', { name: 'DSCATIVDES', nullable: true, length: 999 })
  dscativdes: string | null;

  @Column('varchar', { name: 'METERG', nullable: true, length: 999 })
  meterg: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 999 })
  observacao: string | null;

  @Column('smallint', { name: 'LOCALAMB', nullable: true })
  localamb: number | null;

  @Column('varchar', { name: 'NMAMB', nullable: true, length: 100 })
  nmamb: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @ManyToOne(
    () => Tfps2240Entity,
    (tfps2240Entity) => tfps2240Entity.tfps2240Infoambs,
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
    () => Tfps2240InfoambApEntity,
    (tfps2240InfoambApEntity) => tfps2240InfoambApEntity.tfps2240Infoamb,
  )
  tfps2240InfoambAps: Tfps2240InfoambApEntity[];
}
