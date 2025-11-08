import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__AD_WPP_M__3214EC27CFD9B556', ['id'], { unique: true })
@Entity('AD_WPP_MESSAGES', { schema: 'SANKHYA' })
export class AdWppMessagesEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 50 })
  tabela: string | null;

  @Column('datetime', { name: 'DTCREATED', nullable: true })
  dtcreated: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 255 })
  status: string | null;

  @Column('int', { name: 'CODUSULIB', nullable: true })
  codusulib: number | null;

  @Column('varchar', { name: 'NOMEUSULIB', nullable: true, length: 255 })
  nomeusulib: string | null;

  @Column('varchar', { name: 'TELLIB', nullable: true, length: 20 })
  tellib: string | null;

  @Column('int', { name: 'CODUSUSOL', nullable: true })
  codususol: number | null;

  @Column('varchar', { name: 'NOMEUSUSOL', nullable: true, length: 255 })
  nomeususol: string | null;

  @Column('varchar', { name: 'TELSOL', nullable: true, length: 20 })
  telsol: string | null;

  @Column('int', { name: 'CODGRUPO', nullable: true })
  codgrupo: number | null;

  @Column('varchar', { name: 'NOMEGRUPO', nullable: true, length: 255 })
  nomegrupo: string | null;

  @Column('int', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('varchar', { name: 'DESCRTIPOPER', nullable: true, length: 255 })
  descrtipoper: string | null;

  @Column('int', { name: 'EVENTO', nullable: true })
  evento: number | null;

  @Column('varchar', { name: 'PRIORIDADE', nullable: true, length: 1 })
  prioridade: string | null;

  @Column('text', { name: 'CORPO_MENSAGEM', nullable: true })
  corpoMensagem: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('varchar', { name: 'LINK_APROVAR', nullable: true, length: 500 })
  linkAprovar: string | null;

  @Column('varchar', { name: 'LINK_REPROVAR', nullable: true, length: 500 })
  linkReprovar: string | null;

  @Column('int', { name: 'NUOS', nullable: true })
  nuos: number | null;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('int', { name: 'CODUSUOPERADOR', nullable: true })
  codusuoperador: number | null;

  @Column('datetime', { name: 'DT_ACESSO', nullable: true })
  dtAcesso: Date | null;
}
