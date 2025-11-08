import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index('PK_TRIFEP', ['codemp', 'dtref', 'tpamb', 'sequencia'], { unique: true })
@Entity('TRIFEP', { schema: 'SANKHYA' })
export class TrifepEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'STATUSREG', length: 1 })
  statusreg: string;

  @Column('varchar', { name: 'IDEVENTO', nullable: true, length: 36 })
  idevento: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 52 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBOANT', nullable: true, length: 52 })
  nroreciboant: string | null;

  @Column('smallint', { name: 'TPINSC' })
  tpinsc: number;

  @Column('varchar', { name: 'NRINSC', length: 14 })
  nrinsc: string;

  @Column('varchar', { name: 'NMRESP', length: 70 })
  nmresp: string;

  @Column('varchar', { name: 'CPFRESP', length: 11 })
  cpfresp: string;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 60 })
  email: string | null;

  @Column('char', { name: 'EVTSERVTM', length: 1, default: () => "'N'" })
  evtservtm: string;

  @Column('char', { name: 'EVTSERVPR', length: 1, default: () => "'N'" })
  evtservpr: string;

  @Column('char', { name: 'EVTASSDESPREC', length: 1, default: () => "'N'" })
  evtassdesprec: string;

  @Column('char', { name: 'EVTASSDESPREP', length: 1, default: () => "'N'" })
  evtassdesprep: string;

  @Column('char', { name: 'EVTCOMPROD', length: 1, default: () => "'N'" })
  evtcomprod: string;

  @Column('char', { name: 'EVTCPRB', length: 1, default: () => "'N'" })
  evtcprb: string;

  @Column('char', { name: 'EVTPGTOS', length: 1, default: () => "'N'" })
  evtpgtos: string;

  @Column('datetime', { name: 'COMPSEMMOVTO', nullable: true })
  compsemmovto: Date | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('text', { name: 'XMLCONSULTA', nullable: true })
  xmlconsulta: string | null;

  @Column('text', { name: 'XMLRETORNOCONSULTA', nullable: true })
  xmlretornoconsulta: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('char', { name: 'EVTAQUIS', length: 1, default: () => "'N'" })
  evtaquis: string;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.trifeps)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
