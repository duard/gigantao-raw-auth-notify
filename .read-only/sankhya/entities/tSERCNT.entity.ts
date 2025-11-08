import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERCNT', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERCNT', { schema: 'SANKHYA' })
export class TsercntEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 15 })
  tipo: string | null;

  @Column('varchar', { name: 'NOMECONTA', nullable: true, length: 100 })
  nomeconta: string | null;

  @Column('float', { name: 'VLRCONTA', nullable: true, precision: 53 })
  vlrconta: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
