import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPLBE', ['codlbe'], { unique: true })
@Entity('TFPLBE', { schema: 'SANKHYA' })
export class TfplbeEntity {
  @Column('int', { primary: true, name: 'CODLBE' })
  codlbe: number;

  @Column('int', { name: 'CODBEN' })
  codben: number;

  @Column('int', { name: 'CODCBE' })
  codcbe: number;

  @Column('int', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { name: 'CODEVENTO' })
  codevento: number;

  @Column('int', { name: 'CODDEP', nullable: true })
  coddep: number | null;

  @Column('int', { name: 'CODCARGO', nullable: true })
  codcargo: number | null;

  @Column('int', { name: 'CODFUNCAO', nullable: true })
  codfuncao: number | null;

  @Column('int', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NOMEDEPEND', nullable: true, length: 100 })
  nomedepend: string | null;

  @Column('int', { name: 'SITUACAOFUNC', nullable: true })
  situacaofunc: number | null;

  @Column('datetime', { name: 'DTREFEMP', nullable: true })
  dtrefemp: Date | null;

  @Column('float', { name: 'VLRTITULAR', nullable: true, precision: 53 })
  vlrtitular: number | null;

  @Column('float', { name: 'VLRDEPEN', nullable: true, precision: 53 })
  vlrdepen: number | null;
}
