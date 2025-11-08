import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERF900', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERF900', { schema: 'SANKHYA' })
export class Tserf900Entity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CHAVE', length: 20 })
  chave: string;

  @Column('varchar', { name: 'CODFEAT', nullable: true, length: 8 })
  codfeat: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'SUBTIPO', nullable: true, length: 5 })
  subtipo: string | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 200 })
  mensagem: string | null;

  @Column('int', { name: 'FATOR', nullable: true })
  fator: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('int', { name: 'GRAUAPROV', nullable: true })
  grauaprov: number | null;

  @Column('varchar', { name: 'APROVADO', nullable: true, length: 1 })
  aprovado: string | null;

  @Column('int', { name: 'QTDAPROVREPROV', nullable: true })
  qtdaprovreprov: number | null;

  @Column('varchar', { name: 'REFATUAL', nullable: true, length: 6 })
  refatual: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 30 })
  origem: string | null;

  @Column('int', { name: 'QUANTMES5', nullable: true })
  quantmes5: number | null;

  @Column('float', { name: 'PRINAD', nullable: true, precision: 53 })
  prinad: number | null;

  @Column('int', { name: 'QUANTMES2', nullable: true })
  quantmes2: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'CNPJASS', nullable: true, length: 14 })
  cnpjass: string | null;

  @Column('int', { name: 'QUANTMES6', nullable: true })
  quantmes6: number | null;

  @Column('int', { name: 'QUANTMES1', nullable: true })
  quantmes1: number | null;

  @Column('datetime', { name: 'DTINC', nullable: true })
  dtinc: Date | null;

  @Column('int', { name: 'QUANTMES3', nullable: true })
  quantmes3: number | null;

  @Column('varchar', { name: 'MEDIA', nullable: true, length: 3 })
  media: string | null;

  @Column('float', { name: 'CODRET', nullable: true, precision: 53 })
  codret: number | null;

  @Column('smallint', { name: 'QUANTIDADE', nullable: true })
  quantidade: number | null;

  @Column('char', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 30 })
  cidade: string | null;

  @Column('int', { name: 'QUANTMES4', nullable: true })
  quantmes4: number | null;

  @Column('varchar', { name: 'REFMAI', nullable: true, length: 6 })
  refmai: string | null;

  @Column('int', { name: 'QUANTATUAL', nullable: true })
  quantatual: number | null;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('varchar', { name: 'NOMASS', nullable: true, length: 60 })
  nomass: string | null;

  @Column('float', { name: 'CAPACIDADE', nullable: true, precision: 53 })
  capacidade: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('datetime', { name: 'DTPROC', nullable: true })
  dtproc: Date | null;

  @Column('varchar', { name: 'NUMCON', nullable: true, length: 30 })
  numcon: string | null;

  @Column('varchar', { name: 'REFMEN', nullable: true, length: 6 })
  refmen: string | null;
}
