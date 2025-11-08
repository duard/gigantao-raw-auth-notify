import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFESE',
  [
    'dtreferencia',
    'tipmov',
    'codprod',
    'codtipoper',
    'codemp',
    'codlocalorig',
    'controle',
    'codempcontpart',
    'atualestoque',
    'atualestterc',
  ],
  { unique: true },
)
@Index('TGFESE_I01', ['codprod', 'dtreferencia'], {})
@Entity('TGFESE', { schema: 'SANKHYA' })
export class TgfeseEntity {
  @Column('datetime', { primary: true, name: 'DTREFERENCIA' })
  dtreferencia: Date;

  @Column('varchar', { primary: true, name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCALORIG' })
  codlocalorig: number;

  @Column('varchar', { primary: true, name: 'CONTROLE', length: 25 })
  controle: string;

  @Column('smallint', { primary: true, name: 'ATUALESTOQUE' })
  atualestoque: number;

  @Column('varchar', { primary: true, name: 'ATUALESTTERC', length: 1 })
  atualestterc: string;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('float', { name: 'QTDENTRADAS', precision: 53 })
  qtdentradas: number;

  @Column('float', { name: 'QTDSAIDAS', precision: 53 })
  qtdsaidas: number;

  @Column('smallint', { primary: true, name: 'CODEMPCONTPART' })
  codempcontpart: number;
}
