import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2501CalctribEntity } from './tFPS2501_CALCTRIB.entity';

@Index(
  'PK_TFPS2501_INFOCRCONTRIB',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chaveidetrab',
    'chavecalctrib',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_INFOCRCONTRIB', { schema: 'SANKHYA' })
export class Tfps2501InfocrcontribEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVECALCTRIB', length: 100 })
  chavecalctrib: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'TPCR', nullable: true })
  tpcr: number | null;

  @Column('float', { name: 'VRCR', nullable: true, precision: 53 })
  vrcr: number | null;

  @ManyToOne(
    () => Tfps2501CalctribEntity,
    (tfps2501CalctribEntity) => tfps2501CalctribEntity.tfps2501Infocrcontribs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEIDETRAB', referencedColumnName: 'chaveidetrab' },
    { name: 'CHAVECALCTRIB', referencedColumnName: 'chave' },
  ])
  tfps2501Calctrib: Tfps2501CalctribEntity;
}
