import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF0305',
  ['codemp', 'dtref', 'regniv1', 'codprod', 'codIndBem', 'registro'],
  {
    unique: true,
  },
)
@Entity('TGFEFDF0305', { schema: 'SANKHYA' })
export class Tgfefdf0305Entity {
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

  @Column('varchar', { primary: true, name: 'COD_IND_BEM', length: 60 })
  codIndBem: string;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0305'",
  })
  registro: string;

  @Column('varchar', { name: 'COD_CCUS', nullable: true, length: 60 })
  codCcus: string | null;

  @Column('varchar', { name: 'FUNC', nullable: true, length: 255 })
  func: string | null;

  @Column('int', { name: 'VIDA_UTIL', nullable: true })
  vidaUtil: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
