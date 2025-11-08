import { Column, Entity, Index } from 'typeorm';

@Index('PK_EXECPARAMS', ['idsessao', 'sequencia', 'nome'], { unique: true })
@Entity('EXECPARAMS', { schema: 'SANKHYA' })
export class ExecparamsEntity {
  @Column('varchar', { primary: true, name: 'IDSESSAO', length: 800 })
  idsessao: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'NOME', length: 50 })
  nome: string;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('int', { name: 'NUMINT', nullable: true })
  numint: number | null;

  @Column('float', { name: 'NUMDEC', nullable: true, precision: 53 })
  numdec: number | null;

  @Column('varchar', { name: 'TEXTO', nullable: true, length: 3103 })
  texto: string | null;

  @Column('datetime', { name: 'DTA', nullable: true })
  dta: Date | null;

  @Column('smallint', {
    name: 'ATUALIZADO',
    nullable: true,
    default: () => '(0)',
  })
  atualizado: number | null;
}
