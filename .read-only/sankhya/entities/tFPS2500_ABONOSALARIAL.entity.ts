import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2500InfocontratoEntity } from './tFPS2500_INFOCONTRATO.entity';

@Index(
  'PK_TFS2500_ABONOSALARIAL',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2500',
    'sequencia',
    'chaveinfocontrato',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2500_ABONOSALARIAL', { schema: 'SANKHYA' })
export class Tfps2500AbonosalarialEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'ANOBASE', nullable: true, length: 4 })
  anobase: string | null;

  @ManyToOne(
    () => Tfps2500InfocontratoEntity,
    (tfps2500InfocontratoEntity) =>
      tfps2500InfocontratoEntity.tfps2500Abonosalarials,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2500', referencedColumnName: 'chave2500' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEINFOCONTRATO', referencedColumnName: 'chave' },
  ])
  tfps2500Infocontrato: Tfps2500InfocontratoEntity;
}
