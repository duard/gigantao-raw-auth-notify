import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfciotEntity } from './tGFCIOT.entity';
import { TgfcombEntity } from './tGFCOMB.entity';
import { TgfcontrEntity } from './tGFCONTR.entity';
import { TgfemdfEntity } from './tGFEMDF.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfviagEntity } from './tGFVIAG.entity';
import { TsiufsEntity } from './tSIUFS.entity';
import { TgfmdfelacEntity } from './tGFMDFELAC.entity';
import { TgfmdfesegEntity } from './tGFMDFESEG.entity';
import { TgfmdfevalpEntity } from './tGFMDFEVALP.entity';
import { TgfmdfpgfreEntity } from './tGFMDFPGFRE.entity';
import { TgfnmdfeEntity } from './tGFNMDFE.entity';
import { TgfomdfEntity } from './tGFOMDF.entity';
import { TgftercarEntity } from './tGFTERCAR.entity';
import { TgfterdescEntity } from './tGFTERDESC.entity';
import { TgfucvEntity } from './tGFUCV.entity';
import { TgfufpEntity } from './tGFUFP.entity';
import { TgfutvEntity } from './tGFUTV.entity';

@Index('PK_TGFMDFE', ['nuviag', 'seqmdfe'], { unique: true })
@Entity('TGFMDFE', { schema: 'SANKHYA' })
export class TgfmdfeEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('int', { name: 'NUMMDFE' })
  nummdfe: number;

  @Column('char', { name: 'STATUSMDFE', length: 1, default: () => "'0'" })
  statusmdfe: string;

  @Column('int', { name: 'NUMALEATORIO', nullable: true })
  numaleatorio: number | null;

  @Column('varchar', { name: 'CHAVEMDFE', nullable: true, length: 44 })
  chavemdfe: string | null;

  @Column('datetime', { name: 'DHEMISS', nullable: true })
  dhemiss: Date | null;

  @Column('char', {
    name: 'TIPEMISS',
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  tipemiss: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 15 })
  nrorecibo: string | null;

  @Column('datetime', { name: 'DHRECIBO', nullable: true })
  dhrecibo: Date | null;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'NULOTEMDFE', nullable: true })
  nulotemdfe: number | null;

  @Column('text', { name: 'XMLPROTAUT', nullable: true })
  xmlprotaut: string | null;

  @Column('text', { name: 'XMLENVCLI', nullable: true })
  xmlenvcli: string | null;

  @Column('varchar', { name: 'UNMED', nullable: true, length: 2 })
  unmed: string | null;

  @Column('float', { name: 'PESOBRUTOTOT', nullable: true, precision: 53 })
  pesobrutotot: number | null;

  @Column('int', { name: 'CODCIDENCERRAMENTO', nullable: true })
  codcidencerramento: number | null;

  @Column('varchar', { name: 'CODPORTOEMBARQUE', nullable: true, length: 5 })
  codportoembarque: string | null;

  @Column('varchar', { name: 'CODPORTODESTINO', nullable: true, length: 5 })
  codportodestino: string | null;

  @Column('smallint', { name: 'TIPONAVEGACAO', nullable: true })
  tiponavegacao: number | null;

  @Column('varchar', { name: 'CODPORTOTRANSBORDO', nullable: true, length: 60 })
  codportotransbordo: string | null;

  @Column('varchar', { name: 'IRINNAVIO', nullable: true, length: 10 })
  irinnavio: string | null;

  @Column('text', { name: 'QRCODE', nullable: true })
  qrcode: string | null;

  @Column('char', { name: 'USAPESOBRUTONFE', nullable: true, length: 1 })
  usapesobrutonfe: string | null;

  @Column('varchar', { name: 'TPCARGA', nullable: true, length: 2 })
  tpcarga: string | null;

  @Column('varchar', { name: 'DESCPROD', nullable: true, length: 120 })
  descprod: string | null;

  @Column('varchar', { name: 'EAN', nullable: true, length: 14 })
  ean: string | null;

  @Column('varchar', { name: 'NCM', nullable: true, length: 8 })
  ncm: string | null;

  @Column('varchar', { name: 'CEPCAR', nullable: true, length: 8 })
  cepcar: string | null;

  @Column('float', { name: 'LATCAR', nullable: true, precision: 53 })
  latcar: number | null;

  @Column('float', { name: 'LONGCAR', nullable: true, precision: 53 })
  longcar: number | null;

  @Column('varchar', { name: 'CEPDESCAR', nullable: true, length: 8 })
  cepdescar: string | null;

  @Column('float', { name: 'LATDESCAR', nullable: true, precision: 53 })
  latdescar: number | null;

  @Column('float', { name: 'LONDESGCAR', nullable: true, precision: 53 })
  londesgcar: number | null;

  @Column('varchar', { name: 'AVERBADOTMS', nullable: true, length: 10 })
  averbadotms: string | null;

  @Column('varchar', { name: 'PROTOCOLO', nullable: true, length: 100 })
  protocolo: string | null;

  @Column('datetime', { name: 'DHPROTOCOLO', nullable: true })
  dhprotocolo: Date | null;

  @Column('char', { name: 'INDCARREGPOST', nullable: true, length: 1 })
  indcarregpost: string | null;

  @Column('int', { name: 'MUNFINAL', nullable: true })
  munfinal: number | null;

  @Column('int', { name: 'MUNINICIAL', nullable: true })
  muninicial: number | null;

  @OneToMany(() => TgfciotEntity, (tgfciotEntity) => tgfciotEntity.tgfmdfe)
  tgfciots: TgfciotEntity[];

  @OneToMany(() => TgfcombEntity, (tgfcombEntity) => tgfcombEntity.tgfmdfe)
  tgfcombs: TgfcombEntity[];

  @OneToMany(() => TgfcontrEntity, (tgfcontrEntity) => tgfcontrEntity.tgfmdfe)
  tgfcontrs: TgfcontrEntity[];

  @OneToMany(() => TgfemdfEntity, (tgfemdfEntity) => tgfemdfEntity.tgfmdfe)
  tgfemdfs: TgfemdfEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmdfes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfviagEntity, (tgfviagEntity) => tgfviagEntity.tgfmdfes)
  @JoinColumn([{ name: 'NUVIAG', referencedColumnName: 'nuviag' }])
  nuviag2: TgfviagEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfmdfes)
  @JoinColumn([{ name: 'UFFINAL', referencedColumnName: 'coduf' }])
  uffinal: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfmdfes2)
  @JoinColumn([{ name: 'UFINICIAL', referencedColumnName: 'coduf' }])
  ufinicial: TsiufsEntity;

  @OneToMany(
    () => TgfmdfelacEntity,
    (tgfmdfelacEntity) => tgfmdfelacEntity.tgfmdfe,
  )
  tgfmdfelacs: TgfmdfelacEntity[];

  @OneToMany(
    () => TgfmdfesegEntity,
    (tgfmdfesegEntity) => tgfmdfesegEntity.tgfmdfe,
  )
  tgfmdfesegs: TgfmdfesegEntity[];

  @OneToMany(
    () => TgfmdfevalpEntity,
    (tgfmdfevalpEntity) => tgfmdfevalpEntity.tgfmdfe,
  )
  tgfmdfevalps: TgfmdfevalpEntity[];

  @OneToMany(
    () => TgfmdfpgfreEntity,
    (tgfmdfpgfreEntity) => tgfmdfpgfreEntity.tgfmdfe,
  )
  tgfmdfpgfres: TgfmdfpgfreEntity[];

  @OneToMany(() => TgfnmdfeEntity, (tgfnmdfeEntity) => tgfnmdfeEntity.tgfmdfe)
  tgfnmdfes: TgfnmdfeEntity[];

  @OneToMany(() => TgfomdfEntity, (tgfomdfEntity) => tgfomdfEntity.tgfmdfe)
  tgfomdfs: TgfomdfEntity[];

  @OneToMany(
    () => TgftercarEntity,
    (tgftercarEntity) => tgftercarEntity.tgfmdfe,
  )
  tgftercars: TgftercarEntity[];

  @OneToMany(
    () => TgfterdescEntity,
    (tgfterdescEntity) => tgfterdescEntity.tgfmdfe,
  )
  tgfterdescs: TgfterdescEntity[];

  @OneToMany(() => TgfucvEntity, (tgfucvEntity) => tgfucvEntity.tgfmdfe)
  tgfucvs: TgfucvEntity[];

  @OneToMany(() => TgfufpEntity, (tgfufpEntity) => tgfufpEntity.tgfmdfe)
  tgfufps: TgfufpEntity[];

  @OneToMany(() => TgfutvEntity, (tgfutvEntity) => tgfutvEntity.tgfmdfe)
  tgfutvs: TgfutvEntity[];
}
