import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSEROUTRBENS', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSEROUTRBENS', { schema: 'SANKHYA' })
export class TseroutrbensEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'OUTRBEM', nullable: true, length: 60 })
  outrbem: string | null;
}
