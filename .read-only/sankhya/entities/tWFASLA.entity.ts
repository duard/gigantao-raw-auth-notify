import { Column, Entity, Index } from 'typeorm';

@Index('PK_TWFASLA', ['codprn', 'versao', 'regra', 'sequencia'], {
  unique: true,
})
@Entity('TWFASLA', { schema: 'SANKHYA' })
export class TwfaslaEntity {
  @Column('int', { primary: true, name: 'CODPRN' })
  codprn: number;

  @Column('int', { primary: true, name: 'VERSAO' })
  versao: number;

  @Column('int', { primary: true, name: 'REGRA' })
  regra: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'SITUACAO', length: 1 })
  situacao: string;

  @Column('varchar', { name: 'TIPONOTIFICACAO', length: 1 })
  tiponotificacao: string;

  @Column('varchar', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('varchar', { name: 'NOTIFICAPADRAO', length: 1 })
  notificapadrao: string;

  @Column('text', { name: 'EXPRDESTINATARIOS', nullable: true })
  exprdestinatarios: string | null;

  @Column('int', { name: 'CODSMTP', nullable: true })
  codsmtp: number | null;

  @Column('float', { name: 'TEMPOLIMITE', precision: 53 })
  tempolimite: number;
}
