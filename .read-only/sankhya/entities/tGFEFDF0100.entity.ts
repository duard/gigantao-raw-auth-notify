import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0100', ['codemp', 'dtref', 'regniv1', 'registro'], {
  unique: true,
})
@Entity('TGFEFDF0100', { schema: 'SANKHYA' })
export class Tgfefdf0100Entity {
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

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0100'",
  })
  registro: string;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'CRC', nullable: true, length: 15 })
  crc: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 60 })
  endereco: string | null;

  @Column('varchar', { name: 'NUM', nullable: true, length: 10 })
  num: string | null;

  @Column('varchar', { name: 'COMPL', nullable: true, length: 60 })
  compl: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('varchar', { name: 'FONE', nullable: true, length: 11 })
  fone: string | null;

  @Column('varchar', { name: 'FAX', nullable: true, length: 11 })
  fax: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 100 })
  email: string | null;

  @Column('int', { name: 'COD_MUN', nullable: true })
  codMun: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
