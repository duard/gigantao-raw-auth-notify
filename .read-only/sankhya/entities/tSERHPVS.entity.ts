import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERHPVS', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERHPVS', { schema: 'SANKHYA' })
export class TserhpvsEntity {
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

  @Column('varchar', { name: 'PMAFAIXA', nullable: true, length: 20 })
  pmafaixa: string | null;
}
