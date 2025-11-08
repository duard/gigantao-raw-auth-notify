import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps1250TpaquisEntity } from './tFPS1250_TPAQUIS.entity';

@Index('PK_TFPS1250', ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave'], {
  unique: true,
})
@Entity('TFPS1250', { schema: 'SANKHYA' })
export class Tfps1250Entity {
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

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPINSCADQ', nullable: true })
  tpinscadq: number | null;

  @Column('varchar', { name: 'NRINSCADQ', nullable: true, length: 15 })
  nrinscadq: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @OneToMany(
    () => Tfps1250TpaquisEntity,
    (tfps1250TpaquisEntity) => tfps1250TpaquisEntity.tfps1,
  )
  tfps1250Tpaquis: Tfps1250TpaquisEntity[];
}
