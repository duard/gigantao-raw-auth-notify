import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps1050IntervaloEntity } from './tFPS1050_INTERVALO.entity';

@Index('PK_TFPS1050', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index(
  'TFPS1050_I01',
  ['codemp', 'tpamb', 'status', 'chave', 'nrorecibo', 'dtref', 'sequencia'],
  {},
)
@Entity('TFPS1050', { schema: 'SANKHYA' })
export class Tfps1050Entity {
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

  @Column('varchar', { name: 'CODHORCONTRAT', nullable: true, length: 30 })
  codhorcontrat: string | null;

  @Column('varchar', { name: 'HRENTR', nullable: true, length: 4 })
  hrentr: string | null;

  @Column('varchar', { name: 'HRSAIDA', nullable: true, length: 4 })
  hrsaida: string | null;

  @Column('smallint', { name: 'DURJORNADA', nullable: true })
  durjornada: number | null;

  @Column('char', { name: 'PERHORFLEXIVEL', nullable: true, length: 1 })
  perhorflexivel: string | null;

  @Column('smallint', { name: 'TPINTERV', nullable: true })
  tpinterv: number | null;

  @Column('smallint', { name: 'DURINTERV', nullable: true })
  durinterv: number | null;

  @Column('varchar', { name: 'INIINTERV', nullable: true, length: 4 })
  iniinterv: string | null;

  @Column('varchar', { name: 'TERMINTERV', nullable: true, length: 4 })
  terminterv: string | null;

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

  @Column('int', { name: 'CODCARGAHOR', nullable: true })
  codcargahor: number | null;

  @Column('varchar', { name: 'DESCRCARGAHOR', nullable: true, length: 100 })
  descrcargahor: string | null;

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

  @OneToMany(
    () => Tfps1050IntervaloEntity,
    (tfps1050IntervaloEntity) => tfps1050IntervaloEntity.tfps1,
  )
  tfps1050Intervalos: Tfps1050IntervaloEntity[];
}
