import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERHPQS', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERHPQS', { schema: 'SANKHYA' })
export class TserhpqsEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'MES', nullable: true })
  mes: Date | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 20 })
  descricao: string | null;

  @Column('varchar', { name: 'CODFAIXA', nullable: true, length: 5 })
  codfaixa: string | null;

  @Column('varchar', { name: 'DESCRFAIXA', nullable: true, length: 20 })
  descrfaixa: string | null;

  @Column('varchar', { name: 'PERCFAIXA', nullable: true, length: 20 })
  percfaixa: string | null;

  @Column('float', { name: 'QTDFONTESHISTPAG', nullable: true, precision: 53 })
  qtdfonteshistpag: number | null;
}
