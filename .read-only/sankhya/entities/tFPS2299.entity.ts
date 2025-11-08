import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2299ConsigfgtsEntity } from './tFPS2299_CONSIGFGTS.entity';
import { Tfps2299DmdevEntity } from './tFPS2299_DMDEV.entity';
import { Tfps2299ProcjudEntity } from './tFPS2299_PROCJUD.entity';
import { Tfps2299RemoutrempreEntity } from './tFPS2299_REMOUTREMPRE.entity';

@Index('PK_TFPS2299', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index(
  'TFPS2299_I01',
  ['codemp', 'tpamb', 'status', 'chave', 'nrorecibo', 'dtref', 'sequencia'],
  {},
)
@Entity('TFPS2299', { schema: 'SANKHYA' })
export class Tfps2299Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

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

  @Column('varchar', { name: 'MTVDESLIG', nullable: true, length: 2 })
  mtvdeslig: string | null;

  @Column('datetime', { name: 'DTDESLIG', nullable: true })
  dtdeslig: Date | null;

  @Column('char', { name: 'INDPAGTO', nullable: true, length: 1 })
  indpagto: string | null;

  @Column('datetime', { name: 'DTPROJFIMAPI', nullable: true })
  dtprojfimapi: Date | null;

  @Column('char', { name: 'PENSALIM', nullable: true, length: 1 })
  pensalim: string | null;

  @Column('float', { name: 'PERCALIM', nullable: true, precision: 53 })
  percalim: number | null;

  @Column('float', { name: 'VRALIM', nullable: true, precision: 53 })
  vralim: number | null;

  @Column('varchar', { name: 'NRCERTOBITO', nullable: true, length: 32 })
  nrcertobito: string | null;

  @Column('varchar', { name: 'PRPROCTRAB', nullable: true, length: 20 })
  prproctrab: string | null;

  @Column('char', { name: 'INDCUMPRPARC', nullable: true, length: 1 })
  indcumprparc: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('varchar', { name: 'CNPJSUCESSORA', nullable: true, length: 14 })
  cnpjsucessora: string | null;

  @Column('varchar', { name: 'CPFSUBSTITUTO', nullable: true, length: 11 })
  cpfsubstituto: string | null;

  @Column('datetime', { name: 'DTNASCTOSUBSTITUTO', nullable: true })
  dtnasctosubstituto: Date | null;

  @Column('char', { name: 'IDCONSIG', length: 1, default: () => "'N'" })
  idconsig: string;

  @Column('varchar', { name: 'INSCONSIG', nullable: true, length: 5 })
  insconsig: string | null;

  @Column('varchar', { name: 'NRCONTR', nullable: true, length: 15 })
  nrcontr: string | null;

  @Column('datetime', { name: 'DTFIMQUAR', nullable: true })
  dtfimquar: Date | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { name: 'QTDDIASINTERM', nullable: true, length: 10 })
  qtddiasinterm: string | null;

  @Column('smallint', { name: 'INDMV', nullable: true })
  indmv: number | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('varchar', { name: 'NOVOCPF', nullable: true, length: 11 })
  novocpf: string | null;

  @Column('smallint', { name: 'TPINSCSUC', nullable: true })
  tpinscsuc: number | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('smallint', { name: 'DIAINFOINTERM', nullable: true })
  diainfointerm: number | null;

  @Column('varchar', { name: 'LSTDIAINTERM', nullable: true, length: 100 })
  lstdiainterm: string | null;

  @Column('smallint', { name: 'INDAPURIR', nullable: true })
  indapurir: number | null;

  @Column('datetime', { name: 'DTNOTIFICACAO', nullable: true })
  dtnotificacao: Date | null;

  @Column('datetime', { name: 'DTFIMREMUN', nullable: true })
  dtfimremun: Date | null;

  @Column('smallint', { name: 'INDSITREMUNDESLIG', nullable: true })
  indsitremundeslig: number | null;

  @Column('varchar', { name: 'NRPROCTRABDESLIG', nullable: true, length: 20 })
  nrproctrabdeslig: string | null;

  @Column('datetime', { name: 'DTSENTPROCTRAB', nullable: true })
  dtsentproctrab: Date | null;

  @Column('datetime', { name: 'DTDEMJUD', nullable: true })
  dtdemjud: Date | null;

  @Column('varchar', { name: 'PVD', nullable: true, length: 1 })
  pvd: string | null;

  @Column('varchar', { name: 'MOTDESLIGESOCIAL', nullable: true, length: 2 })
  motdesligesocial: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps2299ConsigfgtsEntity,
    (tfps2299ConsigfgtsEntity) => tfps2299ConsigfgtsEntity.tfps2,
  )
  tfps2299Consigfgts: Tfps2299ConsigfgtsEntity[];

  @OneToMany(
    () => Tfps2299DmdevEntity,
    (tfps2299DmdevEntity) => tfps2299DmdevEntity.tfps2,
  )
  tfps2299Dmdevs: Tfps2299DmdevEntity[];

  @OneToMany(
    () => Tfps2299ProcjudEntity,
    (tfps2299ProcjudEntity) => tfps2299ProcjudEntity.tfps2,
  )
  tfps2299Procjuds: Tfps2299ProcjudEntity[];

  @OneToMany(
    () => Tfps2299RemoutrempreEntity,
    (tfps2299RemoutrempreEntity) => tfps2299RemoutrempreEntity.tfps2,
  )
  tfps2299Remoutrempres: Tfps2299RemoutrempreEntity[];
}
