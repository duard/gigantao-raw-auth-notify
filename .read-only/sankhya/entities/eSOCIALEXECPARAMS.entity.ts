import { Column, Entity, Index } from 'typeorm';

@Index('PK_ESOCIALEXECPARAMS', ['idsessao', 'sequencia', 'nome'], {
  unique: true,
})
@Entity('ESOCIALEXECPARAMS', { schema: 'SANKHYA' })
export class EsocialexecparamsEntity {
  @Column('varchar', { primary: true, name: 'IDSESSAO', length: 50 })
  idsessao: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
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

  @Column('date', { name: 'DHINC', nullable: true, default: () => 'getdate()' })
  dhinc: Date | null;

  @Column('smallint', { name: 'ATUALIZADO', nullable: true })
  atualizado: number | null;
}
