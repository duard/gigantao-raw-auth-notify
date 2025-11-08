import { Column, Entity, Index } from 'typeorm';

@Index('PK_TRIFEREP', ['codemp', 'dtref', 'tpamb', 'sequencia', 'fechret'], {
  unique: true,
})
@Entity('TRIFEREP', { schema: 'SANKHYA' })
export class TriferepEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'STATUSREG', length: 1 })
  statusreg: string;

  @Column('varchar', { name: 'IDEVENTO', nullable: true, length: 36 })
  idevento: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 52 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBOANT', nullable: true, length: 52 })
  nroreciboant: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'NMRESP', nullable: true, length: 70 })
  nmresp: string | null;

  @Column('varchar', { name: 'CPFRESP', nullable: true, length: 11 })
  cpfresp: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 60 })
  email: string | null;

  @Column('datetime', { name: 'COMPSEMMOVTO', nullable: true })
  compsemmovto: Date | null;

  @Column('smallint', { primary: true, name: 'FECHRET' })
  fechret: number;

  @Column('varchar', { name: 'EVTPPF', nullable: true, length: 1 })
  evtppf: string | null;

  @Column('varchar', { name: 'EVTPPJ', nullable: true, length: 1 })
  evtppj: string | null;

  @Column('varchar', { name: 'EVTPNI', nullable: true, length: 1 })
  evtpni: string | null;

  @Column('varchar', { name: 'EVTRRC', nullable: true, length: 1 })
  evtrrc: string | null;

  @Column('varchar', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('varchar', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('varchar', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('varchar', { name: 'XMLCONSULTA', nullable: true })
  xmlconsulta: string | null;
}
