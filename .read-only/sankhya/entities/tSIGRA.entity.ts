import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIGRA', ['nome', 'codemp', 'origem'], { unique: true })
@Entity('TSIGRA', { schema: 'SANKHYA' })
export class TsigraEntity {
  @Column('varchar', { primary: true, name: 'NOME', length: 40 })
  nome: string;

  @Column('datetime', { name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { name: 'DTFINAL' })
  dtfinal: Date;

  @Column('char', { name: 'RESUMO', nullable: true, length: 20 })
  resumo: string | null;

  @Column('text', { name: 'FILTROS', nullable: true })
  filtros: string | null;

  @Column('text', { name: 'ESCOLHIDOS', nullable: true })
  escolhidos: string | null;

  @Column('text', { name: 'ORDEM', nullable: true })
  ordem: string | null;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'ORIGEM' })
  origem: number;
}
