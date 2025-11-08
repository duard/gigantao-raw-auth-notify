import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPS5001_INFOCPCALC',
  ['dtref', 'codempmatriz', 'cpf', 'indapuracao', 'tpcr'],
  {
    unique: true,
  },
)
@Entity('TFPS5001_INFOCPCALC', { schema: 'SANKHYA' })
export class Tfps5001InfocpcalcEntity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('int', { primary: true, name: 'TPCR' })
  tpcr: number;

  @Column('float', { name: 'VRCPSEG', nullable: true, precision: 53 })
  vrcpseg: number | null;

  @Column('float', { name: 'VRDESCSEG', nullable: true, precision: 53 })
  vrdescseg: number | null;

  @Column('smallint', {
    primary: true,
    name: 'INDAPURACAO',
    default: () => '(1)',
  })
  indapuracao: number;
}
