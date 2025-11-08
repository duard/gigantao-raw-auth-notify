import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFCOM',
  [
    'codvend',
    'nufinorig',
    'nunotaorig',
    'nufin',
    'numosorig',
    'numitemorig',
    'tipo',
    'codform',
  ],
  { unique: true },
)
@Index('TGFCOM_I01', ['nufin'], {})
@Index('TGFCOM_I02', ['nufinorig'], {})
@Index('TGFCOM_I03', ['numosorig', 'numitemorig'], {})
@Index('TGFCOM_I05', ['codvend', 'nunotaorig', 'tipo'], {})
@Index('TGFCOM_I6', ['nufechamento'], {})
@Entity('TGFCOM', { schema: 'SANKHYA' })
export class TgfcomEntity {
  @Column('smallint', { primary: true, name: 'CODVEND', default: () => '(0)' })
  codvend: number;

  @Column('int', { primary: true, name: 'NUFINORIG', default: () => '(0)' })
  nufinorig: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG', default: () => '(0)' })
  nunotaorig: number;

  @Column('int', { primary: true, name: 'NUFIN', default: () => '(0)' })
  nufin: number;

  @Column('float', {
    name: 'VLRCOM',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcom: number | null;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('smallint', { name: 'CODEVENTO', nullable: true })
  codevento: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('int', { primary: true, name: 'NUMOSORIG', default: () => '(0)' })
  numosorig: number;

  @Column('smallint', {
    primary: true,
    name: 'NUMITEMORIG',
    default: () => '(0)',
  })
  numitemorig: number;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'O'",
  })
  tipo: string;

  @Column('float', { name: 'VLRHORA', nullable: true, precision: 53 })
  vlrhora: number | null;

  @Column('int', { name: 'QTDHORA', nullable: true })
  qtdhora: number | null;

  @Column('float', { name: 'VLRHORAEXTRA', nullable: true, precision: 53 })
  vlrhoraextra: number | null;

  @Column('int', { name: 'QTDHORAEXTRA', nullable: true })
  qtdhoraextra: number | null;

  @Column('float', {
    name: 'INDICEPRODUTIVIDADE',
    nullable: true,
    precision: 53,
  })
  indiceprodutividade: number | null;

  @Column('smallint', { primary: true, name: 'CODFORM', default: () => '(0)' })
  codform: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'NUFECHAMENTO', default: () => '(0)' })
  nufechamento: number;

  @Column('float', {
    name: 'VLRRESIDUOCOM',
    precision: 53,
    default: () => '(0)',
  })
  vlrresiduocom: number;
}
