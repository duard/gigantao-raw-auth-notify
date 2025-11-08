import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFIPRE', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFIPRE', { schema: 'SANKHYA' })
export class TgfipreEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'BASESUBST', nullable: true, precision: 53 })
  basesubst: number | null;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('float', { name: 'BASESTFCPINTANT', nullable: true, precision: 53 })
  basestfcpintant: number | null;

  @Column('float', { name: 'VLRSTFCPINTANT', nullable: true, precision: 53 })
  vlrstfcpintant: number | null;

  @Column('float', { name: 'PERCSTFCPINTANT', nullable: true, precision: 53 })
  percstfcpintant: number | null;

  @Column('varchar', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  digitado: string | null;

  @Column('int', { name: 'NUNOTACOMPRA', nullable: true })
  nunotacompra: number | null;

  @Column('smallint', { name: 'SEQUENCIACOMPRA', nullable: true })
  sequenciacompra: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('float', { name: 'PERCSUBST', nullable: true, precision: 53 })
  percsubst: number | null;

  @Column('varchar', { name: 'MSG', nullable: true, length: 3103 })
  msg: string | null;
}
