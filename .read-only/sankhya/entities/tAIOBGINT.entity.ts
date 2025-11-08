import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAIOBGINT', ['codemp', 'origdoc', 'referencia', 'arquivo'], {
  unique: true,
})
@Entity('TAIOBGINT', { schema: 'SANKHYA' })
export class TaiobgintEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'ORIGDOC', length: 2 })
  origdoc: string;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { name: 'PROCESSO', nullable: true, length: 2 })
  processo: string | null;

  @Column('varchar', { primary: true, name: 'ARQUIVO', length: 100 })
  arquivo: string;

  @Column('varchar', { name: 'TPESCRIT', nullable: true, length: 2 })
  tpescrit: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('smallint', { name: 'VERSAOLAYOUT', nullable: true })
  versaolayout: number | null;

  @Column('datetime', { name: 'DTINTEG', nullable: true })
  dtinteg: Date | null;

  @Column('varchar', { name: 'STATUSENV', nullable: true, length: 25 })
  statusenv: string | null;

  @Column('varchar', { name: 'PROTOCOLO', nullable: true, length: 44 })
  protocolo: string | null;

  @Column('varchar', { name: 'AUDITADO', nullable: true, length: 1 })
  auditado: string | null;

  @Column('smallint', { name: 'ERROS', nullable: true })
  erros: number | null;

  @Column('smallint', { name: 'ADVERTENCIA', nullable: true })
  advertencia: number | null;

  @Column('smallint', { name: 'BENEFICIOS', nullable: true })
  beneficios: number | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 25 })
  tipo: string | null;

  @Column('varchar', { name: 'OCORRENCIA', nullable: true, length: 10 })
  ocorrencia: string | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 255 })
  mensagem: string | null;

  @Column('varchar', { name: 'AUDITORIACONSULTADA', nullable: true, length: 1 })
  auditoriaconsultada: string | null;
}
