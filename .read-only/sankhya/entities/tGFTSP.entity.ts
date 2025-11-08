import { Column, Entity, Index } from 'typeorm';

@Index('IDX_TGFTSP_CHAVE', ['chave'], {})
@Index('PK_TGFTSP', ['codusu', 'numnsu', 'dhtransacao'], { unique: true })
@Entity('TGFTSP', { schema: 'SANKHYA' })
export class TgftspEntity {
  @Column('varchar', { primary: true, name: 'NUMNSU', length: 15 })
  numnsu: string;

  @Column('datetime', { primary: true, name: 'DHTRANSACAO' })
  dhtransacao: Date;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 15 })
  chave: string | null;

  @Column('varchar', { name: 'NOMEREDE', nullable: true, length: 100 })
  nomerede: string | null;

  @Column('varchar', { name: 'AUTORIZACAO', nullable: true, length: 50 })
  autorizacao: string | null;

  @Column('float', { name: 'VLRTRANSACAO', nullable: true, precision: 53 })
  vlrtransacao: number | null;

  @Column('varchar', { name: 'BANDEIRA', nullable: true, length: 30 })
  bandeira: string | null;

  @Column('varchar', { name: 'CARTAO', nullable: true, length: 20 })
  cartao: string | null;

  @Column('smallint', { name: 'QTDPARCELAS', nullable: true })
  qtdparcelas: number | null;

  @Column('smallint', { name: 'CODTIPTIT', nullable: true })
  codtiptit: number | null;

  @Column('varchar', { name: 'OPERACAO', nullable: true, length: 5 })
  operacao: string | null;

  @Column('varchar', { name: 'RETORNO', nullable: true })
  retorno: string | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'CODCONTROLE', nullable: true, length: 30 })
  codcontrole: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('varchar', { name: 'HOSTNAME', nullable: true, length: 100 })
  hostname: string | null;

  @Column('varchar', { name: 'GATEWAY', nullable: true, length: 1 })
  gateway: string | null;
}
