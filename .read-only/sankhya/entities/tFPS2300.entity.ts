import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2300DependenteEntity } from './tFPS2300_DEPENDENTE.entity';

@Index('PK_TFPS2300', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index(
  'TFPS2300_I01',
  ['codemp', 'tpamb', 'status', 'chave', 'nrorecibo', 'dtref', 'sequencia'],
  {},
)
@Index('TFPS2300_I02', ['chave', 'nrorecibo', 'dtref', 'sequencia'], {})
@Entity('TFPS2300', { schema: 'SANKHYA' })
export class Tfps2300Entity {
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

  @Column('int', { name: 'CODMUNICBRASIL', nullable: true })
  codmunicbrasil: number | null;

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

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('varchar', { name: 'FONEPRINC', nullable: true, length: 13 })
  foneprinc: string | null;

  @Column('varchar', { name: 'FONEALTERNAT', nullable: true, length: 13 })
  fonealternat: string | null;

  @Column('varchar', { name: 'EMAILPRINC', nullable: true, length: 60 })
  emailprinc: string | null;

  @Column('varchar', { name: 'EMAILALTERNAT', nullable: true, length: 60 })
  emailalternat: string | null;

  @Column('char', { name: 'CADINI', nullable: true, length: 1 })
  cadini: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('smallint', { name: 'NATATIVIDADE', nullable: true })
  natatividade: number | null;

  @Column('varchar', { name: 'CODCARGO', nullable: true, length: 30 })
  codcargo: string | null;

  @Column('varchar', { name: 'CODFUNCAO', nullable: true, length: 30 })
  codfuncao: string | null;

  @Column('float', { name: 'VRSALFX', nullable: true, precision: 53 })
  vrsalfx: number | null;

  @Column('smallint', { name: 'UNDSALFIXO', nullable: true })
  undsalfixo: number | null;

  @Column('varchar', { name: 'DSCSALVAR', nullable: true, length: 999 })
  dscsalvar: string | null;

  @Column('smallint', { name: 'OPCFGTS', nullable: true })
  opcfgts: number | null;

  @Column('datetime', { name: 'DTOPCFGTS', nullable: true })
  dtopcfgts: Date | null;

  @Column('smallint', { name: 'CATEGORIGDIRSIND', nullable: true })
  categorigdirsind: number | null;

  @Column('varchar', { name: 'CNPJORIGDIRSIND', nullable: true, length: 14 })
  cnpjorigdirsind: string | null;

  @Column('datetime', { name: 'DTADMORIGDIRSIND', nullable: true })
  dtadmorigdirsind: Date | null;

  @Column('varchar', { name: 'MATRICORIGDIRSIND', nullable: true, length: 30 })
  matricorigdirsind: string | null;

  @Column('smallint', { name: 'CATEGORIGCED', nullable: true })
  categorigced: number | null;

  @Column('varchar', { name: 'CNPJCED', nullable: true, length: 14 })
  cnpjced: string | null;

  @Column('varchar', { name: 'MATRICCED', nullable: true, length: 30 })
  matricced: string | null;

  @Column('datetime', { name: 'DTADMCED', nullable: true })
  dtadmced: Date | null;

  @Column('smallint', { name: 'TPREGTRABCED', nullable: true })
  tpregtrabced: number | null;

  @Column('smallint', { name: 'TPREGPREVCED', nullable: true })
  tpregprevced: number | null;

  @Column('smallint', { name: 'INFONUSCED', nullable: true })
  infonusced: number | null;

  @Column('char', { name: 'NATESTAGIO', nullable: true, length: 1 })
  natestagio: string | null;

  @Column('char', { name: 'NIVESTAGIO', nullable: true, length: 1 })
  nivestagio: string | null;

  @Column('varchar', { name: 'AREAATUACAO', nullable: true, length: 50 })
  areaatuacao: string | null;

  @Column('varchar', { name: 'NRAPOL', nullable: true, length: 30 })
  nrapol: string | null;

  @Column('float', { name: 'VLRBOLSA', nullable: true, precision: 53 })
  vlrbolsa: number | null;

  @Column('datetime', { name: 'DTPREVTERM', nullable: true })
  dtprevterm: Date | null;

  @Column('varchar', { name: 'CNPJINSTENSINO', nullable: true, length: 14 })
  cnpjinstensino: string | null;

  @Column('varchar', { name: 'NMRAZAOINSTENS', nullable: true, length: 100 })
  nmrazaoinstens: string | null;

  @Column('varchar', { name: 'DSCLOGRADINSTENS', nullable: true, length: 80 })
  dsclogradinstens: string | null;

  @Column('varchar', { name: 'NRLOGRADINSTENS', nullable: true, length: 10 })
  nrlogradinstens: string | null;

  @Column('varchar', { name: 'BAIRROINSTENS', nullable: true, length: 60 })
  bairroinstens: string | null;

  @Column('varchar', { name: 'CEPINSTENS', nullable: true, length: 8 })
  cepinstens: string | null;

  @Column('int', { name: 'CODMUNICINSTENS', nullable: true })
  codmunicinstens: number | null;

  @Column('varchar', { name: 'UFINSTENS', nullable: true, length: 2 })
  ufinstens: string | null;

  @Column('varchar', { name: 'CNPJAGNTINTEG', nullable: true, length: 14 })
  cnpjagntinteg: string | null;

  @Column('varchar', { name: 'NMRAZAOAGNTINTEG', nullable: true, length: 100 })
  nmrazaoagntinteg: string | null;

  @Column('varchar', { name: 'DSCLOGRADAGNTINTEG', nullable: true, length: 80 })
  dsclogradagntinteg: string | null;

  @Column('varchar', { name: 'NRLOGRADAGNTINTEG', nullable: true, length: 10 })
  nrlogradagntinteg: string | null;

  @Column('varchar', { name: 'BAIRROAGNTINTEG', nullable: true, length: 60 })
  bairroagntinteg: string | null;

  @Column('varchar', { name: 'CEPAGNTINTEG', nullable: true, length: 8 })
  cepagntinteg: string | null;

  @Column('int', { name: 'CODMUNICAGNTINTEG', nullable: true })
  codmunicagntinteg: number | null;

  @Column('varchar', { name: 'UFAGNTINTEG', nullable: true, length: 2 })
  ufagntinteg: string | null;

  @Column('varchar', { name: 'CPFSUPERVISOR', nullable: true, length: 11 })
  cpfsupervisor: string | null;

  @Column('varchar', { name: 'NMSUPERV', nullable: true, length: 70 })
  nmsuperv: string | null;

  @Column('datetime', { name: 'DTINIAFAST', nullable: true })
  dtiniafast: Date | null;

  @Column('varchar', { name: 'CODMOTAFAST', nullable: true, length: 2 })
  codmotafast: string | null;

  @Column('datetime', { name: 'DTTERM', nullable: true })
  dtterm: Date | null;

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

  @Column('datetime', { name: 'DTALTCPF', nullable: true })
  dtaltcpf: Date | null;

  @Column('varchar', { name: 'OBSALTCPF', nullable: true, length: 255 })
  obsaltcpf: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'TMPRESID', nullable: true, length: 1 })
  tmpresid: string | null;

  @Column('varchar', { name: 'CONDING', nullable: true, length: 1 })
  conding: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('varchar', { name: 'DESCRCARGO', nullable: true, length: 100 })
  descrcargo: string | null;

  @Column('varchar', { name: 'CBOCARGO', nullable: true, length: 6 })
  cbocargo: string | null;

  @Column('varchar', { name: 'DESCRFUNCAO', nullable: true, length: 100 })
  descrfuncao: string | null;

  @Column('varchar', { name: 'CBOFUNCAO', nullable: true, length: 6 })
  cbofuncao: string | null;

  @Column('varchar', { name: 'TPREGPREVS2306', nullable: true, length: 1 })
  tpregprevs2306: string | null;

  @Column('varchar', {
    name: 'TPINSCLOCALTRABGERAL',
    nullable: true,
    length: 1,
  })
  tpinsclocaltrabgeral: string | null;

  @Column('varchar', {
    name: 'NRINSCLOCALTRABGERAL',
    nullable: true,
    length: 100,
  })
  nrinsclocaltrabgeral: string | null;

  @Column('varchar', { name: 'MONTALOCALTRAB', nullable: true, length: 1 })
  montalocaltrab: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('varchar', { name: 'NRPROCTRAB', nullable: true, length: 20 })
  nrproctrab: string | null;

  @Column('varchar', { name: 'STATUSENVIO', nullable: true, length: 1 })
  statusenvio: string | null;

  @Column('datetime', { name: 'DTALTERACAO', nullable: true })
  dtalteracao: Date | null;

  @Column('varchar', { name: 'EXCLMANUAL', nullable: true, length: 1 })
  exclmanual: string | null;

  @OneToMany(
    () => Tfps2300DependenteEntity,
    (tfps2300DependenteEntity) => tfps2300DependenteEntity.tfps2,
  )
  tfps2300Dependentes: Tfps2300DependenteEntity[];
}
