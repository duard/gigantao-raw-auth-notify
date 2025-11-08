import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRBCO', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRBCO', { schema: 'SANKHYA' })
export class TserrbcoEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTABERTURA', nullable: true })
  dtabertura: Date | null;

  @Column('varchar', { name: 'BANCO', nullable: true, length: 20 })
  banco: string | null;

  @Column('smallint', { name: 'AGENCIA', nullable: true })
  agencia: number | null;

  @Column('smallint', { name: 'CONTA', nullable: true })
  conta: number | null;

  @Column('smallint', { name: 'DDD', nullable: true })
  ddd: number | null;

  @Column('smallint', { name: 'TELEFONE', nullable: true })
  telefone: number | null;

  @Column('smallint', { name: 'RAMAL', nullable: true })
  ramal: number | null;
}
