import { Column, Entity, Index } from 'typeorm';

@Index('PK__TSICND__7D4737F4582D7F5F', ['codconsolidacao'], { unique: true })
@Entity('TSICND', { schema: 'SANKHYA' })
export class TsicndEntity {
  @Column('int', { primary: true, name: 'CODCONSOLIDACAO' })
  codconsolidacao: number;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('varchar', { name: 'TABELA', length: 255 })
  tabela: string;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('smallint', { name: 'TIPCONSOLIDACAO' })
  tipconsolidacao: number;

  @Column('datetime', { name: 'DATAINICIAL', nullable: true })
  datainicial: Date | null;

  @Column('smallint', { name: 'QTDMESESCONSOLIDAR', nullable: true })
  qtdmesesconsolidar: number | null;

  @Column('smallint', {
    name: 'QTDMESESRETROAGIR',
    nullable: true,
    default: () => '(6)',
  })
  qtdmesesretroagir: number | null;

  @Column('varchar', { name: 'TIPPROCESSAMENTO', length: 1 })
  tipprocessamento: string;

  @Column('varchar', { name: 'TIPGATILHO', length: 1 })
  tipgatilho: string;

  @Column('varchar', { name: 'EXPGATILHO', nullable: true, length: 100 })
  expgatilho: string | null;

  @Column('varchar', { name: 'TIPINTERVALO', nullable: true, length: 1 })
  tipintervalo: string | null;

  @Column('int', { name: 'VLRINTERVALO', nullable: true })
  vlrintervalo: number | null;

  @Column('text', { name: 'CONSULTA' })
  consulta: string;

  @Column('varchar', { name: 'FONTEDADOS', nullable: true, length: 50 })
  fontedados: string | null;

  @Column('datetime', { name: 'DHPROXEXEC', nullable: true })
  dhproxexec: Date | null;

  @Column('datetime', { name: 'DHULTEXEC', nullable: true })
  dhultexec: Date | null;

  @Column('int', { name: 'TEMPOPROCESSAMENTO', nullable: true })
  tempoprocessamento: number | null;

  @Column('varchar', { name: 'INVALIDO', nullable: true, length: 1 })
  invalido: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
