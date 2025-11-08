import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0150', ['codemp', 'dtref', 'regniv1', 'codparc'], {
  unique: true,
})
@Entity('TGFEFDF0150', { schema: 'SANKHYA' })
export class Tgfefdf0150Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'0001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0150'" })
  registro: string;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('int', { name: 'COD_PAIS', nullable: true })
  codPais: number | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'IE', nullable: true, length: 16 })
  ie: string | null;

  @Column('int', { name: 'COD_MUN', nullable: true })
  codMun: number | null;

  @Column('varchar', { name: 'SUFRAMA', nullable: true, length: 9 })
  suframa: string | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 60 })
  endereco: string | null;

  @Column('varchar', { name: 'NUM', nullable: true, length: 10 })
  num: string | null;

  @Column('varchar', { name: 'COMPL', nullable: true, length: 60 })
  compl: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
