import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERQRA', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERQRA', { schema: 'SANKHYA' })
export class TserqraEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'TIPPESSOA', nullable: true, length: 1 })
  tippessoa: string | null;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 20 })
  cpfcnpj: string | null;

  @Column('varchar', { name: 'SEQCNPJ', nullable: true, length: 4 })
  seqcnpj: string | null;

  @Column('varchar', { name: 'DIGCPFCNPJ', nullable: true, length: 2 })
  digcpfcnpj: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 58 })
  nome: string | null;

  @Column('varchar', { name: 'CARGO', nullable: true, length: 12 })
  cargo: string | null;

  @Column('varchar', { name: 'NACIONALIDADE', nullable: true, length: 12 })
  nacionalidade: string | null;

  @Column('varchar', { name: 'ESTADOCIVIL', nullable: true, length: 9 })
  estadocivil: string | null;

  @Column('datetime', { name: 'DTINIMANDATO', nullable: true })
  dtinimandato: Date | null;

  @Column('datetime', { name: 'DTFIMMANDATO', nullable: true })
  dtfimmandato: Date | null;

  @Column('varchar', { name: 'RESTRICAO', nullable: true, length: 1 })
  restricao: string | null;

  @Column('varchar', { name: 'CARGOADMIX', nullable: true, length: 3 })
  cargoadmix: string | null;

  @Column('varchar', { name: 'SITUACAORF', nullable: true, length: 2 })
  situacaorf: string | null;

  @Column('datetime', { name: 'DTADMISSAO', nullable: true })
  dtadmissao: Date | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'MANDATO', nullable: true, length: 50 })
  mandato: string | null;

  @Column('varchar', { name: 'IDENTIDADE', nullable: true, length: 20 })
  identidade: string | null;

  @Column('datetime', { name: 'DTNASCIMENTO', nullable: true })
  dtnascimento: Date | null;

  @Column('varchar', { name: 'NATURALDE', nullable: true, length: 60 })
  naturalde: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 16 })
  telefone: string | null;

  @Column('varchar', { name: 'VINCULO', nullable: true, length: 50 })
  vinculo: string | null;

  @Column('varchar', { name: 'ENDERECO', length: 140 })
  endereco: string;
}
