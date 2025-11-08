import { Column, Entity, Index } from 'typeorm';

@Index('PK_EVENTOLOTE', ['nulote'], { unique: true })
@Entity('EVENTOLOTE', { schema: 'SANKHYA' })
export class EventoloteEntity {
  @Column('int', { primary: true, name: 'NULOTE' })
  nulote: number;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('datetime', { name: 'DHPREVCONSULTA', nullable: true })
  dhprevconsulta: Date | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('varchar', { name: 'NROPROTLOTE', nullable: true, length: 255 })
  nroprotlote: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('int', { name: 'TPAMB', nullable: true })
  tpamb: number | null;

  @Column('text', { name: 'XMLENVLOTE', nullable: true })
  xmlenvlote: string | null;

  @Column('text', { name: 'XMLRETLOTE', nullable: true })
  xmlretlote: string | null;
}
