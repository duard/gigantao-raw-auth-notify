import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPFUN2205', ['codemp', 'codfunc', 'referencia'], { unique: true })
@Entity('TFPFUN2205', { schema: 'SANKHYA' })
export class Tfpfun2205Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('datetime', { name: 'DTESOCIAL2205' })
  dtesocial2205: Date;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'PIS', nullable: true, length: 11 })
  pis: string | null;

  @Column('varchar', { name: 'NOMEFUNC', nullable: true, length: 100 })
  nomefunc: string | null;

  @Column('varchar', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('int', { name: 'RACAFUNCIONARIO', nullable: true })
  racafuncionario: number | null;

  @Column('smallint', { name: 'ESTADOCIVIL', nullable: true })
  estadocivil: number | null;

  @Column('varchar', { name: 'NMSOCIAL', nullable: true, length: 70 })
  nmsocial: string | null;

  @Column('int', { name: 'NUMCPS', nullable: true })
  numcps: number | null;

  @Column('varchar', { name: 'SERIECPS', nullable: true, length: 6 })
  seriecps: string | null;

  @Column('varchar', { name: 'UFCPS', nullable: true, length: 2 })
  ufcps: string | null;

  @Column('varchar', { name: 'NRORIC', nullable: true, length: 15 })
  nroric: string | null;

  @Column('varchar', { name: 'ORGAORIC', nullable: true, length: 12 })
  orgaoric: string | null;

  @Column('datetime', { name: 'DTEMIRIC', nullable: true })
  dtemiric: Date | null;

  @Column('varchar', { name: 'IDENTIDADE', nullable: true, length: 15 })
  identidade: string | null;

  @Column('varchar', { name: 'ORGAORG', nullable: true, length: 6 })
  orgaorg: string | null;

  @Column('datetime', { name: 'DTRG', nullable: true })
  dtrg: Date | null;

  @Column('varchar', { name: 'RNE', nullable: true, length: 20 })
  rne: string | null;

  @Column('varchar', { name: 'ORGAORNE', nullable: true, length: 20 })
  orgaorne: string | null;

  @Column('datetime', { name: 'DTEXPRNE', nullable: true })
  dtexprne: Date | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'ORGAOOC', nullable: true, length: 20 })
  orgaooc: string | null;

  @Column('datetime', { name: 'DTEXPOC', nullable: true })
  dtexpoc: Date | null;

  @Column('datetime', { name: 'DTVALOC', nullable: true })
  dtvaloc: Date | null;

  @Column('varchar', { name: 'NROCNH', nullable: true, length: 20 })
  nrocnh: string | null;

  @Column('datetime', { name: 'DTEXPCNH', nullable: true })
  dtexpcnh: Date | null;

  @Column('varchar', { name: 'UFCNH', nullable: true, length: 2 })
  ufcnh: string | null;

  @Column('datetime', { name: 'VENCIMENTOCNH', nullable: true })
  vencimentocnh: Date | null;

  @Column('datetime', { name: 'PRIMEIRACNH', nullable: true })
  primeiracnh: Date | null;

  @Column('varchar', { name: 'CATEGORIACNH', nullable: true, length: 4 })
  categoriacnh: string | null;

  @Column('varchar', { name: 'TPLOGRADBRASIL', nullable: true, length: 4 })
  tplogradbrasil: string | null;

  @Column('varchar', { name: 'DSCLOGRADBRASIL', nullable: true, length: 60 })
  dsclogradbrasil: string | null;

  @Column('varchar', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'BAIRROBRASIL', nullable: true, length: 50 })
  bairrobrasil: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

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

  @Column('varchar', { name: 'NMCIDEXTERIOR', nullable: true, length: 60 })
  nmcidexterior: string | null;

  @Column('varchar', { name: 'CODPOSTALEXTERIOR', nullable: true, length: 10 })
  codpostalexterior: string | null;

  @Column('datetime', { name: 'DTCHEGPAIS', nullable: true })
  dtchegpais: Date | null;

  @Column('smallint', { name: 'CLASSTRABESTRANG', nullable: true })
  classtrabestrang: number | null;

  @Column('char', { name: 'CASADOBR', nullable: true, length: 1 })
  casadobr: string | null;

  @Column('char', { name: 'FILHOSBR', nullable: true, length: 1 })
  filhosbr: string | null;

  @Column('varchar', { name: 'DEFFISICA', nullable: true, length: 1 })
  deffisica: string | null;

  @Column('varchar', { name: 'DEFVISUAL', nullable: true, length: 1 })
  defvisual: string | null;

  @Column('varchar', { name: 'DEFAUDITIVA', nullable: true, length: 1 })
  defauditiva: string | null;

  @Column('varchar', { name: 'DEFMENTAL', nullable: true, length: 1 })
  defmental: string | null;

  @Column('varchar', { name: 'DEFINTELECTUAL', nullable: true, length: 1 })
  defintelectual: string | null;

  @Column('varchar', { name: 'REABREADAP', nullable: true, length: 1 })
  reabreadap: string | null;

  @Column('char', { name: 'INFOCOTA', nullable: true, length: 1 })
  infocota: string | null;

  @Column('varchar', { name: 'OBSDEFICIENCIA', nullable: true, length: 250 })
  obsdeficiencia: string | null;

  @Column('char', { name: 'TRABAPOSENT', nullable: true, length: 1 })
  trabaposent: string | null;

  @Column('smallint', { name: 'NIVESC', nullable: true })
  nivesc: number | null;

  @Column('varchar', { name: 'NOMEMAE', nullable: true, length: 104 })
  nomemae: string | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('int', { name: 'CODMUNICNASCIMENTO', nullable: true })
  codmunicnascimento: number | null;

  @Column('varchar', { name: 'UFNASCIMENTO', nullable: true, length: 2 })
  ufnascimento: string | null;

  @Column('int', { name: 'PAISNASCTONASCIMENTO', nullable: true })
  paisnasctonascimento: number | null;

  @Column('int', { name: 'PAISNACNASCIMENTO', nullable: true })
  paisnacnascimento: number | null;

  @Column('varchar', { name: 'NOMEPAI', nullable: true, length: 100 })
  nomepai: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('varchar', { name: 'TMPRESIDTRABESTRANG', nullable: true, length: 1 })
  tmpresidtrabestrang: string | null;

  @Column('varchar', { name: 'CONDINGESTRANG', nullable: true, length: 1 })
  condingestrang: string | null;
}
