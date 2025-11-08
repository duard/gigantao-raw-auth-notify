import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2501BenefpenEntity } from './tFPS2501_BENEFPEN.entity';
import { Tfps2501InfovaloresEntity } from './tFPS2501_INFOVALORES.entity';

@Index(
  'PK_TFPS2501_DEDSUSP',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chaveinfovalores',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_DEDSUSP', { schema: 'SANKHYA' })
export class Tfps2501DedsuspEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFOVALORES', length: 100 })
  chaveinfovalores: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'INDTPDEDUCAO', length: 1 })
  indtpdeducao: string;

  @Column('float', { name: 'VLRDEDSUSP', nullable: true, precision: 53 })
  vlrdedsusp: number | null;

  @OneToMany(
    () => Tfps2501BenefpenEntity,
    (tfps2501BenefpenEntity) => tfps2501BenefpenEntity.tfps2501Dedsusp,
  )
  tfps2501Benefpens: Tfps2501BenefpenEntity[];

  @ManyToOne(
    () => Tfps2501InfovaloresEntity,
    (tfps2501InfovaloresEntity) => tfps2501InfovaloresEntity.tfps2501Dedsusps,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEINFOPROCRET', referencedColumnName: 'chaveinfoprocret' },
    { name: 'CHAVEINFOVALORES', referencedColumnName: 'chave' },
  ])
  tfps2501Infovalores: Tfps2501InfovaloresEntity;
}
