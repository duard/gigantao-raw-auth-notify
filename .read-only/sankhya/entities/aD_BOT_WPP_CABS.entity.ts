import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__AD_BOT_W__3214EC27060E3A90', ['id'], { unique: true })
@Entity('AD_BOT_WPP_CABS', { schema: 'SANKHYA' })
export class AdBotWppCabsEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('datetime', { name: 'DTCREATED', nullable: true })
  dtcreated: Date | null;

  @Column('varchar', { name: 'NOMEUSULIB', nullable: true, length: 255 })
  nomeusulib: string | null;

  @Column('varchar', { name: 'TELLIB', nullable: true, length: 20 })
  tellib: string | null;

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

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'LINK_APROVAR', nullable: true, length: 500 })
  linkAprovar: string | null;

  @Column('varchar', { name: 'LINK_REPROVAR', nullable: true, length: 500 })
  linkReprovar: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('text', { name: 'CORPO_MENSAGEM', nullable: true })
  corpoMensagem: string | null;

  @Column('int', { name: 'CODUSULIB', nullable: true })
  codusulib: number | null;

  @Column('int', { name: 'CODUSUSOL', nullable: true })
  codususol: number | null;
}
