import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSTABFRETEPESO', ['codtabela', 'seqrota', 'seqfaixa'], {
  unique: true,
})
@Entity('TMSTABFRETEPESO', { schema: 'SANKHYA' })
export class TmstabfretepesoEntity {
  @Column('int', { primary: true, name: 'CODTABELA' })
  codtabela: number;

  @Column('int', { primary: true, name: 'SEQROTA' })
  seqrota: number;

  @Column('int', { primary: true, name: 'SEQFAIXA' })
  seqfaixa: number;

  @Column('float', { name: 'LIMITEPESO', nullable: true, precision: 53 })
  limitepeso: number | null;

  @Column('float', { name: 'VLRFIXO', nullable: true, precision: 53 })
  vlrfixo: number | null;

  @Column('float', { name: 'VLRPESO', nullable: true, precision: 53 })
  vlrpeso: number | null;
}
