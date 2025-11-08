import { Column, Entity, Index } from 'typeorm';

@Index('PK_EVTLOTE_CONS', ['nulote', 'dhcons'], { unique: true })
@Entity('EVTLOTE_CONS', { schema: 'SANKHYA' })
export class EvtloteConsEntity {
  @Column('int', { primary: true, name: 'NULOTE' })
  nulote: number;

  @Column('datetime', {
    primary: true,
    name: 'DHCONS',
    default: () => 'getdate()',
  })
  dhcons: Date;

  @Column('varchar', { name: 'CODRESPOSTA', nullable: true, length: 8 })
  codresposta: string | null;

  @Column('varchar', { name: 'MSG', nullable: true, length: 255 })
  msg: string | null;
}
