import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSTABFRETEADC', ['codtabela', 'seqrota', 'seqadc'], {
  unique: true,
})
@Entity('TMSTABFRETEADC', { schema: 'SANKHYA' })
export class TmstabfreteadcEntity {
  @Column('int', { primary: true, name: 'CODTABELA' })
  codtabela: number;

  @Column('int', { primary: true, name: 'SEQROTA' })
  seqrota: number;

  @Column('int', { primary: true, name: 'SEQADC' })
  seqadc: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('float', { name: 'VLRMIN', nullable: true, precision: 53 })
  vlrmin: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('float', { name: 'FRACAO', nullable: true, precision: 53 })
  fracao: number | null;
}
