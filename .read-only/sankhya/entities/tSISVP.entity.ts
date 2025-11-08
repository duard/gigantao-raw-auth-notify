import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSISVP', ['nusvp'], { unique: true })
@Entity('TSISVP', { schema: 'SANKHYA' })
export class TsisvpEntity {
  @Column('int', { primary: true, name: 'NUSVP' })
  nusvp: number;

  @Column('varchar', { name: 'URL', length: 100 })
  url: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 120 })
  descricao: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @Column('smallint', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'PORTA' })
  porta: number;
}
