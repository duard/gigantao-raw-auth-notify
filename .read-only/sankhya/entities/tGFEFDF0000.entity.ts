import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0000', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDF0000', { schema: 'SANKHYA' })
export class Tgfefdf0000Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0000'",
  })
  registro: string;

  @Column('int', { name: 'COD_VER', nullable: true })
  codVer: number | null;

  @Column('smallint', { name: 'COD_FIN', nullable: true })
  codFin: number | null;

  @Column('datetime', { name: 'DT_INI', nullable: true })
  dtIni: Date | null;

  @Column('datetime', { name: 'DT_FIN', nullable: true })
  dtFin: Date | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'IE', nullable: true, length: 14 })
  ie: string | null;

  @Column('int', { name: 'COD_MUN', nullable: true })
  codMun: number | null;

  @Column('varchar', { name: 'IM', nullable: true, length: 16 })
  im: string | null;

  @Column('varchar', { name: 'SUFRAMA', nullable: true, length: 9 })
  suframa: string | null;

  @Column('varchar', { name: 'IND_PERFIL', nullable: true, length: 1 })
  indPerfil: string | null;

  @Column('smallint', { name: 'IND_ATIV', nullable: true })
  indAtiv: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
