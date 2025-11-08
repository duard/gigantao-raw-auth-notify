import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSICSB', ['md5', 'data'], { unique: true })
@Entity('TSICSB', { schema: 'SANKHYA' })
export class TsicsbEntity {
  @Column('varchar', { primary: true, name: 'MD5', length: 32 })
  md5: string;

  @Column('datetime', { primary: true, name: 'DATA' })
  data: Date;

  @Column('image', { name: 'COMANDO', nullable: true })
  comando: Buffer | null;

  @Column('varchar', { name: 'TIPOCOMANDO', nullable: true, length: 1 })
  tipocomando: string | null;

  @Column('int', { name: 'SID', nullable: true })
  sid: number | null;

  @Column('varchar', { name: 'UNIQUEID', nullable: true, length: 255 })
  uniqueid: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 255 })
  origem: string | null;

  @Column('varchar', { name: 'NMEXECUTOR', nullable: true, length: 255 })
  nmexecutor: string | null;

  @Column('varchar', { name: 'DBUSERNAME', nullable: true, length: 255 })
  dbusername: string | null;

  @Column('varchar', { name: 'NMTHREAD', nullable: true, length: 255 })
  nmthread: string | null;

  @Column('varchar', { name: 'TOKEN', nullable: true, length: 255 })
  token: string | null;

  @Column('image', { name: 'STACKTRACE', nullable: true })
  stacktrace: Buffer | null;

  @Column('numeric', {
    name: 'QTDVEZES',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  qtdvezes: number | null;

  @Column('float', { name: 'MAIORTEMPO', nullable: true, precision: 53 })
  maiortempo: number | null;

  @Column('float', { name: 'MENORTEMPO', nullable: true, precision: 53 })
  menortempo: number | null;

  @Column('float', { name: 'MEDIA', nullable: true, precision: 53 })
  media: number | null;

  @Column('float', {
    name: 'MEDIASEMMAIORMENORTEMPO',
    nullable: true,
    precision: 53,
  })
  mediasemmaiormenortempo: number | null;

  @Column('float', { name: 'TOTALIZADORTEMPO', nullable: true, precision: 53 })
  totalizadortempo: number | null;

  @Column('float', { name: 'SCORE', nullable: true, precision: 53 })
  score: number | null;

  @Column('datetime', { name: 'DTCOMMAND', nullable: true })
  dtcommand: Date | null;

  @Column('numeric', {
    name: 'USERID',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  userid: number | null;

  @Column('varchar', { name: 'CALLID', nullable: true, length: 200 })
  callid: string | null;
}
