import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERQRS', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERQRS', { schema: 'SANKHYA' })
export class TserqrsEntity {
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

  @Column('varchar', { name: 'SOCIOS', nullable: true, length: 65 })
  socios: string | null;

  @Column('varchar', { name: 'NACIONALIDADE', nullable: true, length: 12 })
  nacionalidade: string | null;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @Column('datetime', { name: 'DHADMISSAO', nullable: true })
  dhadmissao: Date | null;

  @Column('varchar', { name: 'RESTRICAOSOCIO', nullable: true, length: 1 })
  restricaosocio: string | null;

  @Column('float', { name: 'PERCENTUALVOTANTE', nullable: true, precision: 53 })
  percentualvotante: number | null;

  @Column('varchar', { name: 'SITUACAORF', nullable: true, length: 2 })
  situacaorf: string | null;

  @Column('varchar', { name: 'CODIGOSERASA', nullable: true, length: 7 })
  codigoserasa: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 20 })
  telefone: string | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 255 })
  endereco: string | null;

  @Column('datetime', { name: 'DTFUNDACAO', nullable: true })
  dtfundacao: Date | null;

  @Column('varchar', { name: 'VINCULO', nullable: true, length: 30 })
  vinculo: string | null;
}
