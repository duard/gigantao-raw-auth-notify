import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERANTEC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERANTEC', { schema: 'SANKHYA' })
export class TserantecEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'RAZAOANTEC', nullable: true, length: 70 })
  razaoantec: string | null;

  @Column('datetime', { name: 'DTMTANTEC', nullable: true })
  dtmtantec: Date | null;
}
