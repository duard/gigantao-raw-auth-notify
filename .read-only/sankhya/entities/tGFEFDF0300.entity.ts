import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF0300',
  ['codemp', 'dtref', 'regniv1', 'codprod', 'codIndBem'],
  { unique: true },
)
@Entity('TGFEFDF0300', { schema: 'SANKHYA' })
export class Tgfefdf0300Entity {
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

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0300'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'COD_IND_BEM', length: 60 })
  codIndBem: string;

  @Column('varchar', { name: 'IDENT_MERC', nullable: true, length: 1 })
  identMerc: string | null;

  @Column('varchar', { name: 'DESCR_ITEM', nullable: true, length: 255 })
  descrItem: string | null;

  @Column('varchar', { name: 'COD_PRNC', nullable: true, length: 60 })
  codPrnc: string | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 60 })
  codCta: string | null;

  @Column('int', { name: 'NR_PARC', nullable: true })
  nrParc: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
