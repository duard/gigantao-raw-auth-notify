import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2501IdetrabEntity } from './tFPS2501_IDETRAB.entity';

@Index('PK_TFPS2501', ['codemp', 'dtref', 'tpamb', 'chave', 'sequencia'], {
  unique: true,
})
@Index('TFPS2501_I01', ['codemp', 'chave'], {})
@Index('TFPS2501_I02', ['codemp', 'dtref', 'chave', 'nrorecibo'], {})
@Entity('TFPS2501', { schema: 'SANKHYA' })
export class Tfps2501Entity {
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

  @Column('varchar', { name: 'NRPROCTRAB', nullable: true, length: 20 })
  nrproctrab: string | null;

  @Column('varchar', { name: 'PERAPURPGTO', nullable: true, length: 7 })
  perapurpgto: string | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 999 })
  obs: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('smallint', { name: 'IDESEQPROC', nullable: true })
  ideseqproc: number | null;

  @OneToMany(
    () => Tfps2501IdetrabEntity,
    (tfps2501IdetrabEntity) => tfps2501IdetrabEntity.tfps2,
  )
  tfps2501Idetrabs: Tfps2501IdetrabEntity[];
}
