import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2230AtestadoEntity } from './tFPS2230_ATESTADO.entity';

@Index('PK_TFPS2230', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index(
  'TFPS2230_I01',
  ['codemp', 'tpamb', 'status', 'chave', 'nrorecibo', 'dtref', 'sequencia'],
  {},
)
@Index('TFPS2230_I02', ['codemp', 'cpftrab'], {})
@Entity('TFPS2230', { schema: 'SANKHYA' })
export class Tfps2230Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 15 })
  nrinscempregador: string | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NISTRAB', nullable: true, length: 11 })
  nistrab: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'CODCATEG' })
  codcateg: number;

  @Column('datetime', { name: 'DTINIAFAST', nullable: true })
  dtiniafast: Date | null;

  @Column('varchar', { name: 'CODMOTAFAST', nullable: true, length: 2 })
  codmotafast: string | null;

  @Column('char', { name: 'INFOMESMOMTV', nullable: true, length: 1 })
  infomesmomtv: string | null;

  @Column('smallint', { name: 'TPACIDTRANSITO', nullable: true })
  tpacidtransito: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('varchar', { name: 'CNPJCESS', nullable: true, length: 14 })
  cnpjcess: string | null;

  @Column('smallint', { name: 'INFONUS', nullable: true })
  infonus: number | null;

  @Column('varchar', { name: 'CNPJSIND', nullable: true, length: 14 })
  cnpjsind: string | null;

  @Column('smallint', { name: 'INFONUSREMUN', nullable: true })
  infonusremun: number | null;

  @Column('smallint', { name: 'ORIGRETIF', nullable: true })
  origretif: number | null;

  @Column('char', { name: 'TPPROC', nullable: true, length: 1 })
  tpproc: string | null;

  @Column('varchar', { name: 'NRPROC', nullable: true, length: 20 })
  nrproc: string | null;

  @Column('smallint', { name: 'TEM2300', nullable: true })
  tem2300: number | null;

  @Column('datetime', { name: 'DTTERMAFAST', nullable: true })
  dttermafast: Date | null;

  @Column('varchar', { name: 'CHAVE2200', nullable: true, length: 100 })
  chave2200: string | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('datetime', { name: 'DTINICIOFER', nullable: true })
  dtiniciofer: Date | null;

  @Column('datetime', { name: 'DTFIMFER', nullable: true })
  dtfimfer: Date | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps2230AtestadoEntity,
    (tfps2230AtestadoEntity) => tfps2230AtestadoEntity.tfps2,
  )
  tfps2230Atestados: Tfps2230AtestadoEntity[];
}
