import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCUSITE', ['nunota', 'sequencia', 'codprod'], { unique: true })
@Index(
  'TGFCUSITE_I01',
  ['dtatual', 'codemp', 'codprod', 'controle', 'codlocal'],
  {},
)
@Entity('TGFCUSITE', { schema: 'SANKHYA' })
export class TgfcusiteEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 20 })
  controle: string | null;

  @Column('datetime', { name: 'DTATUAL', nullable: true })
  dtatual: Date | null;

  @Column('float', { name: 'CUSGER', nullable: true, precision: 53 })
  cusger: number | null;

  @Column('float', { name: 'CUSVARIAVEL', nullable: true, precision: 53 })
  cusvariavel: number | null;

  @Column('float', { name: 'CUSREP', nullable: true, precision: 53 })
  cusrep: number | null;

  @Column('float', { name: 'ENTRADACOMICMS', nullable: true, precision: 53 })
  entradacomicms: number | null;

  @Column('float', { name: 'ENTRADASEMICMS', nullable: true, precision: 53 })
  entradasemicms: number | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('char', { name: 'FAMILIA', nullable: true, length: 1 })
  familia: string | null;

  @Column('char', { name: 'ALTPRECO', nullable: true, length: 1 })
  altpreco: string | null;

  @Column('char', {
    name: 'TIPONOTA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tiponota: string | null;

  @Column('smallint', { name: 'SINAL', default: () => '(1)' })
  sinal: number;

  @Column('smallint', { name: 'COMPLCUST', nullable: true })
  complcust: number | null;
}
