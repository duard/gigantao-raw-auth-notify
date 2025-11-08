import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIESTATSERVICO', ['codusu', 'hash', 'dtacesso'], { unique: true })
@Entity('TSIESTATSERVICO', { schema: 'SANKHYA' })
export class TsiestatservicoEntity {
  @Column('varchar', { name: 'SERVICO', nullable: true, length: 3103 })
  servico: string | null;

  @Column('varchar', { primary: true, name: 'HASH', length: 32 })
  hash: string;

  @Column('datetime', { primary: true, name: 'DTACESSO' })
  dtacesso: Date;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 1000 })
  resourceid: string | null;

  @Column('int', { name: 'QTD', nullable: true })
  qtd: number | null;

  @Column('int', { name: 'TEMPOTOTAL', nullable: true })
  tempototal: number | null;

  @Column('int', { name: 'TMENOR', nullable: true })
  tmenor: number | null;

  @Column('int', { name: 'TMEDIO', nullable: true })
  tmedio: number | null;

  @Column('int', { name: 'TMAIOR', nullable: true })
  tmaior: number | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'OPINFO', nullable: true, length: 1000 })
  opinfo: string | null;
}
