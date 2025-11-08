import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2500InfocontratoEntity } from './tFPS2500_INFOCONTRATO.entity';

@Index(
  'PK_TFPS2500_MUDCATEGATIV',
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
@Entity('TFPS2500_MUDCATEGATIV', { schema: 'SANKHYA' })
export class Tfps2500MudcategativEntity {
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

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('smallint', { name: 'NATATIVIDADE', nullable: true })
  natatividade: number | null;

  @Column('datetime', { name: 'DTMUDCATEGATIV', nullable: true })
  dtmudcategativ: Date | null;

  @ManyToOne(
    () => Tfps2500InfocontratoEntity,
    (tfps2500InfocontratoEntity) =>
      tfps2500InfocontratoEntity.tfps2500Mudcategativs,
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
