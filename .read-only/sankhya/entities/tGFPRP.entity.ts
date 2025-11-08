import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPRP', ['codpremissa'], { unique: true })
@Entity('TGFPRP', { schema: 'SANKHYA' })
export class TgfprpEntity {
  @Column('smallint', { primary: true, name: 'CODPREMISSA' })
  codpremissa: number;

  @Column('float', { name: 'COMISSAO', nullable: true, precision: 53 })
  comissao: number | null;

  @Column('float', { name: 'DEBICMS', nullable: true, precision: 53 })
  debicms: number | null;

  @Column('float', { name: 'DESPFIXA', nullable: true, precision: 53 })
  despfixa: number | null;

  @Column('float', { name: 'DESCSOBRETAB', nullable: true, precision: 53 })
  descsobretab: number | null;

  @Column('smallint', { name: 'DIAPAGCOM', nullable: true })
  diapagcom: number | null;

  @Column('smallint', {
    name: 'DIACREDICMS',
    nullable: true,
    default: () => '(5)',
  })
  diacredicms: number | null;

  @Column('smallint', {
    name: 'DIADEBICMS',
    nullable: true,
    default: () => '(5)',
  })
  diadebicms: number | null;

  @Column('smallint', { name: 'DIALANCDESP', nullable: true })
  dialancdesp: number | null;

  @Column('smallint', { name: 'DIALANCLUCRO', nullable: true })
  dialanclucro: number | null;

  @Column('smallint', { name: 'DIAPAGPIS', nullable: true })
  diapagpis: number | null;

  @Column('float', { name: 'MARGLUCRO', nullable: true, precision: 53 })
  marglucro: number | null;

  @Column('char', { name: 'MESCOM', nullable: true, length: 1 })
  mescom: string | null;

  @Column('char', { name: 'MESCREDICMS', nullable: true, length: 1 })
  mescredicms: string | null;

  @Column('char', { name: 'MESDEBICMS', nullable: true, length: 1 })
  mesdebicms: string | null;

  @Column('char', { name: 'MESLANCDESP', nullable: true, length: 1 })
  meslancdesp: string | null;

  @Column('char', { name: 'MESLANCLUCRO', nullable: true, length: 1 })
  meslanclucro: string | null;

  @Column('char', { name: 'MESPAGPIS', nullable: true, length: 1 })
  mespagpis: string | null;

  @Column('float', { name: 'PERCCREDICMS', nullable: true, precision: 53 })
  perccredicms: number | null;

  @Column('float', { name: 'PIS_FINSOCIAL', nullable: true, precision: 53 })
  pisFinsocial: number | null;

  @Column('float', { name: 'TAXADEFLACAO', nullable: true, precision: 53 })
  taxadeflacao: number | null;
}
