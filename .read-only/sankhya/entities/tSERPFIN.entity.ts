import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERPFIN', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERPFIN', { schema: 'SANKHYA' })
export class TserpfinEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('smallint', { name: 'QTDPENDENCIA', nullable: true })
  qtdpendencia: number | null;

  @Column('smallint', { name: 'QTDULTOCOR', nullable: true })
  qtdultocor: number | null;

  @Column('datetime', { name: 'DTOCORRENCIA', nullable: true })
  dtocorrencia: Date | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 12 })
  descricao: string | null;

  @Column('varchar', { name: 'AVALISTA', nullable: true, length: 1 })
  avalista: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'CONTRATO', nullable: true, length: 16 })
  contrato: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 20 })
  origem: string | null;

  @Column('varchar', { name: 'FILIAL', nullable: true, length: 4 })
  filial: string | null;

  @Column('varchar', { name: 'MSGSUBJUDICE', nullable: true, length: 32 })
  msgsubjudice: string | null;

  @Column('varchar', { name: 'PRACA', nullable: true, length: 4 })
  praca: string | null;

  @Column('varchar', { name: 'DISTRITO', nullable: true, length: 2 })
  distrito: string | null;

  @Column('varchar', { name: 'VARA', nullable: true, length: 2 })
  vara: string | null;

  @Column('datetime', { name: 'DATASUBJUDICE', nullable: true })
  datasubjudice: Date | null;

  @Column('varchar', { name: 'PROCESSO', nullable: true, length: 16 })
  processo: string | null;

  @Column('varchar', { name: 'NATUREZA', nullable: true, length: 3 })
  natureza: string | null;

  @Column('varchar', { name: 'MSGSUBJUDICE2', nullable: true, length: 76 })
  msgsubjudice2: string | null;

  @Column('float', { name: 'VALORTOTAL', nullable: true, precision: 53 })
  valortotal: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 18 })
  cpfcnpj: string | null;
}
