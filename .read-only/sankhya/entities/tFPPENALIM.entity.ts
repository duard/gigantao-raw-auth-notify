import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPPENALIM',
  ['codemp', 'codfunc', 'referencia', 'codincirrf', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TFPPENALIM', { schema: 'SANKHYA' })
export class TfppenalimEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'CODINCIRRF', length: 4 })
  codincirrf: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('float', { name: 'VLRPENSAO', nullable: true, precision: 53 })
  vlrpensao: number | null;
}
