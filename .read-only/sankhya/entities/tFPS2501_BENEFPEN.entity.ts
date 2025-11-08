import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2501DedsuspEntity } from './tFPS2501_DEDSUSP.entity';

@Index(
  'PK_TFPS2501_BENEFPEN',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chavededsusp',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_BENEFPEN', { schema: 'SANKHYA' })
export class Tfps2501BenefpenEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEDEDSUSP', length: 100 })
  chavededsusp: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('float', { name: 'VLRDEPENSUSP', precision: 53 })
  vlrdepensusp: number;

  @ManyToOne(
    () => Tfps2501DedsuspEntity,
    (tfps2501DedsuspEntity) => tfps2501DedsuspEntity.tfps2501Benefpens,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEINFOVALORES', referencedColumnName: 'chaveinfovalores' },
    { name: 'CHAVEDEDSUSP', referencedColumnName: 'chave' },
  ])
  tfps2501Dedsusp: Tfps2501DedsuspEntity;
}
