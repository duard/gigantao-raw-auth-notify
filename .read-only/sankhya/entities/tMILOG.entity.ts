import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMILOG', ['numet', 'codexe', 'dhultexec'], { unique: true })
@Entity('TMILOG', { schema: 'SANKHYA' })
export class TmilogEntity {
  @Column('smallint', { primary: true, name: 'NUMET' })
  numet: number;

  @Column('smallint', { primary: true, name: 'CODEXE' })
  codexe: number;

  @Column('datetime', { primary: true, name: 'DHULTEXEC' })
  dhultexec: Date;

  @Column('char', { name: 'SITULTATUAL', nullable: true, length: 1 })
  situltatual: string | null;

  @Column('int', { name: 'TEMPOTOTAL', nullable: true })
  tempototal: number | null;

  @Column('char', { name: 'TIPOATUAL', nullable: true, length: 1 })
  tipoatual: string | null;

  @Column('text', { name: 'LOG', nullable: true })
  log: string | null;

  @Column('int', { name: 'TEMPOREAL', nullable: true })
  temporeal: number | null;

  @Column('int', { name: 'TEMPOPREV', nullable: true })
  tempoprev: number | null;

  @Column('int', { name: 'TEMPOREALACUM', nullable: true })
  temporealacum: number | null;

  @Column('int', { name: 'TEMPOPREVACUM', nullable: true })
  tempoprevacum: number | null;
}
