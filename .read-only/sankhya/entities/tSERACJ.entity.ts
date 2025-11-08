import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERACJ', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERACJ', { schema: 'SANKHYA' })
export class TseracjEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { name: 'QTDACOES', nullable: true })
  qtdacoes: number | null;

  @Column('datetime', { name: 'DATAACAO', nullable: true })
  dataacao: Date | null;

  @Column('varchar', { name: 'NATUREZA', nullable: true, length: 20 })
  natureza: string | null;

  @Column('varchar', { name: 'AVALISTA', nullable: true, length: 1 })
  avalista: string | null;

  @Column('varchar', { name: 'MOEDA', nullable: true, length: 3 })
  moeda: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('smallint', { name: 'DISTRITO', nullable: true })
  distrito: number | null;

  @Column('varchar', { name: 'VARA', nullable: true, length: 4 })
  vara: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 30 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'MSGSUBJUDICE', nullable: true, length: 32 })
  msgsubjudice: string | null;

  @Column('varchar', { name: 'PRACASUBJUDICE', nullable: true, length: 4 })
  pracasubjudice: string | null;

  @Column('varchar', { name: 'DISTRITOSUBJUDICE', nullable: true, length: 2 })
  distritosubjudice: string | null;

  @Column('varchar', { name: 'VARASUBJUDICE', nullable: true, length: 2 })
  varasubjudice: string | null;

  @Column('datetime', { name: 'DATASUBJUDICE', nullable: true })
  datasubjudice: Date | null;

  @Column('varchar', { name: 'PROCESSOSUBJUDICE', nullable: true, length: 16 })
  processosubjudice: string | null;

  @Column('varchar', { name: 'CODNATUREZA', nullable: true, length: 3 })
  codnatureza: string | null;

  @Column('varchar', { name: 'MSGSUBJUDICE2', nullable: true, length: 76 })
  msgsubjudice2: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CIDUFACAO', nullable: true, length: 50 })
  cidufacao: string | null;

  @Column('float', { name: 'VALORTOTAL', nullable: true, precision: 53 })
  valortotal: number | null;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 18 })
  cpfcnpj: string | null;

  @Column('float', { name: 'VALORGERAL', nullable: true, precision: 53 })
  valorgeral: number | null;
}
