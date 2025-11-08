import { Column, Entity, Index } from 'typeorm';

@Index('EXECMULTILIST_IX01', ['idsessao', 'nomeparam'], {})
@Index('PK_EXECMULTILIST', ['idsessao', 'sequencia', 'nomeparam'], {
  unique: true,
})
@Entity('EXECMULTILIST', { schema: 'SANKHYA' })
export class ExecmultilistEntity {
  @Column('varchar', { primary: true, name: 'IDSESSAO', length: 256 })
  idsessao: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'NOMEPARAM', length: 256 })
  nomeparam: string;

  @Column('int', { name: 'VALORINT', nullable: true })
  valorint: number | null;
}
