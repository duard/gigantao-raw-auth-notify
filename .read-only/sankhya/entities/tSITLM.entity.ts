import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSITLM', ['codrgb', 'dtexec'], { unique: true })
@Index('TSITLM_I01', ['dtexec', 'codrgb'], {})
@Entity('TSITLM', { schema: 'SANKHYA' })
export class TsitlmEntity {
  @Column('smallint', { primary: true, name: 'CODRGB' })
  codrgb: number;

  @Column('varchar', { name: 'NOMEREGRA', nullable: true, length: 30 })
  nomeregra: string | null;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 32 })
  tabela: string | null;

  @Column('datetime', { primary: true, name: 'DTEXEC' })
  dtexec: Date;

  @Column('int', { name: 'QTDEXEC', nullable: true })
  qtdexec: number | null;

  @Column('decimal', {
    name: 'TEMPOMED',
    nullable: true,
    precision: 12,
    scale: 4,
  })
  tempomed: number | null;

  @Column('decimal', {
    name: 'TEMPOTOT',
    nullable: true,
    precision: 12,
    scale: 4,
  })
  tempotot: number | null;
}
