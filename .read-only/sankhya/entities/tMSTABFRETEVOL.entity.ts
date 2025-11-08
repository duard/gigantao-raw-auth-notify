import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSTABFRETEVOL', ['codtabela', 'seqrota', 'seqfaixa'], {
  unique: true,
})
@Entity('TMSTABFRETEVOL', { schema: 'SANKHYA' })
export class TmstabfretevolEntity {
  @Column('int', { primary: true, name: 'CODTABELA' })
  codtabela: number;

  @Column('int', { primary: true, name: 'SEQROTA' })
  seqrota: number;

  @Column('int', { primary: true, name: 'SEQFAIXA' })
  seqfaixa: number;

  @Column('float', { name: 'LIMITEVOL', nullable: true, precision: 53 })
  limitevol: number | null;

  @Column('float', { name: 'VLRFIXO', nullable: true, precision: 53 })
  vlrfixo: number | null;

  @Column('float', { name: 'VLRVOL', nullable: true, precision: 53 })
  vlrvol: number | null;
}
