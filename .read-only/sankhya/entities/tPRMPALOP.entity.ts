import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TPRMPALOP',
  [
    'nulop',
    'seqop',
    'codprodpa',
    'controlepa',
    'codprodmp',
    'controlemp',
    'codprodmpalt',
    'controlempalt',
  ],
  { unique: true },
)
@Entity('TPRMPALOP', { schema: 'SANKHYA' })
export class TprmpalopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('int', { primary: true, name: 'SEQOP' })
  seqop: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { primary: true, name: 'CONTROLEPA', length: 10 })
  controlepa: string;

  @Column('int', { primary: true, name: 'CODPRODMP' })
  codprodmp: number;

  @Column('varchar', { primary: true, name: 'CONTROLEMP', length: 10 })
  controlemp: string;

  @Column('int', { primary: true, name: 'CODPRODMPALT' })
  codprodmpalt: number;

  @Column('varchar', { primary: true, name: 'CONTROLEMPALT', length: 10 })
  controlempalt: string;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('float', { name: 'QTDMISTURA', precision: 53, default: () => '(0)' })
  qtdmistura: number;

  @Column('int', { name: 'SEQMPA', nullable: true })
  seqmpa: number | null;
}
