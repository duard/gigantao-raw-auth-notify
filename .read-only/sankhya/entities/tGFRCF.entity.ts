import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcfrEntity } from './tGFCFR.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsieveEntity } from './tSIEVE.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index(
  'PK_TGFRCF',
  [
    'nucfr',
    'uforig',
    'ufdest',
    'codcidorig',
    'codciddest',
    'codevento',
    'codparcorig',
    'codparcdest',
    'codregorig',
    'codregdest',
    'obrigatorio',
    'distancia',
  ],
  { unique: true },
)
@Entity('TGFRCF', { schema: 'SANKHYA' })
export class TgfrcfEntity {
  @Column('int', { primary: true, name: 'NUCFR' })
  nucfr: number;

  @Column('smallint', { primary: true, name: 'UFORIG', default: () => '(0)' })
  uforig: number;

  @Column('smallint', { primary: true, name: 'UFDEST', default: () => '(0)' })
  ufdest: number;

  @Column('int', { primary: true, name: 'CODCIDORIG', default: () => '(0)' })
  codcidorig: number;

  @Column('int', { primary: true, name: 'CODCIDDEST', default: () => '(0)' })
  codciddest: number;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('int', { primary: true, name: 'CODPARCORIG', default: () => '(0)' })
  codparcorig: number;

  @Column('int', { primary: true, name: 'CODPARCDEST', default: () => '(0)' })
  codparcdest: number;

  @Column('int', { primary: true, name: 'CODREGORIG', default: () => '(0)' })
  codregorig: number;

  @Column('int', { primary: true, name: 'CODREGDEST', default: () => '(0)' })
  codregdest: number;

  @Column('char', {
    primary: true,
    name: 'OBRIGATORIO',
    length: 1,
    default: () => "'N'",
  })
  obrigatorio: string;

  @Column('float', {
    primary: true,
    name: 'DISTANCIA',
    precision: 53,
    default: () => '(0)',
  })
  distancia: number;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @Column('float', { name: 'TEMPO', nullable: true, precision: 53 })
  tempo: number | null;

  @Column('float', { name: 'VLRMIN', nullable: true, precision: 53 })
  vlrmin: number | null;

  @Column('smallint', { name: 'CODFORMFRETE', default: () => '(0)' })
  codformfrete: number;

  @Column('char', { name: 'UNIDTEMPO', nullable: true, length: 2 })
  unidtempo: string | null;

  @Column('char', { name: 'VIA', nullable: true, length: 60 })
  via: string | null;

  @Column('varchar', { name: 'FORMULA', nullable: true, length: 3103 })
  formula: string | null;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfrcfs)
  @JoinColumn([{ name: 'UFORIG', referencedColumnName: 'coduf' }])
  uforig2: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfrcfs2)
  @JoinColumn([{ name: 'UFDEST', referencedColumnName: 'coduf' }])
  ufdest2: TsiufsEntity;

  @ManyToOne(() => TgfcfrEntity, (tgfcfrEntity) => tgfcfrEntity.tgfrcfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCFR', referencedColumnName: 'nucfr' }])
  nucfr2: TgfcfrEntity;

  @ManyToOne(() => TsieveEntity, (tsieveEntity) => tsieveEntity.tgfrcfs)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TsieveEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfrcfs)
  @JoinColumn([{ name: 'CODPARCDEST', referencedColumnName: 'codparc' }])
  codparcdest2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfrcfs2)
  @JoinColumn([{ name: 'CODPARCORIG', referencedColumnName: 'codparc' }])
  codparcorig2: TgfparEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfrcfs)
  @JoinColumn([{ name: 'CODCIDDEST', referencedColumnName: 'codcid' }])
  codciddest2: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfrcfs2)
  @JoinColumn([{ name: 'CODCIDORIG', referencedColumnName: 'codcid' }])
  codcidorig2: TsicidEntity;
}
