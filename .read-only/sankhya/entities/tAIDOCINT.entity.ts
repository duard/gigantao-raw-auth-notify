import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAIDOCINT', ['codemp', 'nunota'], { unique: true })
@Entity('TAIDOCINT', { schema: 'SANKHYA' })
export class TaidocintEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('int', { name: 'CODMODDOC', nullable: true })
  codmoddoc: number | null;

  @Column('varchar', { name: 'SERIENOTA', nullable: true, length: 5 })
  serienota: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

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

  @Column('varchar', { name: 'STATUSNFE', nullable: true, length: 25 })
  statusnfe: string | null;

  @Column('int', { name: 'NUARQUIVO', nullable: true })
  nuarquivo: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('char', { name: 'TIPMOV', nullable: true, length: 1 })
  tipmov: string | null;

  @Column('varchar', { name: 'AUDITORIACONSULTADA', nullable: true, length: 1 })
  auditoriaconsultada: string | null;
}
