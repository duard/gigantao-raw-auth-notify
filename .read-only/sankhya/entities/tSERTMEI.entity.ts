import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERTMEI', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERTMEI', { schema: 'SANKHYA' })
export class TsertmeiEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 20 })
  descricao: string | null;

  @Column('varchar', { name: 'CODFAIXA', nullable: true, length: 5 })
  codfaixa: string | null;

  @Column('varchar', { name: 'DESCRFAIXA', nullable: true, length: 20 })
  descrfaixa: string | null;

  @Column('varchar', { name: 'CODMEDFAIXA', nullable: true, length: 5 })
  codmedfaixa: string | null;

  @Column('varchar', { name: 'DESCRMEDFAIXA', nullable: true, length: 20 })
  descrmedfaixa: string | null;

  @Column('varchar', { name: 'PERCFAIXA', nullable: true, length: 20 })
  percfaixa: string | null;
}
