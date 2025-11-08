import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdLogstatusosEntity } from './aD_LOGSTATUSOS.entity';
import { AdTcfexecEntity } from './aD_TCFEXEC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcibemEntity } from './tCIBEM.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcfmanEntity } from './tCFMAN.entity';
import { TcfprodosEntity } from './tCFPRODOS.entity';
import { TcfservosEntity } from './tCFSERVOS.entity';
import { TmsacvosEntity } from './tMSACVOS.entity';

@Index('PK_TCFOSCAB', ['nuos'], { unique: true })
@Entity('TCFOSCAB', { schema: 'SANKHYA' })
export class TcfoscabEntity {
  @Column('int', { primary: true, name: 'NUOS' })
  nuos: number;

  @Column('float', { name: 'HORIMETRO', nullable: true, precision: 53 })
  horimetro: number | null;

  @Column('datetime', { name: 'DATAINI', nullable: true })
  dataini: Date | null;

  @Column('datetime', { name: 'PREVISAO', nullable: true })
  previsao: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('varchar', { name: 'MANUTENCAO', nullable: true, length: 10 })
  manutencao: string | null;

  @Column('int', { name: 'OSMANUAL', nullable: true })
  osmanual: number | null;

  @Column('datetime', { name: 'DATAFIN', nullable: true })
  datafin: Date | null;

  @Column('varchar', { name: 'AUTOMATICO', nullable: true, length: 10 })
  automatico: string | null;

  @Column('smallint', { name: 'CODEMPNEGOC', nullable: true })
  codempnegoc: number | null;

  @Column('int', { name: 'KM', nullable: true })
  km: number | null;

  @Column('int', { name: 'CODMOTORISTA', nullable: true })
  codmotorista: number | null;

  @Column('datetime', { name: 'DTABERTURA', nullable: true })
  dtabertura: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @Column('datetime', { name: 'AD_DATAFINAL', nullable: true })
  adDatafinal: Date | null;

  @Column('int', { name: 'AD_NUNOTASOLCOMPRA', nullable: true })
  adNunotasolcompra: number | null;

  @Column('varchar', { name: 'AD_STATUSGIG', nullable: true, length: 10 })
  adStatusgig: string | null;

  @Column('varchar', { name: 'AD_FINALIZACAO', nullable: true, length: 10 })
  adFinalizacao: string | null;

  @Column('varchar', { name: 'AD_LOCALMANUTENCAO', nullable: true, length: 10 })
  adLocalmanutencao: string | null;

  @Column('datetime', { name: 'AD_DHALTERSTATUS', nullable: true })
  adDhalterstatus: Date | null;

  @Column('varchar', { name: 'AD_BLOQUEIOS', nullable: true, length: 10 })
  adBloqueios: string | null;

  @Column('varchar', { name: 'AD_EXISBEDASH', nullable: true, length: 10 })
  adExisbedash: string | null;

  @Column('varchar', {
    name: 'AD_EXIBEDASH',
    nullable: true,
    length: 10,
    default: () => "'S'",
  })
  adExibedash: string | null;

  @Column('datetime', { name: 'AD_DTFIMPLAN', nullable: true })
  adDtfimplan: Date | null;

  @Column('datetime', { name: 'AD_DTINIPLAN', nullable: true })
  adDtiniplan: Date | null;

  @Column('int', { name: 'AD_OSORIGEM', nullable: true })
  adOsorigem: number | null;

  @Column('datetime', { name: 'AD_DTPLANEJA', nullable: true })
  adDtplaneja: Date | null;

  @OneToMany(
    () => AdLogstatusosEntity,
    (adLogstatusosEntity) => adLogstatusosEntity.nuos2,
  )
  adLogstatusos: AdLogstatusosEntity[];

  @OneToMany(() => AdTcfexecEntity, (adTcfexecEntity) => adTcfexecEntity.nuos2)
  adTcfexecs: AdTcfexecEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcfoscabs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcfoscabs)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfoscabs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfoscabs2)
  @JoinColumn([{ name: 'CODUSUREABRE', referencedColumnName: 'codusu' }])
  codusureabre: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfoscabs3)
  @JoinColumn([{ name: 'CODUSUFINALIZA', referencedColumnName: 'codusu' }])
  codusufinaliza: TsiusuEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcfoscabs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcfoscabs)
  @JoinColumn([{ name: 'AD_NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  adNumcontrato: TcsconEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcfoscabs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfoscabs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcfoscabs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcfmanEntity, (tcfmanEntity) => tcfmanEntity.tcfoscabs)
  @JoinColumn([{ name: 'NUPLANO', referencedColumnName: 'nuplano' }])
  nuplano: TcfmanEntity;

  @OneToMany(() => TcfprodosEntity, (tcfprodosEntity) => tcfprodosEntity.nuos2)
  tcfprodos: TcfprodosEntity[];

  @OneToMany(() => TcfservosEntity, (tcfservosEntity) => tcfservosEntity.nuos2)
  tcfservos: TcfservosEntity[];

  @OneToMany(() => TmsacvosEntity, (tmsacvosEntity) => tmsacvosEntity.nuos2)
  tmsacvos: TmsacvosEntity[];
}
