import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFIXML', ['chavenfe'], { unique: true })
@Index('TGFIXML_I01', ['codparc'], {})
@Index('TGFIXML_I02', ['dtemissao'], {})
@Entity('TGFIXML', { schema: 'SANKHYA' })
export class TgfixmlEntity {
  @Column('varchar', { primary: true, name: 'CHAVENFE', length: 44 })
  chavenfe: string;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('text', { name: 'XML' })
  xml: string;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', { name: 'DHIMPORT', default: () => 'getdate()' })
  dhimport: Date;

  @Column('datetime', { name: 'DTEMISSAO' })
  dtemissao: Date;

  @Column('int', { name: 'CODCFO', nullable: true })
  codcfo: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('char', { name: 'CANCELADA', length: 1, default: () => "'N'" })
  cancelada: string;

  @Column('char', { name: 'TEMFINANCEIRO', length: 1, default: () => "'N'" })
  temfinanceiro: string;
}
