import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIDAS_HIS', ['id'], { unique: true })
@Entity('TSIDAS_HIS', { schema: 'SANKHYA' })
export class TsidasHisEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'NUDOC', nullable: true })
  nudoc: number | null;

  @Column('smallint', { name: 'CODEVENTO', nullable: true })
  codevento: number | null;

  @Column('varchar', { name: 'TIPODOC', nullable: true, length: 100 })
  tipodoc: string | null;

  @Column('varchar', { name: 'CHAVEDOC', nullable: true, length: 100 })
  chavedoc: string | null;

  @Column('text', { name: 'HASHARQUIVO', nullable: true })
  hasharquivo: string | null;

  @Column('text', { name: 'TRANSACTIONID', nullable: true })
  transactionid: string | null;

  @Column('datetime', { name: 'DHEVENTO', nullable: true })
  dhevento: Date | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('char', {
    name: 'STATUS_ASSINATURA',
    length: 1,
    default: () => "'P'",
  })
  statusAssinatura: string;

  @Column('text', { name: 'DETALHES_STATUS', nullable: true })
  detalhesStatus: string | null;

  @Column('smallint', { name: 'SOLICITACAO_MANUAL', nullable: true })
  solicitacaoManual: number | null;

  @Column('text', { name: 'ERRO', nullable: true })
  erro: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
