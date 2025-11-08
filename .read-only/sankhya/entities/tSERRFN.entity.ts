import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRFN', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRFN', { schema: 'SANKHYA' })
export class TserrfnEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 14 })
  descricao: string | null;

  @Column('datetime', { name: 'DTPOTENCIAL', nullable: true })
  dtpotencial: Date | null;

  @Column('float', { name: 'VALORPOTENCIAL', nullable: true, precision: 53 })
  valorpotencial: number | null;

  @Column('float', { name: 'MEDIAPOTENCIAL', nullable: true, precision: 53 })
  mediapotencial: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
