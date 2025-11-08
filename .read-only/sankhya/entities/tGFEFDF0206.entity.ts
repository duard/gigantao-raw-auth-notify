import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF0206',
  ['codemp', 'dtref', 'regniv1', 'codprod', 'registro'],
  { unique: true },
)
@Entity('TGFEFDF0206', { schema: 'SANKHYA' })
export class Tgfefdf0206Entity {
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

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0206'",
  })
  registro: string;

  @Column('varchar', { name: 'COD_COMB', nullable: true, length: 100 })
  codComb: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
