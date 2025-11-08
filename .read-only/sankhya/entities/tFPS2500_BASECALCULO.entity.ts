import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2500InfocontratoEntity } from './tFPS2500_INFOCONTRATO.entity';
import { Tfps2500InfointermEntity } from './tFPS2500_INFOINTERM.entity';

@Index(
  'PK_TFPS2500_BASECALCULO',
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
@Entity('TFPS2500_BASECALCULO', { schema: 'SANKHYA' })
export class Tfps2500BasecalculoEntity {
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

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @Column('float', { name: 'VRBCCPMENSAL', nullable: true, precision: 53 })
  vrbccpmensal: number | null;

  @Column('float', { name: 'VRBCCP13', nullable: true, precision: 53 })
  vrbccp13: number | null;

  @Column('float', { name: 'VRBCFGTS', nullable: true, precision: 53 })
  vrbcfgts: number | null;

  @Column('float', { name: 'VRBCFGTS13', nullable: true, precision: 53 })
  vrbcfgts13: number | null;

  @Column('smallint', { name: 'GRAUEXP', nullable: true })
  grauexp: number | null;

  @Column('float', { name: 'VRBCFGTSGUIA', nullable: true, precision: 53 })
  vrbcfgtsguia: number | null;

  @Column('float', { name: 'VRBCFGTS13GUIA', nullable: true, precision: 53 })
  vrbcfgts13Guia: number | null;

  @Column('varchar', { name: 'PAGDIRETO', nullable: true, length: 1 })
  pagdireto: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('float', { name: 'VRBCCPREV', nullable: true, precision: 53 })
  vrbccprev: number | null;

  @Column('float', { name: 'VRBCFGTSDECANT', nullable: true, precision: 53 })
  vrbcfgtsdecant: number | null;

  @Column('float', { name: 'VRBCFGTSSEFIP', nullable: true, precision: 53 })
  vrbcfgtssefip: number | null;

  @Column('float', { name: 'VRBCFGTSPROCTRAB', nullable: true, precision: 53 })
  vrbcfgtsproctrab: number | null;

  @ManyToOne(
    () => Tfps2500InfocontratoEntity,
    (tfps2500InfocontratoEntity) =>
      tfps2500InfocontratoEntity.tfps2500Basecalculos,
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

  @OneToMany(
    () => Tfps2500InfointermEntity,
    (tfps2500InfointermEntity) => tfps2500InfointermEntity.tfps2500Basecalculo,
  )
  tfps2500Infointerms: Tfps2500InfointermEntity[];
}
