import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFE200', ['codemp', 'dtref', 'regniv1', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFE200', { schema: 'SANKHYA' })
export class Tgfefdfe200Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'E001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E200'" })
  registro: string;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('datetime', { name: 'DT_INI' })
  dtIni: Date;

  @Column('datetime', { name: 'DT_FIN', nullable: true })
  dtFin: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
