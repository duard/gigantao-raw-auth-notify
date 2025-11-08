import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRELFORN', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRELFORN', { schema: 'SANKHYA' })
export class TserrelfornEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'DESCRPERIODO', nullable: true, length: 14 })
  descrperiodo: string | null;

  @Column('smallint', { name: 'QUANTIDADE', nullable: true })
  quantidade: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
