import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBBFC', ['nubloqueio', 'sequencia'], { unique: true })
@Index('TCBBFC_I01', ['codemp', 'referencia'], {})
@Entity('TCBBFC', { schema: 'SANKHYA' })
export class TcbbfcEntity {
  @Column('int', { primary: true, name: 'NUBLOQUEIO' })
  nubloqueio: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTOENT', nullable: true })
  dtfechamentoent: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTOSAI', nullable: true })
  dtfechamentosai: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTOCUS', nullable: true })
  dtfechamentocus: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTOREC', nullable: true })
  dtfechamentorec: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTODESP', nullable: true })
  dtfechamentodesp: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTOBCO', nullable: true })
  dtfechamentobco: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTOCTB', nullable: true })
  dtfechamentoctb: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTOFIS', nullable: true })
  dtfechamentofis: Date | null;

  @Column('char', { name: 'TIPOFECHAESTENT', nullable: true, length: 1 })
  tipofechaestent: string | null;

  @Column('char', { name: 'TIPOFECHAESTSAI', nullable: true, length: 1 })
  tipofechaestsai: string | null;

  @Column('char', { name: 'TIPOFECHACALCUST', nullable: true, length: 1 })
  tipofechacalcust: string | null;

  @Column('char', { name: 'TIPOFECHAFINREC', nullable: true, length: 1 })
  tipofechafinrec: string | null;

  @Column('char', { name: 'TIPOFECHAFINDESP', nullable: true, length: 1 })
  tipofechafindesp: string | null;

  @Column('char', { name: 'TIPOFECHAMOVBCO', nullable: true, length: 1 })
  tipofechamovbco: string | null;

  @Column('char', { name: 'TIPOFECHAMOVCTB', nullable: true, length: 1 })
  tipofechamovctb: string | null;

  @Column('char', { name: 'TIPOFECHAMOVFIS', nullable: true, length: 1 })
  tipofechamovfis: string | null;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('char', { name: 'REFFIXA', nullable: true, length: 1 })
  reffixa: string | null;
}
