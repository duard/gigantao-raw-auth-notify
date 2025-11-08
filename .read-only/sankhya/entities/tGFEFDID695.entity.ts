import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDID695', ['codemp', 'dtref', 'registro', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDID695', { schema: 'SANKHYA' })
export class Tgfefdid695Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'REGISTRO', length: 4 })
  registro: string;

  @Column('varchar', { name: 'CODMOD', length: 2 })
  codmod: string;

  @Column('varchar', { name: 'SER', length: 4 })
  ser: string;

  @Column('int', { name: 'NROORDINI' })
  nroordini: number;

  @Column('int', { name: 'NROORDFIN' })
  nroordfin: number;

  @Column('datetime', { name: 'DTDOCINI' })
  dtdocini: Date;

  @Column('datetime', { name: 'DTDOCFIN' })
  dtdocfin: Date;

  @Column('varchar', { name: 'NOMMEST', nullable: true, length: 38 })
  nommest: string | null;

  @Column('varchar', { name: 'CHVCODDIG', length: 32 })
  chvcoddig: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
