import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPS2250', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index(
  'TFPS2250_I01',
  ['codemp', 'tpamb', 'status', 'chave', 'nrorecibo', 'dtref', 'sequencia'],
  {},
)
@Entity('TFPS2250', { schema: 'SANKHYA' })
export class Tfps2250Entity {
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

  @Column('datetime', { name: 'DTAVPRV' })
  dtavprv: Date;

  @Column('datetime', { name: 'DTPREVDESLIG' })
  dtprevdeslig: Date;

  @Column('smallint', { name: 'TPAVPREVIO' })
  tpavprevio: number;

  @Column('varchar', { name: 'OBSERVACAODET', nullable: true, length: 255 })
  observacaodet: string | null;

  @Column('datetime', { name: 'DTCANCAVPRV', nullable: true })
  dtcancavprv: Date | null;

  @Column('varchar', { name: 'OBSERVACAOCANC', nullable: true, length: 255 })
  observacaocanc: string | null;

  @Column('smallint', { name: 'MTVCANCAVPREVIO', nullable: true })
  mtvcancavprevio: number | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;
}
