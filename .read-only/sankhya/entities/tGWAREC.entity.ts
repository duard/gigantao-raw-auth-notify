import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWAREC', ['sequencia'], { unique: true })
@Entity('TGWAREC', { schema: 'SANKHYA' })
export class TgwarecEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NURECEBIMENTO', nullable: true })
  nurecebimento: number | null;

  @Column('int', { name: 'NUCONFERENCIA', nullable: true })
  nuconferencia: number | null;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('varchar', { name: 'UMA', nullable: true, length: 30 })
  uma: string | null;

  @Column('char', { name: 'PROCESSAAVARIA', nullable: true, length: 1 })
  processaavaria: string | null;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 17 })
  controle: string | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('float', { name: 'QTDARMAZENAR', nullable: true, precision: 53 })
  qtdarmazenar: number | null;

  @Column('float', { name: 'QTDAVARIA', nullable: true, precision: 53 })
  qtdavaria: number | null;
}
