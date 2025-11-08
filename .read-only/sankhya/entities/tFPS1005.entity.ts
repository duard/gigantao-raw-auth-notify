import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps1005InfoenteducEntity } from './tFPS1005_INFOENTEDUC.entity';

@Index('PK_TFPS1005', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS1005', { schema: 'SANKHYA' })
export class Tfps1005Entity {
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

  @Column('smallint', { name: 'TPINSCESTABELECIMENTO', nullable: true })
  tpinscestabelecimento: number | null;

  @Column('varchar', {
    name: 'NRINSCESTABELECIMENTO',
    nullable: true,
    length: 15,
  })
  nrinscestabelecimento: string | null;

  @Column('int', { name: 'CNAEPREP', nullable: true })
  cnaeprep: number | null;

  @Column('smallint', { name: 'ALIQRAT', nullable: true })
  aliqrat: number | null;

  @Column('smallint', { name: 'ALIQRAT2', nullable: true })
  aliqrat2: number | null;

  @Column('float', { name: 'FAP', nullable: true, precision: 53 })
  fap: number | null;

  @Column('float', { name: 'ALIQRATAJUST', nullable: true, precision: 53 })
  aliqratajust: number | null;

  @Column('smallint', { name: 'TPPROCRAT', nullable: true })
  tpprocrat: number | null;

  @Column('varchar', { name: 'NRPROCRAT', nullable: true, length: 20 })
  nrprocrat: string | null;

  @Column('int', { name: 'CODSUSPRAT', nullable: true })
  codsusprat: number | null;

  @Column('smallint', { name: 'TPPROCFAP', nullable: true })
  tpprocfap: number | null;

  @Column('varchar', { name: 'NRPROCFAP', nullable: true, length: 20 })
  nrprocfap: string | null;

  @Column('int', { name: 'CODSUSPFAP', nullable: true })
  codsuspfap: number | null;

  @Column('smallint', { name: 'TPCAEPF', nullable: true })
  tpcaepf: number | null;

  @Column('smallint', { name: 'INDSUBSTPATROBRA', nullable: true })
  indsubstpatrobra: number | null;

  @Column('smallint', { name: 'REGPT', nullable: true })
  regpt: number | null;

  @Column('smallint', { name: 'CONTAPR', nullable: true })
  contapr: number | null;

  @Column('varchar', { name: 'NUPROCJUDAPR', nullable: true, length: 20 })
  nuprocjudapr: string | null;

  @Column('char', { name: 'CONTENTED', nullable: true, length: 1 })
  contented: string | null;

  @Column('smallint', { name: 'CONTPCD', nullable: true })
  contpcd: number | null;

  @Column('varchar', { name: 'NUPROCJUDPCD', nullable: true, length: 20 })
  nuprocjudpcd: string | null;

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

  @Column('varchar', { name: 'CNPJRESP', nullable: true, length: 14 })
  cnpjresp: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps1005InfoenteducEntity,
    (tfps1005InfoenteducEntity) => tfps1005InfoenteducEntity.tfps1,
  )
  tfps1005Infoenteducs: Tfps1005InfoenteducEntity[];
}
