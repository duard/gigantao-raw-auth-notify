import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPLOG', ['tabela', 'campo', 'dhalter'], { unique: true })
@Entity('TFPLOG', { schema: 'SANKHYA' })
export class TfplogEntity {
  @Column('varchar', { name: 'CAMPOLABEL', nullable: true, length: 40 })
  campolabel: string | null;

  @Column('varchar', { name: 'VLRANT', nullable: true, length: 250 })
  vlrant: string | null;

  @Column('varchar', { name: 'VLRNOVO', nullable: true, length: 250 })
  vlrnovo: string | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 250 })
  chave: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { primary: true, name: 'TABELA', length: 20 })
  tabela: string;

  @Column('varchar', { primary: true, name: 'CAMPO', length: 20 })
  campo: string;

  @Column('datetime', {
    primary: true,
    name: 'DHALTER',
    default: () => 'getdate()',
  })
  dhalter: Date;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;
}
