import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDC0206',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codprod', 'registro'],
  {
    unique: true,
  },
)
@Entity('TGFEFDC0206', { schema: 'SANKHYA' })
export class Tgfefdc0206Entity {
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

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0206'",
  })
  registro: string;

  @Column('varchar', { name: 'COD_COMB', length: 255 })
  codComb: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
