import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2200DependenteEntity } from './tFPS2200_DEPENDENTE.entity';
import { Tfps2200HorarioEntity } from './tFPS2200_HORARIO.entity';
import { Tfps2200TfpftrcEntity } from './tFPS2200_TFPFTRC.entity';

@Index('PK_TFPS2200', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index('TFPS2200_I01', ['codemp', 'chave'], {})
@Index(
  'TFPS2200_I02',
  ['codemp', 'tpamb', 'chave', 'nrorecibo', 'dtref', 'sequencia'],
  {},
)
@Index('TFPS2200_I03', ['chave', 'nrorecibo', 'dtref', 'sequencia'], {})
@Entity('TFPS2200', { schema: 'SANKHYA' })
export class Tfps2200Entity {
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

  @Column('varchar', { name: 'NMTRAB', nullable: true, length: 70 })
  nmtrab: string | null;

  @Column('char', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('smallint', { name: 'RACACOR', nullable: true })
  racacor: number | null;

  @Column('smallint', { name: 'ESTCIV', nullable: true })
  estciv: number | null;

  @Column('varchar', { name: 'GRAUINSTR', nullable: true, length: 2 })
  grauinstr: string | null;

  @Column('char', { name: 'INDPRIEMPR', nullable: true, length: 1 })
  indpriempr: string | null;

  @Column('varchar', { name: 'NMSOC', nullable: true, length: 70 })
  nmsoc: string | null;

  @Column('datetime', { name: 'DTNASCTONASCIMENTO', nullable: true })
  dtnasctonascimento: Date | null;

  @Column('int', { name: 'CODMUNICNASCIMENTO', nullable: true })
  codmunicnascimento: number | null;

  @Column('varchar', { name: 'UFNASCIMENTO', nullable: true, length: 2 })
  ufnascimento: string | null;

  @Column('varchar', {
    name: 'PAISNASCTONASCIMENTO',
    nullable: true,
    length: 3,
  })
  paisnasctonascimento: string | null;

  @Column('varchar', { name: 'PAISNACNASCIMENTO', nullable: true, length: 3 })
  paisnacnascimento: string | null;

  @Column('varchar', { name: 'NMMAENASCIMENTO', nullable: true, length: 70 })
  nmmaenascimento: string | null;

  @Column('varchar', { name: 'NMPAINASCIMENTO', nullable: true, length: 70 })
  nmpainascimento: string | null;

  @Column('varchar', { name: 'NRCTPS', nullable: true, length: 11 })
  nrctps: string | null;

  @Column('varchar', { name: 'SERIECTPS', nullable: true, length: 5 })
  seriectps: string | null;

  @Column('varchar', { name: 'UFCTPS', nullable: true, length: 2 })
  ufctps: string | null;

  @Column('varchar', { name: 'NRRIC', nullable: true, length: 14 })
  nrric: string | null;

  @Column('varchar', { name: 'ORGAOEMISSORRIC', nullable: true, length: 20 })
  orgaoemissorric: string | null;

  @Column('datetime', { name: 'DTEXPEDRIC', nullable: true })
  dtexpedric: Date | null;

  @Column('varchar', { name: 'NRRG', nullable: true, length: 14 })
  nrrg: string | null;

  @Column('varchar', { name: 'ORGAOEMISSORRG', nullable: true, length: 20 })
  orgaoemissorrg: string | null;

  @Column('datetime', { name: 'DTEXPEDRG', nullable: true })
  dtexpedrg: Date | null;

  @Column('varchar', { name: 'NRRNE', nullable: true, length: 14 })
  nrrne: string | null;

  @Column('varchar', { name: 'ORGAOEMISSORRNE', nullable: true, length: 20 })
  orgaoemissorrne: string | null;

  @Column('datetime', { name: 'DTEXPEDRNE', nullable: true })
  dtexpedrne: Date | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'ORGAOEMISSOROC', nullable: true, length: 20 })
  orgaoemissoroc: string | null;

  @Column('datetime', { name: 'DTEXPEDOC', nullable: true })
  dtexpedoc: Date | null;

  @Column('datetime', { name: 'DTVALIDOC', nullable: true })
  dtvalidoc: Date | null;

  @Column('varchar', { name: 'NRREGCNH', nullable: true, length: 12 })
  nrregcnh: string | null;

  @Column('datetime', { name: 'DTEXPEDCNH', nullable: true })
  dtexpedcnh: Date | null;

  @Column('varchar', { name: 'UFCNH', nullable: true, length: 2 })
  ufcnh: string | null;

  @Column('datetime', { name: 'DTVALIDCNH', nullable: true })
  dtvalidcnh: Date | null;

  @Column('datetime', { name: 'DTPRIHAB', nullable: true })
  dtprihab: Date | null;

  @Column('varchar', { name: 'CATEGORIACNH', nullable: true, length: 2 })
  categoriacnh: string | null;

  @Column('varchar', { name: 'TPLOGRADBRASIL', nullable: true, length: 4 })
  tplogradbrasil: string | null;

  @Column('varchar', { name: 'DSCLOGRADBRASIL', nullable: true, length: 80 })
  dsclogradbrasil: string | null;

  @Column('varchar', { name: 'NRLOGRADBRASIL', nullable: true, length: 10 })
  nrlogradbrasil: string | null;

  @Column('varchar', { name: 'COMPLEMENTOBRASIL', nullable: true, length: 30 })
  complementobrasil: string | null;

  @Column('varchar', { name: 'BAIRROBRASIL', nullable: true, length: 60 })
  bairrobrasil: string | null;

  @Column('varchar', { name: 'CEPBRASIL', nullable: true, length: 8 })
  cepbrasil: string | null;

  @Column('varchar', { name: 'CODMUNICBRASIL', nullable: true, length: 7 })
  codmunicbrasil: string | null;

  @Column('varchar', { name: 'UFBRASIL', nullable: true, length: 2 })
  ufbrasil: string | null;

  @Column('varchar', { name: 'PAISRESID', nullable: true, length: 3 })
  paisresid: string | null;

  @Column('varchar', { name: 'DSCLOGRADEXTERIOR', nullable: true, length: 80 })
  dsclogradexterior: string | null;

  @Column('varchar', { name: 'NRLOGRADEXTERIOR', nullable: true, length: 10 })
  nrlogradexterior: string | null;

  @Column('varchar', {
    name: 'COMPLEMENTOEXTERIOR',
    nullable: true,
    length: 30,
  })
  complementoexterior: string | null;

  @Column('varchar', { name: 'BAIRROEXTERIOR', nullable: true, length: 60 })
  bairroexterior: string | null;

  @Column('varchar', { name: 'NMCIDEXTERIOR', nullable: true, length: 50 })
  nmcidexterior: string | null;

  @Column('varchar', { name: 'CODPOSTALEXTERIOR', nullable: true, length: 12 })
  codpostalexterior: string | null;

  @Column('datetime', { name: 'DTCHEGADA', nullable: true })
  dtchegada: Date | null;

  @Column('smallint', { name: 'CLASSTRABESTRANG', nullable: true })
  classtrabestrang: number | null;

  @Column('char', { name: 'CASADOBR', nullable: true, length: 1 })
  casadobr: string | null;

  @Column('char', { name: 'FILHOSBR', nullable: true, length: 1 })
  filhosbr: string | null;

  @Column('char', { name: 'DEFFISICA', nullable: true, length: 1 })
  deffisica: string | null;

  @Column('char', { name: 'DEFVISUAL', nullable: true, length: 1 })
  defvisual: string | null;

  @Column('char', { name: 'DEFAUDITIVA', nullable: true, length: 1 })
  defauditiva: string | null;

  @Column('char', { name: 'DEFMENTAL', nullable: true, length: 1 })
  defmental: string | null;

  @Column('char', { name: 'DEFINTELECTUAL', nullable: true, length: 1 })
  defintelectual: string | null;

  @Column('char', { name: 'REABREADAP', nullable: true, length: 1 })
  reabreadap: string | null;

  @Column('char', { name: 'INFOCOTA', nullable: true, length: 1 })
  infocota: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('char', { name: 'TRABAPOSENT', nullable: true, length: 1 })
  trabaposent: string | null;

  @Column('varchar', { name: 'FONEPRINC', nullable: true, length: 13 })
  foneprinc: string | null;

  @Column('varchar', { name: 'FONEALTERNAT', nullable: true, length: 13 })
  fonealternat: string | null;

  @Column('varchar', { name: 'EMAILPRINC', nullable: true, length: 60 })
  emailprinc: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'TPREGTRAB', nullable: true })
  tpregtrab: number | null;

  @Column('smallint', { name: 'TPREGPREV', nullable: true })
  tpregprev: number | null;

  @Column('varchar', { name: 'NRRECINFPRELIM', nullable: true, length: 40 })
  nrrecinfprelim: string | null;

  @Column('char', { name: 'CADINI', nullable: true, length: 1 })
  cadini: string | null;

  @Column('datetime', { name: 'DTADM', nullable: true })
  dtadm: Date | null;

  @Column('smallint', { name: 'TPADMISSAO', nullable: true })
  tpadmissao: number | null;

  @Column('smallint', { name: 'INDADMISSAO', nullable: true })
  indadmissao: number | null;

  @Column('smallint', { name: 'TPREGJOR', nullable: true })
  tpregjor: number | null;

  @Column('smallint', { name: 'NATATIVIDADE', nullable: true })
  natatividade: number | null;

  @Column('smallint', { name: 'DTBASE', nullable: true })
  dtbase: number | null;

  @Column('varchar', { name: 'CNPJSINDCATEGPROF', nullable: true, length: 14 })
  cnpjsindcategprof: string | null;

  @Column('smallint', { name: 'OPCFGTS', nullable: true })
  opcfgts: number | null;

  @Column('datetime', { name: 'DTOPCFGTS', nullable: true })
  dtopcfgts: Date | null;

  @Column('smallint', { name: 'HIPLEG', nullable: true })
  hipleg: number | null;

  @Column('text', { name: 'JUSTCONTR', nullable: true })
  justcontr: string | null;

  @Column('smallint', { name: 'TPINCLCONTR', nullable: true })
  tpinclcontr: number | null;

  @Column('smallint', { name: 'TPINSCIDETOMADORSERV', nullable: true })
  tpinscidetomadorserv: number | null;

  @Column('varchar', {
    name: 'NRINSCIDETOMADORSERV',
    nullable: true,
    length: 15,
  })
  nrinscidetomadorserv: string | null;

  @Column('smallint', { name: 'TPINSCIDEESTABVINC', nullable: true })
  tpinscideestabvinc: number | null;

  @Column('varchar', { name: 'NRINSCIDEESTABVINC', nullable: true, length: 15 })
  nrinscideestabvinc: string | null;

  @Column('varchar', { name: 'CPFTRABSUBST', nullable: true, length: 11 })
  cpftrabsubst: string | null;

  @Column('smallint', { name: 'INDPROVIM', nullable: true })
  indprovim: number | null;

  @Column('smallint', { name: 'TPPROV', nullable: true })
  tpprov: number | null;

  @Column('datetime', { name: 'DTNOMEACAO', nullable: true })
  dtnomeacao: Date | null;

  @Column('datetime', { name: 'DTPOSSE', nullable: true })
  dtposse: Date | null;

  @Column('datetime', { name: 'DTEXERCICIO', nullable: true })
  dtexercicio: Date | null;

  @Column('smallint', { name: 'TPPLANRP', nullable: true })
  tpplanrp: number | null;

  @Column('varchar', {
    name: 'NRPROCJUDINFODECJUD',
    nullable: true,
    length: 20,
  })
  nrprocjudinfodecjud: string | null;

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

  @Column('char', { name: 'CLAUASSEG', nullable: true, length: 1 })
  clauasseg: string | null;

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

  @Column('varchar', { name: 'CNPJEMPREGANT', nullable: true, length: 14 })
  cnpjempregant: string | null;

  @Column('varchar', { name: 'MATRICANT', nullable: true, length: 30 })
  matricant: string | null;

  @Column('datetime', { name: 'DTINIVINCULO', nullable: true })
  dtinivinculo: Date | null;

  @Column('varchar', {
    name: 'OBSERVACAOSUCESSAOVINC',
    nullable: true,
    length: 255,
  })
  observacaosucessaovinc: string | null;

  @Column('datetime', { name: 'DTINIAFAST', nullable: true })
  dtiniafast: Date | null;

  @Column('varchar', { name: 'CODMOTAFAST', nullable: true, length: 2 })
  codmotafast: string | null;

  @Column('datetime', { name: 'DTDESLIG', nullable: true })
  dtdeslig: Date | null;

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

  @Column('char', { name: 'MODIFICOUCPF', length: 1, default: () => "'N'" })
  modificoucpf: string;

  @Column('varchar', { name: 'CPFANT', nullable: true, length: 11 })
  cpfant: string | null;

  @Column('int', { name: 'MATRICULAANT', nullable: true })
  matriculaant: number | null;

  @Column('datetime', { name: 'DTALTCPF', nullable: true })
  dtaltcpf: Date | null;

  @Column('varchar', { name: 'OBSALTCPF', nullable: true, length: 255 })
  obsaltcpf: string | null;

  @Column('smallint', { name: 'TPINSCANT', nullable: true })
  tpinscant: number | null;

  @Column('varchar', { name: 'OBJDET', nullable: true, length: 255 })
  objdet: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'TMPRESID', nullable: true, length: 1 })
  tmpresid: string | null;

  @Column('varchar', { name: 'CONDING', nullable: true, length: 1 })
  conding: string | null;

  @Column('varchar', { name: 'NRPROCTRAB', nullable: true, length: 20 })
  nrproctrab: string | null;

  @Column('varchar', { name: 'DESCRCARGO', nullable: true, length: 100 })
  descrcargo: string | null;

  @Column('varchar', { name: 'CBOCARGO', nullable: true, length: 6 })
  cbocargo: string | null;

  @Column('varchar', { name: 'DESCRFUNCAO', nullable: true, length: 100 })
  descrfuncao: string | null;

  @Column('varchar', { name: 'CBOFUNCAO', nullable: true, length: 6 })
  cbofuncao: string | null;

  @Column('varchar', { name: 'CODTREICAP', nullable: true, length: 10 })
  codtreicap: string | null;

  @Column('char', { name: 'HRNOTURNO', nullable: true, length: 1 })
  hrnoturno: string | null;

  @Column('smallint', { name: 'TPINSCINFOCELETISTA', nullable: true })
  tpinscinfoceletista: number | null;

  @Column('varchar', {
    name: 'NRINSCINFOCELETISTA',
    nullable: true,
    length: 15,
  })
  nrinscinfoceletista: string | null;

  @Column('varchar', { name: 'CNPJPRAT', nullable: true, length: 14 })
  cnpjprat: string | null;

  @Column('varchar', { name: 'CNPJENTQUAL', nullable: true, length: 14 })
  cnpjentqual: string | null;

  @Column('varchar', { name: 'MATANOTJUD', nullable: true, length: 30 })
  matanotjud: string | null;

  @Column('datetime', { name: 'DTADMJUD', nullable: true })
  dtadmjud: Date | null;

  @Column('varchar', { name: 'NRINSCAPREND', nullable: true, length: 14 })
  nrinscaprend: string | null;

  @Column('smallint', { name: 'TPINSCAPREND', nullable: true })
  tpinscaprend: number | null;

  @Column('smallint', { name: 'INDAPREND', nullable: true })
  indaprend: number | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('varchar', { name: 'STATUSENVIO', nullable: true, length: 1 })
  statusenvio: string | null;

  @Column('datetime', { name: 'DTALTERACAO', nullable: true })
  dtalteracao: Date | null;

  @Column('varchar', { name: 'EXCLMANUAL', nullable: true, length: 1 })
  exclmanual: string | null;

  @OneToMany(
    () => Tfps2200DependenteEntity,
    (tfps2200DependenteEntity) => tfps2200DependenteEntity.tfps2,
  )
  tfps2200Dependentes: Tfps2200DependenteEntity[];

  @OneToMany(
    () => Tfps2200HorarioEntity,
    (tfps2200HorarioEntity) => tfps2200HorarioEntity.tfps2,
  )
  tfps2200Horarios: Tfps2200HorarioEntity[];

  @OneToMany(
    () => Tfps2200TfpftrcEntity,
    (tfps2200TfpftrcEntity) => tfps2200TfpftrcEntity.tfps2,
  )
  tfps2200Tfpftrcs: Tfps2200TfpftrcEntity[];
}
