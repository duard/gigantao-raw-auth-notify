import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSITCM', ['idtipo', 'serverid', 'dhexecucao'], { unique: true })
@Entity('TSITCM', { schema: 'SANKHYA' })
export class TsitcmEntity {
  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 300 })
  descricao: string | null;

  @Column('varchar', { name: 'PROCESSO', nullable: true, length: 3103 })
  processo: string | null;

  @Column('int', { name: 'QTDCOLETA' })
  qtdcoleta: number;

  @Column('int', { name: 'TEMPOTOTAL' })
  tempototal: number;

  @Column('int', { name: 'TEMPOMEDIO' })
  tempomedio: number;

  @Column('datetime', { primary: true, name: 'DHEXECUCAO' })
  dhexecucao: Date;

  @Column('int', { name: 'QTDERROS', nullable: true })
  qtderros: number | null;

  @Column('varchar', { name: 'DETALHES', nullable: true, length: 3103 })
  detalhes: string | null;

  @Column('varchar', { primary: true, name: 'IDTIPO', length: 150 })
  idtipo: string;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 50 })
  tipo: string | null;

  @Column('varchar', { primary: true, name: 'SERVERID', length: 250 })
  serverid: string;

  @Column('varchar', { name: 'ENTIDADE', nullable: true, length: 30 })
  entidade: string | null;
}
