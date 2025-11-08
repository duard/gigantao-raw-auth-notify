import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcfdocEntity } from './tCFDOC.entity';
import { TcspapEntity } from './tCSPAP.entity';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TfpfdpEntity } from './tFPFDP.entity';
import { TfpfdsEntity } from './tFPFDS.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TgaartEntity } from './tGAART.entity';
import { TgfaidEntity } from './tGFAID.entity';
import { TgfajaEntity } from './tGFAJA.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcajaEntity } from './tGFCAJA.entity';
import { TgfcipmEntity } from './tGFCIPM.entity';
import { TgfcrestcomstEntity } from './tGFCRESTCOMST.entity';
import { TgfemdfEntity } from './tGFEMDF.entity';
import { TgffpiEntity } from './tGFFPI.entity';
import { TgficmEntity } from './tGFICM.entity';
import { TgfidiEntity } from './tGFIDI.entity';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TgfrcfEntity } from './tGFRCF.entity';
import { TgfufpEntity } from './tGFUFP.entity';
import { TgfurlEntity } from './tGFURL.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiferEntity } from './tSIFER.entity';
import { TsigufEntity } from './tSIGUF.entity';
import { TsiiufEntity } from './tSIIUF.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiufuEntity } from './tSIUFU.entity';

@Index('PK_TSIUFS', ['coduf'], { unique: true })
@Index('TSIUFS_I01', ['codibge'], {})
@Entity('TSIUFS', { schema: 'SANKHYA' })
export class TsiufsEntity {
  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('char', { name: 'UF', length: 2 })
  uf: string;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 40 })
  descricao: string | null;

  @Column('smallint', { name: 'CODIBGE', nullable: true })
  codibge: number | null;

  @Column('varchar', { name: 'CODSTGNRE', nullable: true, length: 10 })
  codstgnre: string | null;

  @Column('int', { name: 'CODDETGNRE', nullable: true })
  coddetgnre: number | null;

  @Column('int', { name: 'CODPRODGNRE', nullable: true })
  codprodgnre: number | null;

  @Column('varchar', { name: 'PROTOCOLOCONVENIO', nullable: true, length: 30 })
  protocoloconvenio: string | null;

  @Column('char', { name: 'VALSITCADSEFAZ', length: 1, default: () => "'N'" })
  valsitcadsefaz: string;

  @Column('char', { name: 'ESTORNONFE', length: 1, default: () => "'N'" })
  estornonfe: string;

  @Column('varchar', { name: 'GERINFCAMPADICGNRE', nullable: true, length: 1 })
  gerinfcampadicgnre: string | null;

  @Column('int', { name: 'CODCAMPOEXTRAGNRE', nullable: true })
  codcampoextragnre: number | null;

  @Column('varchar', { name: 'VALORCAMPOEXTRA', nullable: true, length: 1 })
  valorcampoextra: string | null;

  @Column('varchar', { name: 'VERSAOGNRE', nullable: true, length: 3 })
  versaognre: string | null;

  @Column('int', { name: 'CODFCPSTGNRE', nullable: true })
  codfcpstgnre: number | null;

  @Column('char', { name: 'USAWEBSERVICEGNRE', nullable: true, length: 1 })
  usawebservicegnre: string | null;

  @Column('char', { name: 'TIPOINFO', nullable: true, length: 1 })
  tipoinfo: string | null;

  @Column('smallint', { name: 'TIPODOC', nullable: true })
  tipodoc: number | null;

  @Column('int', { name: 'CODCAMPOEXTRAGNRE2', nullable: true })
  codcampoextragnre2: number | null;

  @Column('varchar', { name: 'CODRECDIME', nullable: true, length: 20 })
  codrecdime: string | null;

  @Column('varchar', { name: 'CODCLSVENCDIME', nullable: true, length: 20 })
  codclsvencdime: string | null;

  @Column('varchar', { name: 'CODRECDIMEFCPST', nullable: true, length: 20 })
  codrecdimefcpst: string | null;

  @Column('varchar', {
    name: 'CODCLSVENCDIMEFCPST',
    nullable: true,
    length: 20,
  })
  codclsvencdimefcpst: string | null;

  @Column('text', { name: 'VLRPERSGNRE', nullable: true })
  vlrpersgnre: string | null;

  @Column('int', { name: 'TABPRECPMC', nullable: true })
  tabprecpmc: number | null;

  @Column('int', { name: 'TABPRECOPF', nullable: true })
  tabprecopf: number | null;

  @OneToMany(() => TcfdocEntity, (tcfdocEntity) => tcfdocEntity.coduf)
  tcfdocs: TcfdocEntity[];

  @OneToMany(() => TcspapEntity, (tcspapEntity) => tcspapEntity.coduf)
  tcspaps: TcspapEntity[];

  @OneToMany(() => TcspapEntity, (tcspapEntity) => tcspapEntity.ufrg)
  tcspaps2: TcspapEntity[];

  @OneToMany(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.ufcps)
  tfcbcos: TfcbcoEntity[];

  @OneToMany(() => TfpfdpEntity, (tfpfdpEntity) => tfpfdpEntity.coduf2)
  tfpfdps: TfpfdpEntity[];

  @OneToMany(() => TfpfdsEntity, (tfpfdsEntity) => tfpfdsEntity.coduf2)
  tfpfds: TfpfdsEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.ufrg)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.ufcps)
  tfpfuns2: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.ufpporte)
  tfpfuns3: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.ufcnh)
  tfpfuns4: TfpfunEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.ufpporte,
  )
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TfpreqadmEntity, (tfpreqadmEntity) => tfpreqadmEntity.ufnasc)
  tfpreqadms2: TfpreqadmEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.ufendereco,
  )
  tfpreqadms3: TfpreqadmEntity[];

  @OneToMany(() => TfpreqadmEntity, (tfpreqadmEntity) => tfpreqadmEntity.ufcps)
  tfpreqadms4: TfpreqadmEntity[];

  @OneToMany(() => TfpreqadmEntity, (tfpreqadmEntity) => tfpreqadmEntity.ufrg)
  tfpreqadms5: TfpreqadmEntity[];

  @OneToMany(() => TfpreqadmEntity, (tfpreqadmEntity) => tfpreqadmEntity.ufcnh)
  tfpreqadms6: TfpreqadmEntity[];

  @OneToMany(() => TgaartEntity, (tgaartEntity) => tgaartEntity.coduf)
  tgaarts: TgaartEntity[];

  @OneToMany(() => TgfaidEntity, (tgfaidEntity) => tgfaidEntity.coduf2)
  tgfas: TgfaidEntity[];

  @OneToMany(() => TgfajaEntity, (tgfajaEntity) => tgfajaEntity.coduf2)
  tgfajas: TgfajaEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.ufveiculo)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.filcodufdest)
  tgfcajas: TgfcajaEntity[];

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.filcoduforig)
  tgfcajas2: TgfcajaEntity[];

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.coduf)
  tgfcajas3: TgfcajaEntity[];

  @OneToMany(() => TgfcipmEntity, (tgfcipmEntity) => tgfcipmEntity.coduf2)
  tgfcipms: TgfcipmEntity[];

  @OneToMany(
    () => TgfcrestcomstEntity,
    (tgfcrestcomstEntity) => tgfcrestcomstEntity.coduf,
  )
  tgfcrestcomsts: TgfcrestcomstEntity[];

  @OneToMany(() => TgfemdfEntity, (tgfemdfEntity) => tgfemdfEntity.ufeve)
  tgfemdfs: TgfemdfEntity[];

  @OneToMany(() => TgffpiEntity, (tgffpiEntity) => tgffpiEntity.coduf2)
  tgffpis: TgffpiEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.uforig2)
  tgficms: TgficmEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.ufdest2)
  tgficms2: TgficmEntity[];

  @OneToMany(() => TgfidiEntity, (tgfidiEntity) => tgfidiEntity.codufdesemb)
  tgfidis: TgfidiEntity[];

  @OneToMany(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.uffinal)
  tgfmdfes: TgfmdfeEntity[];

  @OneToMany(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.ufinicial)
  tgfmdfes2: TgfmdfeEntity[];

  @OneToMany(() => TgfrcfEntity, (tgfrcfEntity) => tgfrcfEntity.uforig2)
  tgfrcfs: TgfrcfEntity[];

  @OneToMany(() => TgfrcfEntity, (tgfrcfEntity) => tgfrcfEntity.ufdest2)
  tgfrcfs2: TgfrcfEntity[];

  @OneToMany(() => TgfufpEntity, (tgfufpEntity) => tgfufpEntity.coduf2)
  tgfufps: TgfufpEntity[];

  @OneToMany(() => TgfurlEntity, (tgfurlEntity) => tgfurlEntity.coduf2)
  tgfurls: TgfurlEntity[];

  @OneToMany(() => TsicidEntity, (tsicidEntity) => tsicidEntity.uf2)
  tsics: TsicidEntity[];

  @OneToMany(() => TsiferEntity, (tsiferEntity) => tsiferEntity.coduf2)
  tsifers: TsiferEntity[];

  @OneToMany(() => TsigufEntity, (tsigufEntity) => tsigufEntity.coduf)
  tsigufs: TsigufEntity[];

  @OneToMany(() => TsiiufEntity, (tsiiufEntity) => tsiiufEntity.coduf2)
  tsiiufs: TsiiufEntity[];

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tsiufs)
  @JoinColumn([{ name: 'CODPAIS', referencedColumnName: 'codpais' }])
  codpais: TsipaiEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tsiufs)
  @JoinColumn([{ name: 'TIPTITGNREFCPST', referencedColumnName: 'codtiptit' }])
  tiptitgnrefcpst: TgftitEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsiufs)
  @JoinColumn([{ name: 'CODPARCSECRECEST', referencedColumnName: 'codparc' }])
  codparcsecrecest: TgfparEntity;

  @OneToMany(() => TsiufuEntity, (tsiufuEntity) => tsiufuEntity.coduf2)
  tsiufus: TsiufuEntity[];
}
