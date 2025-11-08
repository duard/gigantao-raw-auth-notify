import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2501DedsuspEntity } from './tFPS2501_DEDSUSP.entity';
import { Tfps2501InfoprocretEntity } from './tFPS2501_INFOPROCRET.entity';

@Index(
  'PK_TFPS2501_INFOVALORES',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chaveinfoprocret',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_INFOVALORES', { schema: 'SANKHYA' })
export class Tfps2501InfovaloresEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFOPROCRET', length: 100 })
  chaveinfoprocret: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'INDAPURACAO', length: 1 })
  indapuracao: string;

  @Column('float', { name: 'VLRNRETIDO', nullable: true, precision: 53 })
  vlrnretido: number | null;

  @Column('float', { name: 'VLRDEPJUD', nullable: true, precision: 53 })
  vlrdepjud: number | null;

  @Column('float', { name: 'VLRCMPANOCAL', nullable: true, precision: 53 })
  vlrcmpanocal: number | null;

  @Column('float', { name: 'VLRCMPANOANT', nullable: true, precision: 53 })
  vlrcmpanoant: number | null;

  @Column('float', { name: 'VLRRENDSUSP', nullable: true, precision: 53 })
  vlrrendsusp: number | null;

  @OneToMany(
    () => Tfps2501DedsuspEntity,
    (tfps2501DedsuspEntity) => tfps2501DedsuspEntity.tfps2501Infovalores,
  )
  tfps2501Dedsusps: Tfps2501DedsuspEntity[];

  @ManyToOne(
    () => Tfps2501InfoprocretEntity,
    (tfps2501InfoprocretEntity) =>
      tfps2501InfoprocretEntity.tfps2501Infovalores,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEINFOCRIRRF', referencedColumnName: 'chaveinfocrirrf' },
    { name: 'CHAVEINFOPROCRET', referencedColumnName: 'chave' },
  ])
  tfps2501Infoprocret: Tfps2501InfoprocretEntity;
}
