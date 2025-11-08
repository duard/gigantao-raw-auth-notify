import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFCBCO_EXC', ['nucurriculo', 'dhexclusao'], { unique: true })
@Entity('TFCBCO_EXC', { schema: 'SANKHYA' })
export class TfcbcoExcEntity {
  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('char', { name: 'NOMECANDIDATO', length: 40 })
  nomecandidato: string;

  @Column('float', { name: 'PRETSALARIAL', nullable: true, precision: 53 })
  pretsalarial: number | null;

  @Column('char', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('int', { name: 'NUMCPS', nullable: true })
  numcps: number | null;

  @Column('char', { name: 'SERIECPS', nullable: true, length: 5 })
  seriecps: string | null;

  @Column('smallint', { name: 'UFCPS', nullable: true })
  ufcps: number | null;

  @Column('char', { name: 'PIS', nullable: true, length: 11 })
  pis: string | null;

  @Column('char', { name: 'IDENTIDADE', nullable: true, length: 15 })
  identidade: string | null;

  @Column('char', { name: 'ORGAORG', nullable: true, length: 6 })
  orgaorg: string | null;

  @Column('char', { name: 'SEXO', length: 1, default: () => "'M'" })
  sexo: string;

  @Column('datetime', { name: 'DTNASC' })
  dtnasc: Date;

  @Column('smallint', { name: 'ESTADOCIVIL' })
  estadocivil: number;

  @Column('char', { name: 'NATURALIDADE', nullable: true, length: 45 })
  naturalidade: string | null;

  @Column('char', { name: 'DEFICIENTE', length: 1, default: () => "'N'" })
  deficiente: string;

  @Column('char', { name: 'DESCRDEFICIENCIA', nullable: true, length: 30 })
  descrdeficiencia: string | null;

  @Column('char', { name: 'TIPOEND', nullable: true, length: 3 })
  tipoend: string | null;

  @Column('char', { name: 'NOMEEND', nullable: true, length: 80 })
  nomeend: string | null;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('char', { name: 'COMPLEND', nullable: true, length: 30 })
  complend: string | null;

  @Column('char', { name: 'BAIRRO', nullable: true, length: 45 })
  bairro: string | null;

  @Column('char', { name: 'CIDADE', length: 45 })
  cidade: string;

  @Column('char', { name: 'UF', length: 2 })
  uf: string;

  @Column('char', { name: 'PAIS', length: 45 })
  pais: string;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 200 })
  email: string | null;

  @Column('smallint', { name: 'GRAUINSTR' })
  grauinstr: number;

  @Column('char', { name: 'CATEGORIACNH', nullable: true, length: 4 })
  categoriacnh: string | null;

  @Column('char', { name: 'DISPVIAGEM', length: 1 })
  dispviagem: string;

  @Column('char', { name: 'DISPMUDANCA', length: 1 })
  dispmudanca: string;

  @Column('char', { name: 'ESTRANGEIRO', length: 1 })
  estrangeiro: string;

  @Column('smallint', { name: 'ANOCHEGPAIS', nullable: true })
  anochegpais: number | null;

  @Column('char', { name: 'RNE', nullable: true, length: 20 })
  rne: string | null;

  @Column('char', { name: 'SITPAIS', nullable: true, length: 1 })
  sitpais: string | null;

  @Column('datetime', { name: 'DTVALPAIS', nullable: true })
  dtvalpais: Date | null;

  @Column('char', { name: 'INDICACAO', nullable: true, length: 200 })
  indicacao: string | null;

  @Column('datetime', {
    name: 'DTINCLUSAO',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtinclusao: Date;

  @Column('smallint', { name: 'STATUS', default: () => '(0)' })
  status: number;

  @Column('int', { name: 'CODTIPPARC' })
  codtipparc: number;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('text', { name: 'CONSIDERACOES', nullable: true })
  consideracoes: string | null;

  @Column('image', { name: 'FOTO', nullable: true })
  foto: Buffer | null;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ativo: string | null;

  @Column('money', { name: 'PRETSALARIALINICIAL', nullable: true })
  pretsalarialinicial: number | null;

  @Column('char', { name: 'INCLUSAOMGE', length: 1, default: () => "'N'" })
  inclusaomge: string;

  @Column('int', { name: 'NUCURRICULOBT', nullable: true })
  nucurriculobt: number | null;

  @Column('float', { name: 'PRETSALARIALFINAL', nullable: true, precision: 53 })
  pretsalarialfinal: number | null;

  @Column('smallint', { name: 'TIPDEFICIENCIA', default: () => '(0)' })
  tipdeficiencia: number;
}
