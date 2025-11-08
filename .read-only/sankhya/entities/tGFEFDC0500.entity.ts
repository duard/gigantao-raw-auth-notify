import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC0500', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDC0500', { schema: 'SANKHYA' })
export class Tgfefdc0500Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0500'" })
  registro: string;

  @Column('datetime', { name: 'DT_ALT', nullable: true })
  dtAlt: Date | null;

  @Column('varchar', { name: 'COD_NAT_CC', nullable: true, length: 2 })
  codNatCc: string | null;

  @Column('varchar', { name: 'IND_CTA', nullable: true, length: 1 })
  indCta: string | null;

  @Column('int', { name: 'NIVEL', nullable: true })
  nivel: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('varchar', { name: 'NOME_CTA', nullable: true, length: 60 })
  nomeCta: string | null;

  @Column('varchar', { name: 'COD_CTA_REF', nullable: true, length: 60 })
  codCtaRef: string | null;

  @Column('varchar', { name: 'CNPJ_EST', nullable: true, length: 14 })
  cnpjEst: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
