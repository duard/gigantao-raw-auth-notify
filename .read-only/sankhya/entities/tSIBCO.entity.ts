import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpbasEntity } from './tFPBAS.entity';
import { TfpbastesteEntity } from './tFPBASTESTE.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpchqEntity } from './tFPCHQ.entity';
import { TfpinfodescfolEntity } from './tFPINFODESCFOL.entity';
import { TfpmovEntity } from './tFPMOV.entity';
import { TfpmovantEntity } from './tFPMOVANT.entity';
import { TgfbttEntity } from './tGFBTT.entity';
import { TgfclxEntity } from './tGFCLX.entity';
import { Tgfcmc7Entity } from './tGFCMC7.entity';
import { TgfctcEntity } from './tGFCTC.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfocoEntity } from './tGFOCO.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfppgEntity } from './tGFPPG.entity';
import { TimcblEntity } from './tIMCBL.entity';
import { TimlgpEntity } from './tIMLGP.entity';
import { TimltcEntity } from './tIMLTC.entity';
import { TimltpEntity } from './tIMLTP.entity';
import { TsiageEntity } from './tSIAGE.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsiobcEntity } from './tSIOBC.entity';

@Index('PK_TSIBCO', ['codbco'], { unique: true })
@Entity('TSIBCO', { schema: 'SANKHYA' })
export class TsibcoEntity {
  @Column('smallint', { primary: true, name: 'CODBCO' })
  codbco: number;

  @Column('char', { name: 'ABREVIATURA', length: 15 })
  abreviatura: string;

  @Column('char', { name: 'NOMEBCO', length: 40 })
  nomebco: string;

  @Column('smallint', { name: 'CTACMC7INI', nullable: true })
  ctacmc7Ini: number | null;

  @Column('smallint', { name: 'CTACMC7FIM', nullable: true })
  ctacmc7Fim: number | null;

  @OneToMany(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.codbco)
  tfpbas: TfpbasEntity[];

  @OneToMany(
    () => TfpbastesteEntity,
    (tfpbastesteEntity) => tfpbastesteEntity.codbco,
  )
  tfpbastestes: TfpbastesteEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codbco)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpchqEntity, (tfpchqEntity) => tfpchqEntity.codbco)
  tfpchqs: TfpchqEntity[];

  @OneToMany(
    () => TfpinfodescfolEntity,
    (tfpinfodescfolEntity) => tfpinfodescfolEntity.codbco2,
  )
  tfpinfodescfols: TfpinfodescfolEntity[];

  @OneToMany(() => TfpmovEntity, (tfpmovEntity) => tfpmovEntity.codbco)
  tfpmovs: TfpmovEntity[];

  @OneToMany(() => TfpmovantEntity, (tfpmovantEntity) => tfpmovantEntity.codbco)
  tfpmovants: TfpmovantEntity[];

  @OneToMany(() => TgfbttEntity, (tgfbttEntity) => tgfbttEntity.codbco)
  tgfbtts: TgfbttEntity[];

  @OneToMany(() => TgfclxEntity, (tgfclxEntity) => tgfclxEntity.codbco2)
  tgfclxes: TgfclxEntity[];

  @OneToMany(() => Tgfcmc7Entity, (tgfcmc7Entity) => tgfcmc7Entity.codbco2)
  tgfcmcs: Tgfcmc7Entity[];

  @OneToMany(() => TgfctcEntity, (tgfctcEntity) => tgfctcEntity.codbco2)
  tgfctcs: TgfctcEntity[];

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.timbanco)
  tgfctts: TgfcttEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codbco)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfocoEntity, (tgfocoEntity) => tgfocoEntity.codbco2)
  tgfocos: TgfocoEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codbco)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfppgEntity, (tgfppgEntity) => tgfppgEntity.codbcopad)
  tgfppgs: TgfppgEntity[];

  @OneToMany(() => TimcblEntity, (timcblEntity) => timcblEntity.cblbanco)
  timcbls: TimcblEntity[];

  @OneToMany(() => TimlgpEntity, (timlgpEntity) => timlgpEntity.lgpbanco)
  timlgps: TimlgpEntity[];

  @OneToMany(() => TimltcEntity, (timltcEntity) => timltcEntity.ltcbanco)
  timltcs: TimltcEntity[];

  @OneToMany(() => TimltpEntity, (timltpEntity) => timltpEntity.ltprepbanco)
  timltps: TimltpEntity[];

  @OneToMany(() => TsiageEntity, (tsiageEntity) => tsiageEntity.codbco2)
  tsiages: TsiageEntity[];

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.codbco)
  tsictas: TsictaEntity[];

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.codbco)
  tsiobcs: TsiobcEntity[];
}
