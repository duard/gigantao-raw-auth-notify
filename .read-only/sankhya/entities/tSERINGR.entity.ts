import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERINGR', ['nuconsulta'], { unique: true })
@Entity('TSERINGR', { schema: 'SANKHYA' })
export class TseringrEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { name: 'SITUACAORF', nullable: true })
  situacaorf: number | null;

  @Column('varchar', { name: 'DESCRSITRF', nullable: true, length: 100 })
  descrsitrf: string | null;

  @Column('varchar', { name: 'NRUTRG', nullable: true, length: 11 })
  nrutrg: string | null;

  @Column('datetime', { name: 'DTUTRG', nullable: true })
  dtutrg: Date | null;

  @Column('varchar', { name: 'RAZAO', nullable: true, length: 70 })
  razao: string | null;

  @Column('varchar', { name: 'NOMEFANTASIA', nullable: true, length: 60 })
  nomefantasia: string | null;

  @Column('varchar', { name: 'NIRE', nullable: true, length: 11 })
  nire: string | null;

  @Column('varchar', { name: 'TIPOSOCIEDADE', nullable: true, length: 60 })
  tiposociedade: string | null;

  @Column('varchar', { name: 'OPCAOTRIBUTARIA', nullable: true, length: 30 })
  opcaotributaria: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 30 })
  bairro: string | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 80 })
  endereco: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 30 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 20 })
  cep: string | null;

  @Column('varchar', { name: 'NRFAX', nullable: true, length: 20 })
  nrfax: string | null;

  @Column('varchar', { name: 'HOMEPAGE', nullable: true, length: 70 })
  homepage: string | null;

  @Column('datetime', { name: 'DATAFUND', nullable: true })
  datafund: Date | null;

  @Column('varchar', { name: 'RAMOATV', nullable: true, length: 54 })
  ramoatv: string | null;

  @Column('varchar', { name: 'RG', nullable: true, length: 15 })
  rg: string | null;

  @Column('datetime', { name: 'DATANASC', nullable: true })
  datanasc: Date | null;

  @Column('varchar', { name: 'NOMEMAE', nullable: true, length: 45 })
  nomemae: string | null;

  @Column('varchar', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('varchar', { name: 'TIPODOC', nullable: true, length: 15 })
  tipodoc: string | null;

  @Column('varchar', { name: 'EMISRG', nullable: true, length: 5 })
  emisrg: string | null;

  @Column('datetime', { name: 'DTRG', nullable: true })
  dtrg: Date | null;

  @Column('varchar', { name: 'UFRG', nullable: true, length: 2 })
  ufrg: string | null;

  @Column('varchar', { name: 'ESTADOCIVIL', nullable: true, length: 12 })
  estadocivil: string | null;

  @Column('smallint', { name: 'NRODEPENDENTES', nullable: true })
  nrodependentes: number | null;

  @Column('varchar', { name: 'ESCOLARIDADE', nullable: true, length: 12 })
  escolaridade: string | null;

  @Column('varchar', { name: 'MUNNASC', nullable: true, length: 25 })
  munnasc: string | null;

  @Column('varchar', { name: 'UFNASC', nullable: true, length: 2 })
  ufnasc: string | null;

  @Column('varchar', { name: 'CPFCONJUGE', nullable: true, length: 15 })
  cpfconjuge: string | null;

  @Column('varchar', { name: 'DDDRES', nullable: true, length: 3 })
  dddres: string | null;

  @Column('varchar', { name: 'FONERES', nullable: true, length: 20 })
  foneres: string | null;

  @Column('varchar', { name: 'DDDCOM', nullable: true, length: 3 })
  dddcom: string | null;

  @Column('varchar', { name: 'FONECOM', nullable: true, length: 20 })
  fonecom: string | null;

  @Column('smallint', { name: 'RAMAL', nullable: true })
  ramal: number | null;

  @Column('varchar', { name: 'CELULAR', nullable: true, length: 20 })
  celular: string | null;

  @Column('varchar', { name: 'DDDCEL', nullable: true, length: 3 })
  dddcel: string | null;

  @Column('datetime', { name: 'DTRESIDECIA', nullable: true })
  dtresidecia: Date | null;

  @Column('varchar', { name: 'INSCRICAOESTADUAL', nullable: true, length: 15 })
  inscricaoestadual: string | null;

  @Column('varchar', { name: 'FILIAIS', nullable: true, length: 1000 })
  filiais: string | null;

  @Column('smallint', { name: 'NROFILIAIS', nullable: true })
  nrofiliais: number | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @Column('int', { name: 'SITCPF', nullable: true })
  sitcpf: number | null;

  @Column('varchar', { name: 'CNAE', nullable: true, length: 10 })
  cnae: string | null;

  @Column('datetime', { name: 'DATACNPJ', nullable: true })
  datacnpj: Date | null;

  @Column('int', { name: 'NUMEMPREGADOS', nullable: true })
  numempregados: number | null;

  @Column('varchar', { name: 'CODSERASA', nullable: true, length: 10 })
  codserasa: string | null;

  @Column('float', { name: 'PERCIMPORT', nullable: true, precision: 53 })
  percimport: number | null;

  @Column('float', { name: 'PERCEXPORT', nullable: true, precision: 53 })
  percexport: number | null;

  @Column('varchar', { name: 'TIPRELATO', nullable: true, length: 1 })
  tiprelato: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 16 })
  cnpj: string | null;

  @Column('varchar', { name: 'CODMOSAIC', nullable: true, length: 3 })
  codmosaic: string | null;

  @Column('datetime', { name: 'DTATUALIZACAO', nullable: true })
  dtatualizacao: Date | null;

  @Column('varchar', { name: 'MSGMOSAIC', nullable: true, length: 100 })
  msgmosaic: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 70 })
  email: string | null;
}
