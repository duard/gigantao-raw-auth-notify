import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFFRM', ['codprod', 'dtalter'], { unique: true })
@Entity('TGFFRM', { schema: 'SANKHYA' })
export class TgffrmEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'MED_ABC', nullable: true, length: 9 })
  medAbc: string | null;

  @Column('char', { name: 'MED_CTR', nullable: true, length: 1 })
  medCtr: string | null;

  @Column('char', { name: 'MED_LAB', nullable: true, length: 6 })
  medLab: string | null;

  @Column('char', { name: 'LAB_NOM', nullable: true, length: 30 })
  labNom: string | null;

  @Column('char', { name: 'MED_DES', nullable: true, length: 45 })
  medDes: string | null;

  @Column('char', { name: 'MED_APR', nullable: true, length: 45 })
  medApr: string | null;

  @Column('decimal', {
    name: 'MED_PLA1',
    nullable: true,
    precision: 12,
    scale: 2,
  })
  medPla1: number | null;

  @Column('decimal', {
    name: 'MED_PCO1',
    nullable: true,
    precision: 12,
    scale: 2,
  })
  medPco1: number | null;

  @Column('decimal', {
    name: 'MED_FRA1',
    nullable: true,
    precision: 12,
    scale: 2,
  })
  medFra1: number | null;

  @Column('int', { name: 'MED_UNI', nullable: true })
  medUni: number | null;

  @Column('decimal', {
    name: 'MED_IPI',
    nullable: true,
    precision: 6,
    scale: 2,
  })
  medIpi: number | null;

  @Column('datetime', { name: 'MED_DTVIG', nullable: true })
  medDtvig: Date | null;

  @Column('char', { name: 'EXP_13', nullable: true, length: 1 })
  exp_13: string | null;

  @Column('char', { name: 'MED_BARRA', nullable: true, length: 13 })
  medBarra: string | null;

  @Column('char', { name: 'MED_GENE', nullable: true, length: 3 })
  medGene: string | null;

  @Column('char', { name: 'MED_NEGPOS', nullable: true, length: 3 })
  medNegpos: string | null;

  @Column('char', { name: 'MED_NEUTRO', nullable: true, length: 3 })
  medNeutro: string | null;

  @Column('char', { name: 'MED_PRINCI', nullable: true, length: 130 })
  medPrinci: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgffrms)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgffrms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
