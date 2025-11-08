import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERATV', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERATV', { schema: 'SANKHYA' })
export class TseratvEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'OCUPACAO', nullable: true, length: 10 })
  ocupacao: string | null;

  @Column('smallint', { name: 'PARTIC', nullable: true })
  partic: number | null;

  @Column('float', { name: 'RENDA', nullable: true, precision: 53 })
  renda: number | null;

  @Column('varchar', { name: 'EMPRESA', nullable: true, length: 40 })
  empresa: string | null;

  @Column('varchar', { name: 'NUMCNPJ', nullable: true, length: 14 })
  numcnpj: string | null;

  @Column('datetime', { name: 'DTADMISSAO', nullable: true })
  dtadmissao: Date | null;

  @Column('varchar', { name: 'CARGO', nullable: true, length: 20 })
  cargo: string | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 45 })
  endereco: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 20 })
  bairro: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 25 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('smallint', { name: 'CEP', nullable: true })
  cep: number | null;

  @Column('smallint', { name: 'DDD', nullable: true })
  ddd: number | null;

  @Column('int', { name: 'TELEFONE', nullable: true })
  telefone: number | null;
}
