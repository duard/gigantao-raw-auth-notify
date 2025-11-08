import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBIRPJPTBAD', ['codemp', 'referencia', 'codctactb', 'sequencia'], {
  unique: true,
})
@Entity('TCBIRPJPTBAD', { schema: 'SANKHYA' })
export class TcbirpjptbadEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 15 })
  tabela: string | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODCONTA' })
  codconta: number;

  @Column('varchar', { name: 'DESCRCONTA', nullable: true, length: 50 })
  descrconta: string | null;

  @Column('varchar', { name: 'CODPADRAOPTB', nullable: true, length: 10 })
  codpadraoptb: string | null;

  @Column('varchar', { name: 'INDTRIBPTB', nullable: true, length: 1 })
  indtribptb: string | null;

  @Column('float', { name: 'VLRLANC', nullable: true, precision: 53 })
  vlrlanc: number | null;
}
