import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { GfratendimentoclienteEntity } from './gFRATENDIMENTOCLIENTE.entity';
import { GfrvendEntity } from './gFRVEND.entity';
import { TcsagfEntity } from './tCSAGF.entity';
import { TcscnvEntity } from './tCSCNV.entity';
import { TcsieEntity } from './tCSIE.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcspapEntity } from './tCSPAP.entity';
import { TcsvpcEntity } from './tCSVPC.entity';
import { TgfagdEntity } from './tGFAGD.entity';
import { TgfasaEntity } from './tGFASA.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcasEntity } from './tGFCAS.entity';
import { TgfcvgEntity } from './tGFCVG.entity';
import { TgfextEntity } from './tGFEXT.entity';
import { TgffcvEntity } from './tGFFCV.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfmstEntity } from './tGFMST.entity';
import { TgfnpvEntity } from './tGFNPV.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfresEntity } from './tGFRES.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfrpvEntity } from './tGFRPV.entity';
import { TgfsapEntity } from './tGFSAP.entity';
import { TgftelEntity } from './tGFTEL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgffocEntity } from './tGFFOC.entity';
import { TgffdmEntity } from './tGFFDM.entity';
import { TsiregEntity } from './tSIREG.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TjcapjEntity } from './tJCAPJ.entity';
import { TjcprvEntity } from './tJCPRV.entity';

@Index('PK_TGFVEN', ['codvend'], { unique: true })
@Index('TGFVEN_I02', ['codparc'], {})
@Index('TGFVEN_I03', ['codfunc', 'codvend'], {})
@Index('TGFVEN_I04', ['codger'], {})
@Entity('TGFVEN', { schema: 'SANKHYA' })
export class TgfvenEntity {
  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('char', { name: 'TIPVEND', nullable: true, length: 1 })
  tipvend: string | null;

  @Column('char', { name: 'APELIDO', length: 15 })
  apelido: string;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('float', { name: 'COMVENDA', nullable: true, precision: 53 })
  comvenda: number | null;

  @Column('float', { name: 'COMGER', nullable: true, precision: 53 })
  comger: number | null;

  @Column('float', { name: 'PARTICMETA', nullable: true, precision: 53 })
  particmeta: number | null;

