import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0005', ['codemp', 'dtref', 'regniv1', 'registro'], {
  unique: true,
})
@Entity('TGFEFDF0005', { schema: 'SANKHYA' })
export class Tgfefdf0005Entity {
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
    default: () => "'0005'",
  })
  registro: string;

  @Column('varchar', { name: 'FANTASIA', nullable: true, length: 60 })
  fantasia: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 60 })
  endereco: string | null;

  @Column('varchar', { name: 'NUMERO', nullable: true, length: 10 })
  numero: string | null;

  @Column('varchar', { name: 'COMPL', nullable: true, length: 60 })
  compl: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('varchar', { name: 'FONE', nullable: true, length: 11 })
  fone: string | null;

  @Column('varchar', { name: 'FAX', nullable: true, length: 11 })
  fax: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 50 })
  email: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
