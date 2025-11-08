import { Column, Entity, Index } from 'typeorm';

@Index('PK__TFPBRH__2FA452066CE0E587', ['codemp', 'codfunc', 'codben'], {
  unique: true,
})
@Entity('TFPBRH', { schema: 'SANKHYA' })
export class TfpbrhEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'CODBEN' })
  codben: number;

  @Column('char', {
    name: 'SOLICITAPORTAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  solicitaportal: string | null;
}
