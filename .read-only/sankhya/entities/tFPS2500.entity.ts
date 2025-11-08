import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2500DependenteEntity } from './tFPS2500_DEPENDENTE.entity';
import { Tfps2500InfocontratoEntity } from './tFPS2500_INFOCONTRATO.entity';

@Index('PK_TFPS2500', ['codemp', 'dtref', 'tpamb', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TFPS2500', { schema: 'SANKHYA' })
export class Tfps2500Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('varchar', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('smallint', { name: 'INDRETIF', nullable: true })
  indretif: number | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 14 })
  nrinscempregador: string | null;

  @Column('smallint', { name: 'TPINSCCONTRIBUINTE', nullable: true })
  tpinsccontribuinte: number | null;

  @Column('varchar', { name: 'NRINSCCONTRIBUINTE', nullable: true, length: 14 })
  nrinsccontribuinte: string | null;

  @Column('smallint', { name: 'ORIGEM', nullable: true })
  origem: number | null;

  @Column('varchar', { name: 'NRPROCTRAB', nullable: true, length: 20 })
  nrproctrab: string | null;

  @Column('varchar', { name: 'OBSPROCTRAB', nullable: true, length: 999 })
  obsproctrab: string | null;

  @Column('datetime', { name: 'DTSENT', nullable: true })
  dtsent: Date | null;

  @Column('varchar', { name: 'UFVARA', nullable: true, length: 2 })
  ufvara: string | null;

  @Column('int', { name: 'CODMUNIC', nullable: true })
  codmunic: number | null;

  @Column('smallint', { name: 'IDVARA', nullable: true })
  idvara: number | null;

  @Column('datetime', { name: 'DTCCP', nullable: true })
  dtccp: Date | null;

  @Column('smallint', { name: 'TPCCP', nullable: true })
  tpccp: number | null;

  @Column('varchar', { name: 'CNPJCCP', nullable: true, length: 14 })
  cnpjccp: string | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NMTRAB', nullable: true, length: 70 })
  nmtrab: string | null;

  @Column('datetime', { name: 'DTNASCTO', nullable: true })
  dtnascto: Date | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('varchar', { name: 'MATRESPDIR', nullable: true, length: 30 })
  matrespdir: string | null;

  @Column('datetime', { name: 'DTADMRESPDIR', nullable: true })
  dtadmrespdir: Date | null;

  @Column('varchar', { name: 'CODCATEGTRAB', nullable: true, length: 5 })
  codcategtrab: string | null;

  @Column('smallint', { name: 'IDESEQTRAB', nullable: true })
  ideseqtrab: number | null;

  @OneToMany(
    () => Tfps2500DependenteEntity,
    (tfps2500DependenteEntity) => tfps2500DependenteEntity.tfps2,
  )
  tfps2500Dependentes: Tfps2500DependenteEntity[];

  @OneToMany(
    () => Tfps2500InfocontratoEntity,
    (tfps2500InfocontratoEntity) => tfps2500InfocontratoEntity.tfps2,
  )
  tfps2500Infocontratoes: Tfps2500InfocontratoEntity[];
}
