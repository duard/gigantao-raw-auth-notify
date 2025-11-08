import { Column, Entity, Index, OneToMany } from 'typeorm';
import { EvtfilaEntity } from './eVTFILA.entity';

@Index('PK_EVTLOTE', ['nulote'], { unique: true })
@Entity('EVTLOTE', { schema: 'SANKHYA' })
export class EvtloteEntity {
  @Column('datetime', { name: 'DHINC', default: () => 'getdate()' })
  dhinc: Date;

  @Column('text', { name: 'XMLENVLOTE', nullable: true })
  xmlenvlote: string | null;

  @Column('text', { name: 'XMLRETLOTE', nullable: true })
  xmlretlote: string | null;

  @Column('varchar', { name: 'NROPROTLOTE', nullable: true, length: 100 })
  nroprotlote: string | null;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'I'" })
  status: string;

  @Column('datetime', { name: 'DHPREVCONSULTA', nullable: true })
  dhprevconsulta: Date | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('smallint', { name: 'TPAMB', default: () => '(2)' })
  tpamb: number;

  @Column('int', { primary: true, name: 'NULOTE' })
  nulote: number;

  @OneToMany(() => EvtfilaEntity, (evtfilaEntity) => evtfilaEntity.nulote2)
  evtfilas: EvtfilaEntity[];
}
