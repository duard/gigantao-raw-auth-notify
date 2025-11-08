import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERIND', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERIND', { schema: 'SANKHYA' })
export class TserindEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'INDICE', nullable: true, length: 100 })
  indice: string | null;

  @Column('float', { name: 'EMPRESA', nullable: true, precision: 53 })
  empresa: number | null;

  @Column('float', { name: 'PADRAO', nullable: true, precision: 53 })
  padrao: number | null;

  @Column('varchar', { name: 'FORMA', nullable: true, length: 1 })
  forma: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
