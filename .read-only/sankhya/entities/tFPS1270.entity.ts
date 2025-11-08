import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps1270RemunavnpEntity } from './tFPS1270_REMUNAVNP.entity';

@Index('PK_TFPS1270', ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave'], {
  unique: true,
})
@Entity('TFPS1270', { schema: 'SANKHYA' })
export class Tfps1270Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'INDRETIF', nullable: true })
  indretif: number | null;

  @Column('smallint', { name: 'INDAPURACAO', nullable: true })
  indapuracao: number | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 14 })
  nrinscempregador: string | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 40 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 40 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps1270RemunavnpEntity,
    (tfps1270RemunavnpEntity) => tfps1270RemunavnpEntity.tfps1,
  )
  tfps1270Remunavnps: Tfps1270RemunavnpEntity[];
}
