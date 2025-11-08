import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERDCC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERDCC', { schema: 'SANKHYA' })
export class TserdccEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'QTDETOTALCRED', nullable: true })
  qtdetotalcred: number | null;

  @Column('datetime', { name: 'DATAATUALCRED', nullable: true })
  dataatualcred: Date | null;

  @Column('int', { name: 'QTDEATUALCRED', nullable: true })
  qtdeatualcred: number | null;

  @Column('int', { name: 'QTDEMES1CRED', nullable: true })
  qtdemes1Cred: number | null;

  @Column('int', { name: 'QTDEMES2CRED', nullable: true })
  qtdemes2Cred: number | null;

  @Column('int', { name: 'QTDEMES3CRED', nullable: true })
  qtdemes3Cred: number | null;

  @Column('int', { name: 'QTDETOTALCHEQ', nullable: true })
  qtdetotalcheq: number | null;

  @Column('int', { name: 'QTDEATUALCHEQ', nullable: true })
  qtdeatualcheq: number | null;

  @Column('int', { name: 'QTDEMES1CHEQ', nullable: true })
  qtdemes1Cheq: number | null;

  @Column('int', { name: 'QTDEMES2CHEQ', nullable: true })
  qtdemes2Cheq: number | null;

  @Column('int', { name: 'QTDEMES3CHEQ', nullable: true })
  qtdemes3Cheq: number | null;

  @Column('datetime', { name: 'POSICAO', nullable: true })
  posicao: Date | null;

  @Column('datetime', { name: 'DATAFICAD', nullable: true })
  dataficad: Date | null;
}
