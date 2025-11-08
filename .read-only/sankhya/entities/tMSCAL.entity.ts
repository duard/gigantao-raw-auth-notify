import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSCAL', ['codcal'], { unique: true })
@Entity('TMSCAL', { schema: 'SANKHYA' })
export class TmscalEntity {
  @Column('int', { primary: true, name: 'CODCAL' })
  codcal: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('int', { name: 'CODEMPNEGOC', nullable: true })
  codempnegoc: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('int', { name: 'CODPARCREMETENTE', nullable: true })
  codparcremetente: number | null;

  @Column('int', { name: 'CODPARCDEST', nullable: true })
  codparcdest: number | null;

  @Column('int', { name: 'CODMOTORISTA', nullable: true })
  codmotorista: number | null;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('float', { name: 'PESO', nullable: true, precision: 53 })
  peso: number | null;

  @Column('datetime', { name: 'DTSAIDA', nullable: true })
  dtsaida: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('varchar', { name: 'CHAVECTE', nullable: true, length: 100 })
  chavecte: string | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODPARCANTT', nullable: true })
  codparcantt: number | null;

  @Column('datetime', { name: 'DTENTREGA', nullable: true })
  dtentrega: Date | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('varchar', { name: 'DEVOLUCAO', nullable: true, length: 10 })
  devolucao: string | null;
}
