import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWCONFEMPE', ['nuconf'], { unique: true })
@Entity('TGWCONFEMPE', { schema: 'SANKHYA' })
export class TgwconfempeEntity {
  @Column('int', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'TIPGATILHO', length: 1 })
  tipgatilho: string;

  @Column('varchar', { name: 'EXPGATILHO', nullable: true, length: 100 })
  expgatilho: string | null;

  @Column('varchar', { name: 'TIPINTERVALO', nullable: true, length: 1 })
  tipintervalo: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('int', { name: 'TEMPOPROCESSAMENTO', nullable: true })
  tempoprocessamento: number | null;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @Column('int', { name: 'TOPCOMPRA', nullable: true })
  topcompra: number | null;

  @Column('int', { name: 'CODPARCTRANSPCOMPRA', nullable: true })
  codparctranspcompra: number | null;

  @Column('int', { name: 'REGIAOCOMPRA', nullable: true })
  regiaocompra: number | null;

  @Column('int', { name: 'CODPARCCOMPRA', nullable: true })
  codparccompra: number | null;

  @Column('int', { name: 'TOPVENDA', nullable: true })
  topvenda: number | null;

  @Column('int', { name: 'CODPARCTRANSPVENDA', nullable: true })
  codparctranspvenda: number | null;

  @Column('int', { name: 'REGIAOVENDA', nullable: true })
  regiaovenda: number | null;

  @Column('int', { name: 'CODPARCVENDA', nullable: true })
  codparcvenda: number | null;

  @Column('int', { name: 'VLRINTERVALO', nullable: true })
  vlrintervalo: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('text', { name: 'FILTROVENDA', nullable: true })
  filtrovenda: string | null;

  @Column('text', { name: 'FILTROCOMPRA', nullable: true })
  filtrocompra: string | null;
}
