import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TAIOBGAUDIT',
  ['codemp', 'origdoc', 'referencia', 'arquivo', 'codigo'],
  { unique: true },
)
@Entity('TAIOBGAUDIT', { schema: 'SANKHYA' })
export class TaiobgauditEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'ORIGDOC', length: 2 })
  origdoc: string;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'ARQUIVO', length: 100 })
  arquivo: string;

  @Column('datetime', { name: 'DTINTEG', nullable: true })
  dtinteg: Date | null;

  @Column('varchar', { name: 'PROTOCOLO', nullable: true, length: 44 })
  protocolo: string | null;

  @Column('varchar', { name: 'DIAGNOSTICO', nullable: true, length: 1 })
  diagnostico: string | null;

  @Column('varchar', { primary: true, name: 'CODIGO', length: 10 })
  codigo: string;

  @Column('varchar', { name: 'NOMEAUDIT', nullable: true, length: 255 })
  nomeaudit: string | null;

  @Column('varchar', { name: 'EMENTA', nullable: true, length: 3103 })
  ementa: string | null;

  @Column('varchar', { name: 'JSONAUDITORIA', nullable: true })
  jsonauditoria: string | null;

  @Column('smallint', { name: 'NIVELAUDITORIA', nullable: true })
  nivelauditoria: number | null;
}
