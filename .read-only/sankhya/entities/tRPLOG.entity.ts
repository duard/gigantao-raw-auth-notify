import { Column, Entity, Index } from 'typeorm';

@Index('PK_TRPLOG', ['id'], { unique: true })
@Entity('TRPLOG', { schema: 'SANKHYA' })
export class TrplogEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'NUMOS' })
  numos: number;

  @Column('varchar', { name: 'TIPPROC', length: 50 })
  tipproc: string;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 300 })
  tabela: string | null;

  @Column('varchar', { name: 'CONDICAO', nullable: true, length: 300 })
  condicao: string | null;

  @Column('int', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHPROC' })
  dhproc: Date;

  @Column('varchar', { name: 'NOMEARQUIVOORI', nullable: true, length: 50 })
  nomearquivoori: string | null;

  @Column('varchar', { name: 'NOMEARQUIVOBKP', nullable: true, length: 50 })
  nomearquivobkp: string | null;

  @Column('varchar', { name: 'TABELAGERADA', nullable: true, length: 50 })
  tabelagerada: string | null;
}
