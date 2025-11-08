import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps1020ProcjudEntity } from './tFPS1020_PROCJUD.entity';

@Index('PK_TFPS1020', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS1020', { schema: 'SANKHYA' })
export class Tfps1020Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 20 })
  nrinscempregador: string | null;

  @Column('varchar', { name: 'CODLOTACAO', nullable: true, length: 100 })
  codlotacao: string | null;

  @Column('varchar', { name: 'TPLOTACAO', nullable: true, length: 2 })
  tplotacao: string | null;

  @Column('smallint', { name: 'TPLOTACAO_2', nullable: true })
  tplotacao_2: number | null;

  @Column('smallint', { name: 'TPINSCLOTACAO', nullable: true })
  tpinsclotacao: number | null;

  @Column('varchar', { name: 'NRINSCLOTACAO', nullable: true, length: 15 })
  nrinsclotacao: string | null;

  @Column('smallint', { name: 'FPAS', nullable: true })
  fpas: number | null;

  @Column('varchar', { name: 'CODTERCS', nullable: true, length: 4 })
  codtercs: string | null;

  @Column('varchar', { name: 'CODTERCSSUSP', nullable: true, length: 4 })
  codtercssusp: string | null;

  @Column('smallint', { name: 'TPINSCCONTRAT', nullable: true })
  tpinsccontrat: number | null;

  @Column('varchar', { name: 'NRINSCCONTRAT', nullable: true, length: 14 })
  nrinsccontrat: string | null;

  @Column('smallint', { name: 'TPINSCPROP', nullable: true })
  tpinscprop: number | null;

  @Column('varchar', { name: 'NRINSCPROP', nullable: true, length: 14 })
  nrinscprop: string | null;

  @Column('smallint', { name: 'CODREGFIS', nullable: true })
  codregfis: number | null;

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

  @Column('char', { name: 'TIPOREGISTRO', length: 1 })
  tiporegistro: string;

  @Column('int', { name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'DESCRLOTACAO', nullable: true, length: 100 })
  descrlotacao: string | null;

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

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps1020ProcjudEntity,
    (tfps1020ProcjudEntity) => tfps1020ProcjudEntity.tfps1,
  )
  tfps1020Procjuds: Tfps1020ProcjudEntity[];
}
