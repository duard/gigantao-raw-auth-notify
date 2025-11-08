import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index(
  'PK_TGFGIR1',
  ['codtipoper', 'dtneg', 'codemp', 'codprod', 'codlocalorig', 'controle'],
  {
    unique: true,
  },
)
@Index('TGFGIR_I01', ['codprod', 'dtneg'], {})
@Index('TGFGIR1_I01', ['dtneg', 'codprod', 'controle', 'codlocalorig'], {})
@Entity('TGFGIR1', { schema: 'SANKHYA' })
export class Tgfgir1Entity {
  @Column('datetime', { primary: true, name: 'DTNEG' })
  dtneg: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODLOCALORIG' })
  codlocalorig: number;

  @Column('char', { primary: true, name: 'CONTROLE', length: 30 })
  controle: string;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('int', { name: 'POPULARIDADE', nullable: true })
  popularidade: number | null;

  @Column('float', { name: 'MARGEMCONTRIB', nullable: true, precision: 53 })
  margemcontrib: number | null;

  @Column('float', { name: 'CUSTOVARIAVEL', nullable: true, precision: 53 })
  custovariavel: number | null;

  @Column('float', { name: 'LUCRO', nullable: true, precision: 53 })
  lucro: number | null;

  @Column('float', { name: 'CUSREP', nullable: true, precision: 53 })
  cusrep: number | null;

  @Column('float', { name: 'CUSGER', nullable: true, precision: 53 })
  cusger: number | null;

  @Column('float', { name: 'CUSVARIAVEL', nullable: true, precision: 53 })
  cusvariavel: number | null;

  @Column('float', { name: 'CUSSEMICM', nullable: true, precision: 53 })
  cussemicm: number | null;

  @Column('float', { name: 'CUSMEDICM', nullable: true, precision: 53 })
  cusmedicm: number | null;

  @Column('float', { name: 'ENTRADASEMICMS', nullable: true, precision: 53 })
  entradasemicms: number | null;

  @Column('float', { name: 'ENTRADACOMICMS', nullable: true, precision: 53 })
  entradacomicms: number | null;

  @Column('char', { name: 'CURVAQTD', nullable: true, length: 1 })
  curvaqtd: string | null;

  @Column('char', { name: 'CURVATOT', nullable: true, length: 1 })
  curvatot: string | null;

  @Column('char', { name: 'CURVAQTDMED', nullable: true, length: 1 })
  curvaqtdmed: string | null;

  @Column('char', { name: 'CURVATOTMED', nullable: true, length: 1 })
  curvatotmed: string | null;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfgirs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfgirs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfgirs)
  @JoinColumn([{ name: 'CODLOCALORIG', referencedColumnName: 'codlocal' }])
  codlocalorig2: TgflocEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfgirs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
