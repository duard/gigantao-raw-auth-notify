import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC0000', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDC0000', { schema: 'SANKHYA' })
export class Tgfefdc0000Entity {
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

  @Column('int', { name: 'TIPO_ESCRIT' })
  tipoEscrit: number;

  @Column('int', { name: 'IND_SIT_ESP', nullable: true })
  indSitEsp: number | null;

  @Column('varchar', { name: 'NUM_REC_ANTERIOR', nullable: true, length: 41 })
  numRecAnterior: string | null;

  @Column('datetime', { name: 'DT_INI', nullable: true })
  dtIni: Date | null;

  @Column('datetime', { name: 'DT_FIN', nullable: true })
  dtFin: Date | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('int', { name: 'COD_MUN', nullable: true })
  codMun: number | null;

  @Column('varchar', { name: 'SUFRAMA', nullable: true, length: 9 })
  suframa: string | null;

  @Column('varchar', { name: 'IND_NAT_PJ', nullable: true, length: 2 })
  indNatPj: string | null;

  @Column('int', { name: 'IND_ATIV', nullable: true })
  indAtiv: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
