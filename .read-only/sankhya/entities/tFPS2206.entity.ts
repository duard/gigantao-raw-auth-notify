import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2206HorarioEntity } from './tFPS2206_HORARIO.entity';
import { Tfps2206TfpftrcEntity } from './tFPS2206_TFPFTRC.entity';

@Index('PK_TFPS2206', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index('TFPS2206_I01', ['codemp', 'tpamb', 'chave'], {})
@Index('TFPS2206_I02', ['codemp', 'cpftrab'], {})
@Entity('TFPS2206', { schema: 'SANKHYA' })
export class Tfps2206Entity {
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

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('datetime', { name: 'DTALTERACAO', nullable: true })
  dtalteracao: Date | null;

  @Column('datetime', { name: 'DTEF', nullable: true })
  dtef: Date | null;

  @Column('varchar', { name: 'DSCALT', nullable: true, length: 150 })
  dscalt: string | null;

  @Column('smallint', { name: 'TPREGTRAB', nullable: true })
  tpregtrab: number | null;

  @Column('smallint', { name: 'TPREGPREV', nullable: true })
  tpregprev: number | null;

  @Column('smallint', { name: 'TPREGJOR', nullable: true })
  tpregjor: number | null;

  @Column('smallint', { name: 'NATATIVIDADE', nullable: true })
  natatividade: number | null;

  @Column('smallint', { name: 'DTBASE', nullable: true })
  dtbase: number | null;

  @Column('varchar', { name: 'CNPJSINDCATEGPROF', nullable: true, length: 14 })
  cnpjsindcategprof: string | null;

  @Column('varchar', { name: 'JUSTPRORR', nullable: true, length: 999 })
  justprorr: string | null;

  @Column('smallint', { name: 'TPPLANRP', nullable: true })
  tpplanrp: number | null;

  @Column('varchar', { name: 'CODCARGO', nullable: true, length: 30 })
  codcargo: string | null;

  @Column('varchar', { name: 'CODFUNCAO', nullable: true, length: 30 })
  codfuncao: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('smallint', { name: 'CODCATEG2', nullable: true })
  codcateg2: number | null;

  @Column('varchar', { name: 'CODCARREIRA', nullable: true, length: 30 })
  codcarreira: string | null;

  @Column('datetime', { name: 'DTINGRCARR', nullable: true })
  dtingrcarr: Date | null;

  @Column('float', { name: 'VRSALFX', nullable: true, precision: 53 })
  vrsalfx: number | null;

  @Column('smallint', { name: 'UNDSALFIXO', nullable: true })
  undsalfixo: number | null;

  @Column('varchar', { name: 'DSCSALVAR', nullable: true, length: 999 })
  dscsalvar: string | null;

  @Column('smallint', { name: 'TPCONTR', nullable: true })
  tpcontr: number | null;

  @Column('datetime', { name: 'DTTERM', nullable: true })
  dtterm: Date | null;

  @Column('smallint', { name: 'TPINSCLOCALTRABGERAL', nullable: true })
  tpinsclocaltrabgeral: number | null;

  @Column('varchar', {
    name: 'NRINSCLOCALTRABGERAL',
    nullable: true,
    length: 15,
  })
  nrinsclocaltrabgeral: string | null;

  @Column('varchar', {
    name: 'TPLOGRADLOCALTRABDOM',
    nullable: true,
    length: 4,
  })
  tplogradlocaltrabdom: string | null;

  @Column('varchar', {
    name: 'DSCLOGRADLOCALTRABDOM',
    nullable: true,
    length: 80,
  })
  dsclogradlocaltrabdom: string | null;

  @Column('varchar', {
    name: 'NRLOGRADLOCALTRABDOM',
    nullable: true,
    length: 10,
  })
  nrlogradlocaltrabdom: string | null;

  @Column('varchar', {
    name: 'COMPLEMENTOLOCALTRABDOM',
    nullable: true,
    length: 30,
  })
  complementolocaltrabdom: string | null;

  @Column('varchar', { name: 'BAIRROLOCALTRABDOM', nullable: true, length: 60 })
  bairrolocaltrabdom: string | null;

  @Column('varchar', { name: 'CEPLOCALTRABDOM', nullable: true, length: 8 })
  ceplocaltrabdom: string | null;

  @Column('int', { name: 'CODMUNICLOCALTRABDOM', nullable: true })
  codmuniclocaltrabdom: number | null;

  @Column('varchar', { name: 'UFLOCALTRABDOM', nullable: true, length: 2 })
  uflocaltrabdom: string | null;

  @Column('float', { name: 'QTDHRSSEM', nullable: true, precision: 53 })
  qtdhrssem: number | null;

  @Column('smallint', { name: 'TPJORNADA', nullable: true })
  tpjornada: number | null;

  @Column('varchar', { name: 'DSCTPJORN', nullable: true, length: 100 })
  dsctpjorn: string | null;

  @Column('char', { name: 'TMPPARC', nullable: true, length: 1 })
  tmpparc: string | null;

  @Column('varchar', { name: 'CNPJSINDTRAB', nullable: true, length: 14 })
  cnpjsindtrab: string | null;

  @Column('varchar', {
    name: 'NRPROCJUDALVARAJUDICIAL',
    nullable: true,
    length: 20,
  })
  nrprocjudalvarajudicial: string | null;

  @Column('smallint', { name: 'MTVALTER', nullable: true })
  mtvalter: number | null;

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

  @Column('varchar', { name: 'OBJDET', nullable: true, length: 255 })
  objdet: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'DESCRCARGO', nullable: true, length: 100 })
  descrcargo: string | null;

  @Column('varchar', { name: 'CBOCARGO', nullable: true, length: 6 })
  cbocargo: string | null;

  @Column('varchar', { name: 'DESCRFUNCAO', nullable: true, length: 100 })
  descrfuncao: string | null;

  @Column('varchar', { name: 'CBOFUNCAO', nullable: true, length: 6 })
  cbofuncao: string | null;

  @Column('varchar', { name: 'HRNOTURNO', nullable: true, length: 1 })
  hrnoturno: string | null;

  @Column('smallint', { name: 'TPINSCINFOCELETISTA', nullable: true })
  tpinscinfoceletista: number | null;

  @Column('varchar', {
    name: 'NRINSCINFOCELETISTA',
    nullable: true,
    length: 15,
  })
  nrinscinfoceletista: string | null;

  @Column('smallint', { name: 'INDRETIF', nullable: true })
  indretif: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('varchar', { name: 'CODTREICAP', nullable: true, length: 10 })
  codtreicap: string | null;

  @Column('smallint', { name: 'TPINSCAPREND', nullable: true })
  tpinscaprend: number | null;

  @Column('varchar', { name: 'CNPJPRAT', nullable: true, length: 14 })
  cnpjprat: string | null;

  @Column('smallint', { name: 'INDAPREND', nullable: true })
  indaprend: number | null;

  @Column('varchar', { name: 'NRINSCAPREND', nullable: true, length: 14 })
  nrinscaprend: string | null;

  @Column('varchar', { name: 'CNPJENTQUAL', nullable: true, length: 14 })
  cnpjentqual: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('varchar', { name: 'STATUSENVIO', nullable: true, length: 1 })
  statusenvio: string | null;

  @Column('varchar', { name: 'EXCLMANUAL', nullable: true, length: 1 })
  exclmanual: string | null;

  @OneToMany(
    () => Tfps2206HorarioEntity,
    (tfps2206HorarioEntity) => tfps2206HorarioEntity.tfps2,
  )
  tfps2206Horarios: Tfps2206HorarioEntity[];

  @OneToMany(
    () => Tfps2206TfpftrcEntity,
    (tfps2206TfpftrcEntity) => tfps2206TfpftrcEntity.tfps2,
  )
  tfps2206Tfpftrcs: Tfps2206TfpftrcEntity[];
}
