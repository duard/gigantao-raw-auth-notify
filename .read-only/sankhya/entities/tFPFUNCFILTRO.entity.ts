import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPFUNCFILTRO', ['codempmatriz', 'codemp', 'codfunc', 'chave'], {
  unique: true,
})
@Entity('TFPFUNCFILTRO', { schema: 'SANKHYA' })
export class TfpfuncfiltroEntity {
  @Column('smallint', { primary: true, name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 50 })
  chave: string;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('char', { name: 'TPAMB', length: 1 })
  tpamb: string;
}
