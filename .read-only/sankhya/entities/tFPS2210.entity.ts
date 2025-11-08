import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2210AcEntity } from './tFPS2210_AC.entity';
import { Tfps2210PaEntity } from './tFPS2210_PA.entity';

@Index('PK_TFPS2210', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS2210', { schema: 'SANKHYA' })
export class Tfps2210Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('smallint', { name: 'CODEMPFUNC', nullable: true })
  codempfunc: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NISTRAB', nullable: true, length: 11 })
  nistrab: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('datetime', { name: 'DTACID', nullable: true })
  dtacid: Date | null;

  @Column('varchar', { name: 'TPACID', nullable: true, length: 6 })
  tpacid: string | null;

  @Column('varchar', { name: 'HRACID', nullable: true, length: 4 })
  hracid: string | null;

  @Column('varchar', { name: 'HRSTRABANTESACID', nullable: true, length: 4 })
  hrstrabantesacid: string | null;

  @Column('smallint', { name: 'TPCAT', nullable: true })
  tpcat: number | null;

  @Column('char', { name: 'INDCATOBITO', nullable: true, length: 1 })
  indcatobito: string | null;

  @Column('datetime', { name: 'DTOBITO', nullable: true })
  dtobito: Date | null;

  @Column('char', { name: 'INDCOMUNPOLICIA', nullable: true, length: 1 })
  indcomunpolicia: string | null;

  @Column('int', { name: 'CODSITGERADORA', nullable: true })
  codsitgeradora: number | null;

  @Column('smallint', { name: 'INICIATCAT', nullable: true })
  iniciatcat: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 999 })
  observacao: string | null;

  @Column('smallint', { name: 'TPLOCAL', nullable: true })
  tplocal: number | null;

  @Column('varchar', { name: 'DSCLOCAL', nullable: true, length: 255 })
  dsclocal: string | null;

  @Column('varchar', { name: 'CODAMB', nullable: true, length: 30 })
  codamb: string | null;

  @Column('varchar', { name: 'DSCLOGRAD', nullable: true, length: 80 })
  dsclograd: string | null;

  @Column('varchar', { name: 'NRLOGRAD', nullable: true, length: 10 })
  nrlograd: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('int', { name: 'CODMUNIC', nullable: true })
  codmunic: number | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'PAIS', nullable: true, length: 3 })
  pais: string | null;

  @Column('varchar', { name: 'CODPOSTAL', nullable: true, length: 12 })
  codpostal: string | null;

  @Column('smallint', { name: 'TPINSCLOCALACID', nullable: true })
  tpinsclocalacid: number | null;

  @Column('varchar', { name: 'NRINSCLOCALACID', nullable: true, length: 15 })
  nrinsclocalacid: string | null;

  @Column('varchar', { name: 'CODCNES', nullable: true, length: 7 })
  codcnes: string | null;

  @Column('datetime', { name: 'DTATENDIMENTO', nullable: true })
  dtatendimento: Date | null;

  @Column('varchar', { name: 'HRATENDIMENTO', nullable: true, length: 4 })
  hratendimento: string | null;

  @Column('char', { name: 'INDINTERNACAO', nullable: true, length: 1 })
  indinternacao: string | null;

  @Column('smallint', { name: 'DURTRAT', nullable: true })
  durtrat: number | null;

  @Column('char', { name: 'INDAFAST', nullable: true, length: 1 })
  indafast: string | null;

  @Column('int', { name: 'DSCLESAO', nullable: true })
  dsclesao: number | null;

  @Column('varchar', { name: 'DSCCOMPLESAO', nullable: true, length: 200 })
  dsccomplesao: string | null;

  @Column('varchar', { name: 'DIAGPROVAVEL', nullable: true, length: 100 })
  diagprovavel: string | null;

  @Column('varchar', { name: 'CODCID', nullable: true, length: 4 })
  codcid: string | null;

  @Column('varchar', {
    name: 'OBSERVACAOATESTADO',
    nullable: true,
    length: 255,
  })
  observacaoatestado: string | null;

  @Column('varchar', { name: 'NMEMIT', nullable: true, length: 70 })
  nmemit: string | null;

  @Column('smallint', { name: 'IDEOC', nullable: true })
  ideoc: number | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'UFOC', nullable: true, length: 2 })
  ufoc: string | null;

  @Column('datetime', { name: 'DTCATORIG', nullable: true })
  dtcatorig: Date | null;

  @Column('varchar', { name: 'NRRECCATORIG', nullable: true, length: 40 })
  nrreccatorig: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'TPLOGRAD', nullable: true, length: 4 })
  tplograd: string | null;

  @Column('datetime', { name: 'ULTDIATRAB', nullable: true })
  ultdiatrab: Date | null;

  @Column('char', { name: 'HOUVEAFAST', nullable: true, length: 1 })
  houveafast: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps2210AcEntity,
    (tfps2210AcEntity) => tfps2210AcEntity.tfps2,
  )
  tfps2210Acs: Tfps2210AcEntity[];

  @OneToMany(
    () => Tfps2210PaEntity,
    (tfps2210PaEntity) => tfps2210PaEntity.tfps2,
  )
  tfps2210Pas: Tfps2210PaEntity[];
}
