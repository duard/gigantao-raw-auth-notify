import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRECHE', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRECHE', { schema: 'SANKHYA' })
export class TserrecheEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DATA', nullable: true })
  data: Date | null;

  @Column('varchar', { name: 'BANCO', nullable: true, length: 20 })
  banco: string | null;

  @Column('smallint', { name: 'AGENCIA', nullable: true })
  agencia: number | null;

  @Column('int', { name: 'CONTACORRENTE', nullable: true })
  contacorrente: number | null;

  @Column('smallint', { name: 'DIGITOCONTA', nullable: true })
  digitoconta: number | null;

  @Column('int', { name: 'CHEQUEINICIAL', nullable: true })
  chequeinicial: number | null;

  @Column('int', { name: 'CHEQUEFINAL', nullable: true })
  chequefinal: number | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 10 })
  motivo: string | null;

  @Column('int', { name: 'CONTACORRENTEDOZE', nullable: true })
  contacorrentedoze: number | null;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 15 })
  cpfcnpj: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'QTDOCO', nullable: true })
  qtdoco: number | null;

  @Column('int', { name: 'QTDULTOCO', nullable: true })
  qtdultoco: number | null;

  @Column('float', { name: 'VALORGERAL', nullable: true, precision: 53 })
  valorgeral: number | null;
}
