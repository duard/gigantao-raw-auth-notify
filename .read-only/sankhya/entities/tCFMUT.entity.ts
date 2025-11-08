import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCFMUT', ['nuregmt'], { unique: true })
@Entity('TCFMUT', { schema: 'SANKHYA' })
export class TcfmutEntity {
  @Column('int', { primary: true, name: 'NUREGMT' })
  nuregmt: number;

  @Column('datetime', { name: 'DHINF', nullable: true })
  dhinf: Date | null;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('int', { name: 'CODPARCMOT', nullable: true })
  codparcmot: number | null;

  @Column('int', { name: 'CODPARCEXP', nullable: true })
  codparcexp: number | null;

  @Column('int', { name: 'CODMT', nullable: true })
  codmt: number | null;

  @Column('int', { name: 'CODCID', nullable: true })
  codcid: number | null;

  @Column('varchar', { name: 'LOCINF', nullable: true, length: 200 })
  locinf: string | null;

  @Column('int', { name: 'PONTOS', nullable: true })
  pontos: number | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 3103 })
  obs: string | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('datetime', { name: 'DTLIMREC', nullable: true })
  dtlimrec: Date | null;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('varchar', { name: 'NRAUTO', nullable: true, length: 100 })
  nrauto: string | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
