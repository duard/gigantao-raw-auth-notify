import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPS5001_INFOBASECS',
  [
    'dtref',
    'codempmatriz',
    'cpf',
    'indapuracao',
    'codemp',
    'codlotacao',
    'codcateg',
    'matricula',
    'indsimples',
    'ind13',
    'tpvalor',
  ],
  { unique: true },
)
@Entity('TFPS5001_INFOBASECS', { schema: 'SANKHYA' })
export class Tfps5001InfobasecsEntity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODCATEG' })
  codcateg: number;

  @Column('varchar', { primary: true, name: 'MATRICULA', length: 30 })
  matricula: string;

  @Column('smallint', { primary: true, name: 'INDSIMPLES' })
  indsimples: number;

  @Column('smallint', { primary: true, name: 'IND13' })
  ind13: number;

  @Column('smallint', { primary: true, name: 'TPVALOR' })
  tpvalor: number;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('smallint', {
    primary: true,
    name: 'INDAPURACAO',
    default: () => '(1)',
  })
  indapuracao: number;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 30 })
  codlotacao: string;
}
