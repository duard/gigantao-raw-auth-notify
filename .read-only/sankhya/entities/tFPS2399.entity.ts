import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2399DmdevEntity } from './tFPS2399_DMDEV.entity';
import { Tfps2399ProcjudEntity } from './tFPS2399_PROCJUD.entity';
import { Tfps2399RemoutrempreEntity } from './tFPS2399_REMOUTREMPRE.entity';

@Index('PK_TFPS2399', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS2399', { schema: 'SANKHYA' })
export class Tfps2399Entity {
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

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('varchar', { name: 'MTVDESLIG', nullable: true, length: 2 })
  mtvdeslig: string | null;

  @Column('datetime', { name: 'DTFIMQUAR', nullable: true })
  dtfimquar: Date | null;

  @Column('smallint', { name: 'INDMV', nullable: true })
  indmv: number | null;

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

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('varchar', { name: 'NOVOCPF', nullable: true, length: 11 })
  novocpf: string | null;

  @Column('char', { name: 'PENSALIM', nullable: true, length: 1 })
  pensalim: string | null;

  @Column('float', { name: 'PERCALIM', nullable: true, precision: 53 })
  percalim: number | null;

  @Column('float', { name: 'VRALIM', nullable: true, precision: 53 })
  vralim: number | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('varchar', { name: 'NRPROCTRAB', nullable: true, length: 20 })
  nrproctrab: string | null;

  @Column('datetime', { name: 'DTFIMREMUN', nullable: true })
  dtfimremun: Date | null;

  @Column('smallint', { name: 'INDSITREMUNDESLIG', nullable: true })
  indsitremundeslig: number | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps2399DmdevEntity,
    (tfps2399DmdevEntity) => tfps2399DmdevEntity.tfps2,
  )
  tfps2399Dmdevs: Tfps2399DmdevEntity[];

  @OneToMany(
    () => Tfps2399ProcjudEntity,
    (tfps2399ProcjudEntity) => tfps2399ProcjudEntity.tfps2,
  )
  tfps2399Procjuds: Tfps2399ProcjudEntity[];

  @OneToMany(
    () => Tfps2399RemoutrempreEntity,
    (tfps2399RemoutrempreEntity) => tfps2399RemoutrempreEntity.tfps2,
  )
  tfps2399Remoutrempres: Tfps2399RemoutrempreEntity[];
}
