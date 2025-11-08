import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps1070InfosuspEntity } from './tFPS1070_INFOSUSP.entity';

@Index('PK_TFPS1070', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS1070', { schema: 'SANKHYA' })
export class Tfps1070Entity {
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

  @Column('smallint', { name: 'TPPROC', nullable: true })
  tpproc: number | null;

  @Column('varchar', { name: 'NRPROC', nullable: true, length: 21 })
  nrproc: string | null;

  @Column('smallint', { name: 'INDAUTORIA', nullable: true })
  indautoria: number | null;

  @Column('smallint', { name: 'INDMATPROC', nullable: true })
  indmatproc: number | null;

  @Column('varchar', { name: 'UFVARA', nullable: true, length: 2 })
  ufvara: string | null;

  @Column('int', { name: 'CODMUNIC', nullable: true })
  codmunic: number | null;

  @Column('varchar', { name: 'IDVARA', nullable: true, length: 4 })
  idvara: string | null;

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

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps1070InfosuspEntity,
    (tfps1070InfosuspEntity) => tfps1070InfosuspEntity.tfps1,
  )
  tfps1070Infosusps: Tfps1070InfosuspEntity[];
}
