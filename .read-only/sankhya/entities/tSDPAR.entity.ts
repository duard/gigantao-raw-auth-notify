import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSDPAR', ['chave', 'codusu'], { unique: true })
@Entity('TSDPAR', { schema: 'SANKHYA' })
export class TsdparEntity {
  @Column('char', { primary: true, name: 'CHAVE', length: 15 })
  chave: string;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('smallint', { primary: true, name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('char', { name: 'MODULO', length: 1, default: () => "'B'" })
  modulo: string;

  @Column('char', { name: 'CLASSE', nullable: true, length: 20 })
  classe: string | null;

  @Column('char', { name: 'ABA', nullable: true, length: 20 })
  aba: string | null;

  @Column('char', { name: 'LOGICO', length: 1, default: () => "'S'" })
  logico: string;

  @Column('int', { name: 'INTEIRO', nullable: true })
  inteiro: number | null;

  @Column('money', { name: 'NUMDEC', nullable: true })
  numdec: number | null;

  @Column('datetime', { name: 'DATA', nullable: true })
  data: Date | null;

  @Column('text', { name: 'TEXTO', nullable: true })
  texto: string | null;
}
