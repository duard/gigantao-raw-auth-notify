import { Column, Entity, Index, OneToMany } from 'typeorm';
import { EvtfilareinfEntity } from './eVTFILAREINF.entity';

@Index('PK_EVTLOTEREINF', ['nulote'], { unique: true })
@Entity('EVTLOTEREINF', { schema: 'SANKHYA' })
export class EvtlotereinfEntity {
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

  @Column('int', { primary: true, name: 'NULOTE' })
  nulote: number;

  @Column('smallint', {
    name: 'QTDCONSULTAREALIZADA',
    nullable: true,
    default: () => '(0)',
  })
  qtdconsultarealizada: number | null;

  @Column('smallint', { name: 'TPAMB', nullable: true })
  tpamb: number | null;

  @OneToMany(
    () => EvtfilareinfEntity,
    (evtfilareinfEntity) => evtfilareinfEntity.nulote,
  )
  evtfilareinfs: EvtfilareinfEntity[];
}
