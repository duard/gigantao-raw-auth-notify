import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2501IdetrabEntity } from './tFPS2501_IDETRAB.entity';

@Index(
  'PK_TFPS2501_INFOIRCOMPLEM',
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
@Entity('TFPS2501_INFOIRCOMPLEM', { schema: 'SANKHYA' })
export class Tfps2501InfoircomplemEntity {
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

  @Column('datetime', { name: 'DTLAUDO' })
  dtlaudo: Date;

  @ManyToOne(
    () => Tfps2501IdetrabEntity,
    (tfps2501IdetrabEntity) => tfps2501IdetrabEntity.tfps2501Infoircomplems,
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
}
