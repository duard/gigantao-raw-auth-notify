import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2501IdetrabEntity } from './tFPS2501_IDETRAB.entity';

@Index(
  'PK_TFPS2501_INFODEP',
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
@Entity('TFPS2501_INFODEP', { schema: 'SANKHYA' })
export class Tfps2501InfodepEntity {
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

  @Column('varchar', { name: 'NOMEDPD', nullable: true, length: 70 })
  nomedpd: string | null;

  @Column('varchar', { name: 'CPFDPD', length: 11 })
  cpfdpd: string;

  @Column('varchar', { name: 'TIPODPD', length: 2 })
  tipodpd: string;

  @Column('varchar', { name: 'DESCDPD', nullable: true, length: 30 })
  descdpd: string | null;

  @Column('varchar', { name: 'DEPENDIRF', nullable: true, length: 1 })
  dependirf: string | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('datetime', { name: 'DTLIMIRF', nullable: true })
  dtlimirf: Date | null;

  @Column('varchar', { name: 'IDADEESCOLAR', nullable: true, length: 1 })
  idadeescolar: string | null;

  @ManyToOne(
    () => Tfps2501IdetrabEntity,
    (tfps2501IdetrabEntity) => tfps2501IdetrabEntity.tfps2501Infodeps,
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
