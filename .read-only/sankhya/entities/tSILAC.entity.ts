import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSILAC', ['dhacesso', 'usuario', 'sid'], { unique: true })
@Index('TSILAC_I01', ['ip'], {})
@Entity('TSILAC', { schema: 'SANKHYA' })
export class TsilacEntity {
  @Column('datetime', { primary: true, name: 'DHACESSO' })
  dhacesso: Date;

  @Column('char', { primary: true, name: 'USUARIO', length: 30 })
  usuario: string;

  @Column('char', { name: 'HOSTNAME', nullable: true, length: 200 })
  hostname: string | null;

  @Column('int', { primary: true, name: 'SID' })
  sid: number;

  @Column('char', { name: 'IP', nullable: true, length: 30 })
  ip: string | null;

  @Column('char', { name: 'TERMINAL', nullable: true, length: 200 })
  terminal: string | null;

  @Column('char', { name: 'MODULO', length: 100 })
  modulo: string;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    name: 'SUCESSO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  sucesso: string | null;

  @Column('varchar', { name: 'VERSAOEXE', nullable: true, length: 40 })
  versaoexe: string | null;

  @Column('varchar', { name: 'PROGRAMA', nullable: true, length: 60 })
  programa: string | null;
}
