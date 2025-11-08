import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC0100', ['codemp', 'dtref', 'regniv1', 'cpf'], {
  unique: true,
})
@Entity('TGFEFDC0100', { schema: 'SANKHYA' })
export class Tgfefdc0100Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0100'" })
  registro: string;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'CRC', nullable: true, length: 15 })
  crc: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'ENDE', nullable: true, length: 60 })
  ende: string | null;

  @Column('varchar', { name: 'NUM', nullable: true, length: 6 })
  num: string | null;

  @Column('varchar', { name: 'COMPL', nullable: true, length: 60 })
  compl: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('varchar', { name: 'FONE', nullable: true, length: 13 })
  fone: string | null;

  @Column('varchar', { name: 'FAX', nullable: true, length: 13 })
  fax: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 255 })
  email: string | null;

  @Column('int', { name: 'COD_MUN', nullable: true })
  codMun: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;
}
