import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPPTS', ['codemp', 'codfunc', 'mes', 'sequencia'], { unique: true })
@Entity('TFPPTS', { schema: 'SANKHYA' })
export class TfpptsEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'MES' })
  mes: Date;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'P'" })
  tipo: string;

  @Column('int', { name: 'MINUTOS', default: () => '(0)' })
  minutos: number;

  @Column('int', { name: 'PERCACRESC', default: () => '(0)' })
  percacresc: number;

  @Column('datetime', { name: 'MESORIG', nullable: true })
  mesorig: Date | null;

  @Column('smallint', { name: 'SEQORIG', nullable: true })
  seqorig: number | null;

  @Column('int', { name: 'MINUTOSCOMPENS', default: () => '(0)' })
  minutoscompens: number;

  @Column('int', { name: 'SALDO', default: () => '(0)' })
  saldo: number;

  @Column('int', { name: 'ADNOTURNO', default: () => '(0)' })
  adnoturno: number;

  @Column('int', { name: 'SALDOACRESC', default: () => '(0)' })
  saldoacresc: number;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
