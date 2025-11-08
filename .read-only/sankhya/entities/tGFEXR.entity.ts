import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEXR', ['codregua', 'seqexec'], { unique: true })
@Index('TGFEXR_I01', ['codregua', 'codevento'], {})
@Index('TGFEXR_I02', ['dhexec'], {})
@Entity('TGFEXR', { schema: 'SANKHYA' })
export class TgfexrEntity {
  @Column('int', { primary: true, name: 'CODREGUA' })
  codregua: number;

  @Column('int', { primary: true, name: 'SEQEXEC' })
  seqexec: number;

  @Column('int', { name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { name: 'TIPOEVENTO' })
  tipoevento: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('datetime', { name: 'DHEXEC' })
  dhexec: Date;

  @Column('char', { name: 'RESULTADO', length: 1 })
  resultado: string;

  @Column('int', { name: 'QTDTITULOSUCESSO', nullable: true })
  qtdtitulosucesso: number | null;

  @Column('int', { name: 'QTDTITULOFALHA', nullable: true })
  qtdtitulofalha: number | null;

  @Column('float', { name: 'TEMPOEXECUCAO', nullable: true, precision: 53 })
  tempoexecucao: number | null;

  @Column('varchar', { name: 'RESUMO', nullable: true, length: 3103 })
  resumo: string | null;

  @Column('datetime', { name: 'ULTIMAALTERACAOEVENTO', nullable: true })
  ultimaalteracaoevento: Date | null;

  @Column('text', { name: 'ACONTECE', nullable: true })
  acontece: string | null;
}
