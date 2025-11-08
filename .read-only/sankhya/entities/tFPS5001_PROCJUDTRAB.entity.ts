import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPS5001_PROCJUDTRAB',
  ['dtref', 'codempmatriz', 'cpf', 'indapuracao', 'nrprocjud'],
  {
    unique: true,
  },
)
@Entity('TFPS5001_PROCJUDTRAB', { schema: 'SANKHYA' })
export class Tfps5001ProcjudtrabEntity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { primary: true, name: 'NRPROCJUD', length: 20 })
  nrprocjud: string;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('smallint', {
    primary: true,
    name: 'INDAPURACAO',
    default: () => '(1)',
  })
  indapuracao: number;
}
