import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC0140', ['codemp', 'dtref', 'regniv1', 'codempestab'], {
  unique: true,
})
@Entity('TGFEFDC0140', { schema: 'SANKHYA' })
export class Tgfefdc0140Entity {
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

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0140'" })
  registro: string;

  @Column('varchar', { name: 'COD_EST', nullable: true, length: 60 })
  codEst: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'IE', nullable: true, length: 14 })
  ie: string | null;

  @Column('int', { name: 'COD_MUN', nullable: true })
  codMun: number | null;

  @Column('varchar', { name: 'IM', nullable: true, length: 255 })
  im: string | null;

  @Column('varchar', { name: 'SUFRAMA', nullable: true, length: 9 })
  suframa: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
