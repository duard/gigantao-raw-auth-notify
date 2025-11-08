import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIMAPS', ['hashmaster', 'hash'], { unique: true })
@Entity('TSIMAPS', { schema: 'SANKHYA' })
export class TsimapsEntity {
  @Column('varchar', { primary: true, name: 'HASHMASTER', length: 512 })
  hashmaster: string;

  @Column('varchar', { primary: true, name: 'HASH', length: 512 })
  hash: string;

  @Column('varchar', { name: 'SERVICO', nullable: true, length: 512 })
  servico: string | null;

  @Column('varchar', { name: 'DETALHE', nullable: true, length: 1024 })
  detalhe: string | null;

  @Column('int', { name: 'TEMPOTOTAL', nullable: true })
  tempototal: number | null;

  @Column('int', { name: 'TEMPOMEDIO', nullable: true })
  tempomedio: number | null;

  @Column('int', { name: 'QTD', nullable: true })
  qtd: number | null;

  @Column('int', { name: 'QTDERROS', nullable: true })
  qtderros: number | null;
}
