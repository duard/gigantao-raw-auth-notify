import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPS5001_CALCTERC',
  [
    'dtref',
    'codempmatriz',
    'cpf',
    'codemp',
    'codcateg',
    'matricula',
    'indsimples',
    'tpcr',
    'codlotacao',
    'indapuracao',
  ],
  { unique: true },
)
@Entity('TFPS5001_CALCTERC', { schema: 'SANKHYA' })
export class Tfps5001CalctercEntity {
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

  @Column('int', { primary: true, name: 'TPCR' })
  tpcr: number;

  @Column('float', { name: 'VRCSSEGTERC', nullable: true, precision: 53 })
  vrcssegterc: number | null;

  @Column('float', { name: 'VRDESCTERC', nullable: true, precision: 53 })
  vrdescterc: number | null;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 30 })
  codlotacao: string;

  @Column('smallint', {
    primary: true,
    name: 'INDAPURACAO',
    default: () => '(1)',
  })
  indapuracao: number;
}
