import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprapoEntity } from './tPRAPO.entity';
import { TpravoEntity } from './tPRAVO.entity';
import { TprconfEntity } from './tPRCONF.entity';
import { TpreiatvEntity } from './tPREIATV.entity';
import { TprhwxaEntity } from './tPRHWXA.entity';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TprwcpEntity } from './tPRWCP.entity';
import { TpratvEntity } from './tPRATV.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TprmtpEntity } from './tPRMTP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TprmerEntity } from './tPRMER.entity';
import { TprropeEntity } from './tPRROPE.entity';
import { TprsteEntity } from './tPRSTE.entity';

@Index('PK_TPRIATV', ['idiatv'], { unique: true })
@Index('TPRIATV_I01', ['idexecwflow'], {})
@Index('TPRIATV_I02', ['idiproc'], {})
@Entity('TPRIATV', { schema: 'SANKHYA' })
export class TpriatvEntity {
  @Column('int', { primary: true, name: 'IDIATV' })
  idiatv: number;

  @Column('int', { name: 'IDIPROC', nullable: true })
  idiproc: number | null;

  @Column('varchar', { name: 'IDEXECWFLOW', nullable: true, length: 100 })
  idexecwflow: string | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('int', { name: 'CODEXEC', nullable: true })
  codexec: number | null;

  @Column('datetime', { name: 'DHACEITE', nullable: true })
  dhaceite: Date | null;

  @Column('datetime', { name: 'DHINICIO', nullable: true })
  dhinicio: Date | null;

  @Column('datetime', { name: 'DHFINAL', nullable: true })
  dhfinal: Date | null;

  @Column('int', {
    name: 'TEMPOGASTOMIN',
    nullable: true,
    default: () => '(0)',
  })
  tempogastomin: number | null;

  @Column('datetime', { name: 'DHINIPREV', nullable: true })
  dhiniprev: Date | null;

  @Column('datetime', { name: 'DHFINPREV', nullable: true })
  dhfinprev: Date | null;

  @OneToMany(() => TprapoEntity, (tprapoEntity) => tprapoEntity.idiatv)
  tprapos: TprapoEntity[];

  @OneToMany(() => TpravoEntity, (tpravoEntity) => tpravoEntity.idiatv)
  tpravos: TpravoEntity[];

  @OneToMany(() => TprconfEntity, (tprconfEntity) => tprconfEntity.idiatv)
  tprconfs: TprconfEntity[];

  @OneToMany(() => TpreiatvEntity, (tpreiatvEntity) => tpreiatvEntity.idiatv)
  tpreiatvs: TpreiatvEntity[];

  @OneToMany(() => TprhwxaEntity, (tprhwxaEntity) => tprhwxaEntity.idiatv2)
  tprhwxas: TprhwxaEntity[];

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tpriatvs)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc2: TpriprocEntity;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tpriatvs)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp: TprwcpEntity;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tpriatvs)
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx: TpratvEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpriatvs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpriatvs2)
  @JoinColumn([{ name: 'CODUSUFIN', referencedColumnName: 'codusu' }])
  codusufin: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpriatvs3)
  @JoinColumn([{ name: 'CODULTEXEC', referencedColumnName: 'codusu' }])
  codultexec: TsiusuEntity;

  @ManyToOne(() => TprmtpEntity, (tprmtpEntity) => tprmtpEntity.tpriatvs)
  @JoinColumn([{ name: 'CODMTP', referencedColumnName: 'codmtp' }])
  codmtp: TprmtpEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tpriatvs)
  @JoinColumn([{ name: 'CODPARCTERC', referencedColumnName: 'codparc' }])
  codparcterc: TgfparEntity;

  @OneToMany(() => TprmerEntity, (tprmerEntity) => tprmerEntity.idiatv)
  tprmers: TprmerEntity[];

  @OneToMany(() => TprropeEntity, (tprropeEntity) => tprropeEntity.idiatv2)
  tprropes: TprropeEntity[];

  @OneToMany(
    () => TprsteEntity,
    (tprsteEntity) => tprsteEntity.idatvstatusnormal,
  )
  tprstes: TprsteEntity[];
}
