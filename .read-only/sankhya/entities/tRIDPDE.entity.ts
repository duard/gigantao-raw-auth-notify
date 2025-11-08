import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIDPDE',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave', 'cnpj', 'cpfdep'],
  {
    unique: true,
  },
)
@Entity('TRIDPDE', { schema: 'SANKHYA' })
export class TridpdeEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('varchar', { primary: true, name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('varchar', { name: 'NOMEDEP', nullable: true, length: 40 })
  nomedep: string | null;

  @Column('float', { name: 'VLRSAUDE', nullable: true, precision: 53 })
  vlrsaude: number | null;

  @Column('float', { name: 'VLRREEMB', nullable: true, precision: 53 })
  vlrreemb: number | null;

  @Column('float', { name: 'VLRREEMBANOANT', nullable: true, precision: 53 })
  vlrreembanoant: number | null;

  @Column('int', { name: 'CODPARCASS', nullable: true })
  codparcass: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'CODPARCBEN', nullable: true })
  codparcben: number | null;
}