  @Column('smallint', { name: 'CODGER', default: () => '(0)' })
  codger: number;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('smallint', { name: 'SENHA', nullable: true })
  senha: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'TIPCALC', length: 1, default: () => "'N'" })
  tipcalc: string;

  @Column('smallint', { name: 'CODCARGAHOR', default: () => '(0)' })
  codcargahor: number;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('float', { name: 'PERCCUSVAR', nullable: true, precision: 53 })
  perccusvar: number | null;

  @Column('smallint', { name: 'DIACOM', nullable: true })
  diacom: number | null;

  @Column('float', { name: 'COMISSAO2', nullable: true, precision: 53 })
  comissao2: number | null;

  @Column('char', { name: 'TIPVALOR', length: 1, default: () => "'U'" })
  tipvalor: string;

  @Column('money', { name: 'VLRHORA', nullable: true })
  vlrhora: number | null;

  @Column('float', { name: 'SALDODISP', precision: 53, default: () => '(0)' })
  saldodisp: number;

  @Column('float', { name: 'PROVACRESC', precision: 53, default: () => '(0)' })
  provacresc: number;

  @Column('float', { name: 'DESCMAX', nullable: true, precision: 53 })
  descmax: number | null;

  @Column('float', { name: 'ACRESCMAX', nullable: true, precision: 53 })
  acrescmax: number | null;

  @Column('char', { name: 'GRUPORETENCAO', nullable: true, length: 15 })
  gruporetencao: string | null;

  @Column('varchar', { name: 'GRUPODESCVEND', nullable: true, length: 15 })
  grupodescvend: string | null;

  @Column('float', { name: 'PERCTROCA', precision: 53, default: () => '(0)' })
  perctroca: number;

  @Column('char', { name: 'COMCM', length: 1, default: () => "'N'" })
  comcm: string;

  @Column('char', { name: 'RECHREXTRA', length: 1, default: () => "'S'" })
  rechrextra: string;

  @Column('char', { name: 'TIPFECHCOM', length: 1, default: () => "'N'" })
  tipfechcom: string;

  @Column('char', {
    name: 'ATUACOMPRADOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  atuacomprador: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('float', { name: 'SALDODISPCAC', nullable: true, precision: 53 })
  saldodispcac: number | null;

  @Column('float', { name: 'PROVACRESCCAC', nullable: true, precision: 53 })
  provacresccac: number | null;

  @OneToMany(
    () => GfratendimentoclienteEntity,
    (gfratendimentoclienteEntity) => gfratendimentoclienteEntity.codvend,
  )
  gfratendimentoclientes: GfratendimentoclienteEntity[];

  @OneToOne(() => GfrvendEntity, (gfrvendEntity) => gfrvendEntity.codvend2)
  gfrvend: GfrvendEntity;

  @OneToMany(() => TcsagfEntity, (tcsagfEntity) => tcsagfEntity.codvend2)
  tcsagfs: TcsagfEntity[];

  @OneToMany(() => TcscnvEntity, (tcscnvEntity) => tcscnvEntity.codvend)
  tcscnvs: TcscnvEntity[];

  @OneToMany(() => TcsieEntity, (tcsieEntity) => tcsieEntity.codvend2)
  tcsies: TcsieEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codvend)
  tcsoses: TcsoseEntity[];

  @OneToMany(() => TcspapEntity, (tcspapEntity) => tcspapEntity.codvend)
  tcspaps: TcspapEntity[];

  @OneToMany(() => TcsvpcEntity, (tcsvpcEntity) => tcsvpcEntity.codvend2)
  tcsvpcs: TcsvpcEntity[];

  @OneToMany(() => TgfagdEntity, (tgfagdEntity) => tgfagdEntity.codvend)
  tgfagds: TgfagdEntity[];

  @OneToMany(() => TgfasaEntity, (tgfasaEntity) => tgfasaEntity.codvend)
  tgfasas: TgfasaEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codvend)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codvendtec)
  tgfcabs2: TgfcabEntity[];

  @OneToMany(() => TgfcasEntity, (tgfcasEntity) => tgfcasEntity.codexec2)
  tgfcas: TgfcasEntity[];

  @OneToMany(() => TgfcvgEntity, (tgfcvgEntity) => tgfcvgEntity.codvend2)
  tgfcvgs: TgfcvgEntity[];

  @OneToMany(() => TgfextEntity, (tgfextEntity) => tgfextEntity.codvend2)
  tgfexts: TgfextEntity[];

  @OneToMany(() => TgffcvEntity, (tgffcvEntity) => tgffcvEntity.codvend2)
  tgffcvs: TgffcvEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codvend)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codvend)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codexec)
  tgfites2: TgfiteEntity[];

  @OneToMany(() => TgfmstEntity, (tgfmstEntity) => tgfmstEntity.codvend2)
  tgfmsts: TgfmstEntity[];

  @OneToMany(() => TgfnpvEntity, (tgfnpvEntity) => tgfnpvEntity.codvend2)
  tgfnpvs: TgfnpvEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codvend)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codassessor)
  tgfpars2: TgfparEntity[];

  @OneToMany(() => TgfresEntity, (tgfresEntity) => tgfresEntity.codvend)
  tgfres: TgfresEntity[];

  @ManyToMany(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfvens)
  @JoinTable({
    name: 'TGFRGV',
    joinColumns: [{ name: 'CODVEND', referencedColumnName: 'codvend' }],
    inverseJoinColumns: [
      { name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' },
    ],
    schema: 'SANKHYA',
  })
  tgfgrus: TgfgruEntity[];

  @OneToMany(() => TgfrpvEntity, (tgfrpvEntity) => tgfrpvEntity.codvend2)
  tgfrpvs: TgfrpvEntity[];

  @OneToMany(() => TgfsapEntity, (tgfsapEntity) => tgfsapEntity.codvend)
  tgfsaps: TgfsapEntity[];

  @OneToMany(() => TgftelEntity, (tgftelEntity) => tgftelEntity.codvend)
  tgftels: TgftelEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfvens)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfvens)
  @JoinColumn([{ name: 'CODGER', referencedColumnName: 'codvend' }])
  codger2: TgfvenEntity;

  @OneToMany(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.codger2)
  tgfvens: TgfvenEntity[];

  @ManyToOne(() => TgffocEntity, (tgffocEntity) => tgffocEntity.tgfvens)
  @JoinColumn([{ name: 'CODFORM', referencedColumnName: 'codform' }])
  codform: TgffocEntity;

  @ManyToOne(() => TgffdmEntity, (tgffdmEntity) => tgffdmEntity.tgfvens)
  @JoinColumn([{ name: 'CODFORMFLEX', referencedColumnName: 'codform' }])
  codformflex: TgffdmEntity;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tgfvens)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg: TsiregEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfvens)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfvens)
  @JoinColumn([{ name: 'CODCENCUSPAD', referencedColumnName: 'codcencus' }])
  codcencuspad: TsicusEntity;

  @OneToMany(() => TjcapjEntity, (tjcapjEntity) => tjcapjEntity.codvend)
  tjcapjs: TjcapjEntity[];

  @OneToMany(() => TjcprvEntity, (tjcprvEntity) => tjcprvEntity.codvend2)
  tjcprvs: TjcprvEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codvend)
  tsiusus: TsiusuEntity[];
}
