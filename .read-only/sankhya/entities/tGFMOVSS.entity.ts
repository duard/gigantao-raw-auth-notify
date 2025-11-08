import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMOVSS', ['numov'], { unique: true })
@Index('TGFMOVSS_I01', ['nufin'], {})
@Index('TGFMOVSS_I02', ['cnpj'], {})
@Index('TGFMOVSS_I03', ['tipolanc', 'cnpj', 'numnota'], {})
@Entity('TGFMOVSS', { schema: 'SANKHYA' })
export class TgfmovssEntity {
  @Column('int', { primary: true, name: 'NUMOV' })
  numov: number;

  @Column('varchar', { name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('float', { name: 'VLRMOVIMENTO', precision: 53 })
  vlrmovimento: number;

  @Column('smallint', { name: 'SINAL', default: () => '(1)' })
  sinal: number;

  @Column('int', { name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { name: 'DATAPAGAMENTO', nullable: true })
  datapagamento: Date | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('varchar', { name: 'TIPOLANC', length: 1, default: () => "'A'" })
  tipolanc: string;

  @Column('datetime', { name: 'DTLANCTO' })
  dtlancto: Date;

  @Column('varchar', { name: 'OBSERVACOES', nullable: true, length: 250 })
  observacoes: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;
}
