import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERPART', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERPART', { schema: 'SANKHYA' })
export class TserpartEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'NOMEPARTICIPANTE', nullable: true, length: 67 })
  nomeparticipante: string | null;

  @Column('varchar', { name: 'VINCULOPARTICIPANTE', nullable: true, length: 9 })
  vinculoparticipante: string | null;

  @Column('varchar', { name: 'CODEMBRATEL', nullable: true, length: 4 })
  codembratel: string | null;

  @Column('varchar', { name: 'MUNICIPIO', nullable: true, length: 30 })
  municipio: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @Column('varchar', { name: 'RESTRICAO', nullable: true, length: 1 })
  restricao: string | null;

  @Column('varchar', { name: 'CNPJCPF', nullable: true, length: 20 })
  cnpjcpf: string | null;

  @Column('varchar', { name: 'SEQCNPJ', nullable: true, length: 4 })
  seqcnpj: string | null;

  @Column('varchar', { name: 'DIGCNPJ', nullable: true, length: 2 })
  digcnpj: string | null;

  @Column('varchar', { name: 'TIPOPESSOA', nullable: true, length: 1 })
  tipopessoa: string | null;

  @Column('varchar', { name: 'SITUACAORF', nullable: true, length: 2 })
  situacaorf: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CNPJCPFPARTICIPADA', nullable: true, length: 20 })
  cnpjcpfparticipada: string | null;

  @Column('varchar', { name: 'EMPRESAPARTICIPADA', nullable: true, length: 67 })
  empresaparticipada: string | null;
}
