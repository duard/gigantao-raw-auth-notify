import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2205DependenteEntity } from './tFPS2205_DEPENDENTE.entity';

@Index('PK_TFPS2205', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index('TFPS2205_I01', ['codemp', 'tpamb', 'chave'], {})
@Index('TFPS2205_I02', ['codemp', 'cpftrab'], {})
@Entity('TFPS2205', { schema: 'SANKHYA' })
export class Tfps2205Entity {
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

  @Column('datetime', { name: 'DTALTERACAO', nullable: true })
  dtalteracao: Date | null;

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

  @Column('varchar', { name: 'NMSOC', nullable: true, length: 70 })
  nmsoc: string | null;

  @Column('varchar', { name: 'NRCTPS', nullable: true, length: 11 })
  nrctps: string | null;

  @Column('varchar', { name: 'SERIECTPS', nullable: true, length: 6 })
  seriectps: string | null;

  @Column('varchar', { name: 'UFCTPS', nullable: true, length: 2 })
  ufctps: string | null;

  @Column('varchar', { name: 'ORGAOEMISSORRIC', nullable: true, length: 20 })
  orgaoemissorric: string | null;

  @Column('datetime', { name: 'DTEXPEDRIC', nullable: true })
  dtexpedric: Date | null;

  @Column('varchar', { name: 'ORGAOEMISSORRG', nullable: true, length: 20 })
  orgaoemissorrg: string | null;

  @Column('datetime', { name: 'DTEXPEDRG', nullable: true })
  dtexpedrg: Date | null;

  @Column('varchar', { name: 'ORGAOEMISSORRNE', nullable: true, length: 20 })
  orgaoemissorrne: string | null;

  @Column('datetime', { name: 'DTEXPEDRNE', nullable: true })
  dtexpedrne: Date | null;

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

  @Column('varchar', { name: 'GRAUINSTR', nullable: true, length: 2 })
  grauinstr: string | null;

  @Column('varchar', { name: 'EMAILALTERNAT', nullable: true, length: 60 })
  emailalternat: string | null;

  @Column('varchar', { name: 'NRRIC', nullable: true, length: 14 })
  nrric: string | null;

  @Column('varchar', { name: 'NRRG', nullable: true, length: 14 })
  nrrg: string | null;

  @Column('varchar', { name: 'NRRNE', nullable: true, length: 14 })
  nrrne: string | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'UFCNH', nullable: true, length: 2 })
  ufcnh: string | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

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

  @Column('varchar', { name: 'NMMAENASCIMENTO', nullable: true, length: 100 })
  nmmaenascimento: string | null;

  @Column('varchar', { name: 'NMPAINASCIMENTO', nullable: true, length: 100 })
  nmpainascimento: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('char', { name: 'TMPRESID', nullable: true, length: 1 })
  tmpresid: string | null;

  @Column('char', { name: 'CONDING', nullable: true, length: 1 })
  conding: string | null;

  @Column('smallint', { name: 'TPREGPREV', nullable: true })
  tpregprev: number | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('smallint', { name: 'TPREGTRAB', nullable: true })
  tpregtrab: number | null;

  @Column('char', { name: 'POSSUIS2200', nullable: true, length: 1 })
  possuis2200: string | null;

  @Column('varchar', { name: 'STATUSENVIO', nullable: true, length: 1 })
  statusenvio: string | null;

  @Column('varchar', { name: 'EXCLMANUAL', nullable: true, length: 1 })
  exclmanual: string | null;

  @OneToMany(
    () => Tfps2205DependenteEntity,
    (tfps2205DependenteEntity) => tfps2205DependenteEntity.tfps2,
  )
  tfps2205Dependentes: Tfps2205DependenteEntity[];
}
