import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2500BasecalculoEntity } from './tFPS2500_BASECALCULO.entity';

@Index(
  'PK_TFPS2500_INFOINTERM',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2500',
    'sequencia',
    'chaveinfocontrato',
    'chavebasecalculo',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2500_INFOINTERM', { schema: 'SANKHYA' })
export class Tfps2500InfointermEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE2500', length: 100 })
  chave2500: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVEINFOCONTRATO', length: 100 })
  chaveinfocontrato: string;

  @Column('varchar', { primary: true, name: 'CHAVEBASECALCULO', length: 100 })
  chavebasecalculo: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'NUINTERM', nullable: true })
  nuinterm: number | null;

  @Column('smallint', { name: 'DIA', nullable: true })
  dia: number | null;

  @Column('varchar', { name: 'HRSTRAB', nullable: true, length: 5 })
  hrstrab: string | null;

  @ManyToOne(
    () => Tfps2500BasecalculoEntity,
    (tfps2500BasecalculoEntity) =>
      tfps2500BasecalculoEntity.tfps2500Infointerms,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2500', referencedColumnName: 'chave2500' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEINFOCONTRATO', referencedColumnName: 'chaveinfocontrato' },
    { name: 'CHAVEBASECALCULO', referencedColumnName: 'chave' },
  ])
  tfps2500Basecalculo: Tfps2500BasecalculoEntity;
}
