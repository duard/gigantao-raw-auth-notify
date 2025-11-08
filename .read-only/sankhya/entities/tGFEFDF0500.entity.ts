import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0500', ['codemp', 'dtref', 'regniv1', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDF0500', { schema: 'SANKHYA' })
export class Tgfefdf0500Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0500'" })
  registro: string;

  @Column('datetime', { name: 'DT_ALT' })
  dtAlt: Date;

  @Column('varchar', { name: 'COD_NAT_CC', nullable: true, length: 2 })
  codNatCc: string | null;

  @Column('varchar', { name: 'IND_CTA', nullable: true, length: 1 })
  indCta: string | null;

  @Column('int', { name: 'NIVEL', nullable: true })
  nivel: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 60 })
  codCta: string | null;

  @Column('varchar', { name: 'NOME_CTA', nullable: true, length: 60 })
  nomeCta: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
