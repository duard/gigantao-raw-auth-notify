import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCFCONF', ['chave'], { unique: true })
@Entity('TCFCONF', { schema: 'SANKHYA' })
export class TcfconfEntity {
  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('int', { name: 'CODTIPVENDAREQ', nullable: true })
  codtipvendareq: number | null;

  @Column('int', { name: 'CODTIPOPERREQ', nullable: true })
  codtipoperreq: number | null;

  @Column('int', { name: 'CODNATREQ', nullable: true })
  codnatreq: number | null;

  @Column('varchar', { name: 'ATUALIZAKMVEIOS', nullable: true, length: 10 })
  atualizakmveios: string | null;

  @Column('varchar', { name: 'ATUALIZAKMVEIABAST', nullable: true, length: 10 })
  atualizakmveiabast: string | null;

  @Column('varchar', { name: 'ATUALIZAKMVEIPORT', nullable: true, length: 10 })
  atualizakmveiport: string | null;

  @Column('varchar', { name: 'USAEMPCONTPNEU', nullable: true, length: 10 })
  usaempcontpneu: string | null;

  @Column('varchar', { name: 'TIPOKMBASE', nullable: true, length: 255 })
  tipokmbase: string | null;

  @Column('int', { name: 'CODTIPOPERMT', nullable: true })
  codtipopermt: number | null;

  @Column('int', { name: 'CODNATMT', nullable: true })
  codnatmt: number | null;

  @Column('varchar', { name: 'USAVARIASREQOS', nullable: true, length: 10 })
  usavariasreqos: string | null;

  @Column('int', { name: 'CODTIPOPERREQSERV', nullable: true })
  codtipoperreqserv: number | null;

  @Column('varchar', { name: 'CONFIRMAREQOS', nullable: true, length: 10 })
  confirmareqos: string | null;

  @Column('varchar', { name: 'USAVEICULOTERC', nullable: true, length: 10 })
  usaveiculoterc: string | null;

  @Column('varchar', { name: 'USAINCPNEUPERS', nullable: true, length: 10 })
  usaincpneupers: string | null;

  @Column('int', { name: 'HREXECPLAMAN', nullable: true })
  hrexecplaman: number | null;
}
