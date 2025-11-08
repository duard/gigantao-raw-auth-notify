import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2501IdetrabEntity } from './tFPS2501_IDETRAB.entity';
import { Tfps2501InfocrcontribEntity } from './tFPS2501_INFOCRCONTRIB.entity';

@Index(
  'PK_TFPS2501_CALCTRIB',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chaveidetrab',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_CALCTRIB', { schema: 'SANKHYA' })
export class Tfps2501CalctribEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2501', length: 100 })
  chave2501: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVEIDETRAB', length: 100 })
  chaveidetrab: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @Column('float', { name: 'VRBCCPMENSAL', nullable: true, precision: 53 })
  vrbccpmensal: number | null;

  @Column('float', { name: 'VRBCCP13', nullable: true, precision: 53 })
  vrbccp13: number | null;

  @Column('float', { name: 'VRRENDIRRF', nullable: true, precision: 53 })
  vrrendirrf: number | null;

  @Column('float', { name: 'VRRENDIRRF13', nullable: true, precision: 53 })
  vrrendirrf13: number | null;

  @ManyToOne(
    () => Tfps2501IdetrabEntity,
    (tfps2501IdetrabEntity) => tfps2501IdetrabEntity.tfps2501Calctribs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEIDETRAB', referencedColumnName: 'chave' },
  ])
  tfps2501Idetrab: Tfps2501IdetrabEntity;

  @OneToMany(
    () => Tfps2501InfocrcontribEntity,
    (tfps2501InfocrcontribEntity) =>
      tfps2501InfocrcontribEntity.tfps2501Calctrib,
  )
  tfps2501Infocrcontribs: Tfps2501InfocrcontribEntity[];
}
