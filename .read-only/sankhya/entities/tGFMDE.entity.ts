import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFMDE',
  [
    'numcotacao',
    'sequencia',
    'codprod',
    'codparc',
    'controle',
    'codlocal',
    'cabecalho',
    'diferenciador',
  ],
  { unique: true },
)
@Entity('TGFMDE', { schema: 'SANKHYA' })
export class TgfmdeEntity {
  @Column('int', { primary: true, name: 'NUMCOTACAO' })
  numcotacao: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "''",
  })
  controle: string;

  @Column('varchar', {
    primary: true,
    name: 'CABECALHO',
    length: 1,
    default: () => "'N'",
  })
  cabecalho: string;

  @Column('smallint', {
    primary: true,
    name: 'DIFERENCIADOR',
    default: () => '(0)',
  })
  diferenciador: number;

  @Column('datetime', { name: 'DATAENTREGA', nullable: true })
  dataentrega: Date | null;

  @Column('float', { name: 'QTDENTREGA', nullable: true, precision: 53 })
  qtdentrega: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;
}
