import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcplEntity } from './tGFCPL.entity';
import { TgfcrtEntity } from './tGFCRT.entity';
import { TgfdesEntity } from './tGFDES.entity';
import { TgfdmgEntity } from './tGFDMG.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgficmEntity } from './tGFICM.entity';
import { TgfifeEntity } from './tGFIFE.entity';
import { TgfimcEntity } from './tGFIMC.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfnpvEntity } from './tGFNPV.entity';
import { TgftppEntity } from './tGFTPP.entity';
import { TsiregEntity } from './tSIREG.entity';
import { TgfpaemEntity } from './tGFPAEM.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfpptEntity } from './tGFPPT.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgftabEntity } from './tGFTAB.entity';
import { TgftpaEntity } from './tGFTPA.entity';
import { TgftpvEntity } from './tGFTPV.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TGFNTA', ['codtab'], { unique: true })
@Index('TGFNTA_I01', ['codtabflex'], {})
@Entity('TGFNTA', { schema: 'SANKHYA' })
export class TgfntaEntity {
  @Column('smallint', { primary: true, name: 'CODTAB' })
  codtab: number;

  @Column('char', { name: 'NOMETAB', length: 40 })
  nometab: string;

  @Column('char', { name: 'OBS', nullable: true, length: 255 })
  obs: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'CODTABFLEX', nullable: true })
  codtabflex: number | null;

  @Column('smallint', { name: 'DECVENDA', default: () => '(0)' })
  decvenda: number;

  @Column('char', { name: 'INTEGRAECONECT', length: 1, default: () => "'N'" })
  integraeconect: string;

  @Column('smallint', { name: 'CODMOEDA', default: () => '(0)' })
  codmoeda: number;

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codtabcot2)
  tgfcpls: TgfcplEntity[];

  @OneToMany(() => TgfcrtEntity, (tgfcrtEntity) => tgfcrtEntity.codtab2)
  tgfcrts: TgfcrtEntity[];

  @OneToMany(() => TgfdesEntity, (tgfdesEntity) => tgfdesEntity.codtab2)
  tgfdes: TgfdesEntity[];

  @OneToMany(() => TgfdmgEntity, (tgfdmgEntity) => tgfdmgEntity.codtab2)
  tgfdmgs: TgfdmgEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codtab)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codtabcalc)
  tgfemps2: TgfempEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codtabstfarpop)
  tgficms: TgficmEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codtab)
  tgficms2: TgficmEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codtabicms)
  tgficms3: TgficmEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codtabstant)
  tgficms4: TgficmEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codtabstufdest)
  tgficms5: TgficmEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codtabstpmpf)
  tgficms6: TgficmEntity[];

  @OneToMany(() => TgfifeEntity, (tgfifeEntity) => tgfifeEntity.codtab)
  tgfifes: TgfifeEntity[];

  @OneToMany(() => TgfimcEntity, (tgfimcEntity) => tgfimcEntity.codtab)
  tgfimcs: TgfimcEntity[];

  @OneToMany(() => TgflocEntity, (tgflocEntity) => tgflocEntity.codtab)
  tgflocs: TgflocEntity[];

  @OneToMany(() => TgfnpvEntity, (tgfnpvEntity) => tgfnpvEntity.codtab)
  tgfnpvs: TgfnpvEntity[];

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfntas)
  @JoinColumn([{ name: 'CODTABFLEX', referencedColumnName: 'codtab' }])
  codtabflex2: TgfntaEntity;

  @OneToMany(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.codtabflex2)
  tgfntas: TgfntaEntity[];

  @ManyToOne(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tgfntas)
  @JoinColumn([{ name: 'CODTIPPARC', referencedColumnName: 'codtipparc' }])
  codtipparc: TgftppEntity;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tgfntas)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg: TsiregEntity;

  @OneToMany(() => TgfpaemEntity, (tgfpaemEntity) => tgfpaemEntity.codtab)
  tgfpaems: TgfpaemEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codtab)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codtabst2)
  tgfpars2: TgfparEntity[];

  @OneToMany(() => TgfpptEntity, (tgfpptEntity) => tgfpptEntity.codtab)
  tgfppts: TgfpptEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codtab2)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgftabEntity, (tgftabEntity) => tgftabEntity.codtaborig)
  tgftabs: TgftabEntity[];

  @OneToMany(() => TgftabEntity, (tgftabEntity) => tgftabEntity.codtab2)
  tgftabs2: TgftabEntity[];

  @OneToMany(() => TgftpaEntity, (tgftpaEntity) => tgftpaEntity.codtab)
  tgftpas: TgftpaEntity[];

  @OneToMany(() => TgftppEntity, (tgftppEntity) => tgftppEntity.codtab)
  tgftpps: TgftppEntity[];

  @OneToMany(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.codtab)
  tgftpvs: TgftpvEntity[];

  @OneToMany(() => TsicusEntity, (tsicusEntity) => tsicusEntity.codtab)
  tsicuses: TsicusEntity[];

  @OneToMany(() => TsiregEntity, (tsiregEntity) => tsiregEntity.codtab)
  tsiregs: TsiregEntity[];

  @OneToMany(() => TsiregEntity, (tsiregEntity) => tsiregEntity.codtabmin)
  tsiregs2: TsiregEntity[];
}
