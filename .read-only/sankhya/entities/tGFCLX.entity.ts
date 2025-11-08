import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftopEntity } from './tGFTOP.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfhbcEntity } from './tGFHBC.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgftitEntity } from './tGFTIT.entity';

@Index('PK_TGFCLX', ['codemp', 'codbco', 'catlanc', 'hist'], { unique: true })
@Entity('TGFCLX', { schema: 'SANKHYA' })
export class TgfclxEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODBCO' })
  codbco: number;

  @Column('smallint', { primary: true, name: 'CATLANC' })
  catlanc: number;

  @Column('varchar', { primary: true, name: 'HIST', length: 50 })
  hist: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @Column('int', { name: 'CODTIPOPERBAIXA', nullable: true })
  codtipoperbaixa: number | null;

  @Column('varchar', { name: 'TIPOTRANSACAO', nullable: true, length: 100 })
  tipotransacao: string | null;

  @ManyToOne(() => TgftopEntity, (tgftopEntity) => tgftopEntity.tgfclxes)
  @JoinColumn([
    { name: 'CODTIPOPER', referencedColumnName: 'codtipoper' },
    { name: 'DHTIPOPER', referencedColumnName: 'dhalter' },
  ])
  tgftop: TgftopEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tgfclxes)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco2: TsibcoEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfclxes)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfclxes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfhbcEntity, (tgfhbcEntity) => tgfhbcEntity.tgfclxes)
  @JoinColumn([{ name: 'CODLANC', referencedColumnName: 'codlanc' }])
  codlanc: TgfhbcEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfclxes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfclxes)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfclxes)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfclxes)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;
}
