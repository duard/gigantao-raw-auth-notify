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
import { TcsaceEntity } from './tCSACE.entity';
import { TcscnvEntity } from './tCSCNV.entity';
import { TcscveEntity } from './tCSCVE.entity';
import { TcseagEntity } from './tCSEAG.entity';
import { TcsfldEntity } from './tCSFLD.entity';
import { TcsiteEntity } from './tCSITE.entity';
import { TcscttEntity } from './tCSCTT.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TcscosEntity } from './tCSCOS.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TcspapEntity } from './tCSPAP.entity';
import { TcspepEntity } from './tCSPEP.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcsoatEntity } from './tCSOAT.entity';
import { TcstpnEntity } from './tCSTPN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcspnpEntity } from './tCSPNP.entity';
import { TcsprnEntity } from './tCSPRN.entity';
import { TcsrpnEntity } from './tCSRPN.entity';
import { TcsspnEntity } from './tCSSPN.entity';
import { TcsumoEntity } from './tCSUMO.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgftelEntity } from './tGFTEL.entity';
import { TgpacoEntity } from './tGPACO.entity';
import { TgpregEntity } from './tGPREG.entity';
import { TmiplaEntity } from './tMIPLA.entity';

@Index('PK_TCSOSE', ['numos'], { unique: true })
@Index('TCSOSE_I_FAT_OS', ['nunota', 'numos'], {})
@Index('TCSOSE_I01', ['codparc', 'codcontato'], {})
@Index('TCSOSE_I02', ['numcontrato', 'numos'], {})
@Index('TCSOSE_I03', ['nunota'], {})
@Index('TCSOSE_I04', ['nufap'], {})
@Index('TCSOSE_I05', ['dtprevista'], {})
@Index('TCSOSE_I06', ['numosrelacionada'], {})
@Index('TCSOSE_I07', ['dhchamada'], {})
@Index('TCSOSE_I08', ['numos', 'tipo'], {})
@Index('TCSOSE_I09', ['nomemodelo'], {})
@Entity('TCSOSE', { schema: 'SANKHYA' })
export class TcsoseEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('char', { name: 'CONTATO', nullable: true, length: 15 })
  contato: string | null;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'P'" })
  situacao: string;

  @Column('int', { name: 'TEMPPREVISTO', nullable: true })
  tempprevisto: number | null;

  @Column('datetime', { name: 'DHCHAMADA' })
  dhchamada: Date;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('datetime', { name: 'DTFECHAMENTO', nullable: true })
  dtfechamento: Date | null;

  @Column('int', { name: 'TEMPGASTO', nullable: true })
  tempgasto: number | null;

  @Column('text', { name: 'DESCRICAO', nullable: true })
  descricao: string | null;

  @Column('datetime', { name: 'DTPREVISTA', nullable: true })
  dtprevista: Date | null;

  @Column('smallint', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('char', { name: 'CODBEM', nullable: true, length: 30 })
  codbem: string | null;

  @Column('char', { name: 'ENDERECO', nullable: true, length: 50 })
  endereco: string | null;

  @Column('char', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('char', { name: 'BAIRRO', nullable: true, length: 20 })
  bairro: string | null;

  @Column('char', { name: 'CIDADE', nullable: true, length: 23 })
  cidade: string | null;

  @Column('char', { name: 'SERIE', nullable: true, length: 25 })
  serie: string | null;

  @Column('smallint', { name: 'NUFAP', nullable: true })
  nufap: number | null;

  @Column('int', { name: 'NUMETAPA', nullable: true })
  numetapa: number | null;

  @Column('char', { name: 'NUMOSCLIENTE', nullable: true, length: 20 })
  numoscliente: string | null;

  @Column('datetime', { name: 'DHFECHAMENTOSLA', nullable: true })
  dhfechamentosla: Date | null;

  @Column('char', { name: 'NOMECONTATO', nullable: true, length: 50 })
  nomecontato: string | null;

  @Column('varchar', { name: 'TELCONTATO', nullable: true, length: 13 })
  telcontato: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('char', { name: 'IDENTIFICADOR', nullable: true, length: 50 })
  identificador: string | null;

  @Column('decimal', {
    name: 'TEMPOSLA',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  temposla: number | null;

  @Column('char', { name: 'POSSUISLA', nullable: true, length: 1 })
  possuisla: string | null;

  @Column('int', { name: 'NUMOSRELACIONADA', nullable: true })
  numosrelacionada: number | null;

  @Column('int', { name: 'TEMPOGASTOSLA', nullable: true })
  tempogastosla: number | null;

  @Column('int', { name: 'CODSERVFLUXO', nullable: true })
  codservfluxo: number | null;

  @Column('smallint', { name: 'VARIACAOFLUXO', nullable: true })
  variacaofluxo: number | null;

  @Column('varchar', { name: 'NOMEMODELO', nullable: true, length: 150 })
  nomemodelo: string | null;

  @Column('int', { name: 'CODPLA', nullable: true })
  codpla: number | null;

  @Column('char', { name: 'MODELOVISIVELAPPOS', nullable: true, length: 1 })
  modelovisivelappos: string | null;

  @Column('varchar', { name: 'IMPACTO', nullable: true, length: 10 })
  impacto: string | null;

  @Column('varchar', { name: 'URGENCIA', nullable: true, length: 10 })
  urgencia: string | null;

  @Column('char', {
    name: 'AD_EXIBEDASH',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  adExibedash: string | null;

  @OneToMany(() => TcsaceEntity, (tcsaceEntity) => tcsaceEntity.numos2)
  tcsaces: TcsaceEntity[];

  @OneToMany(() => TcscnvEntity, (tcscnvEntity) => tcscnvEntity.numos2)
  tcscnvs: TcscnvEntity[];

  @OneToMany(() => TcscveEntity, (tcscveEntity) => tcscveEntity.numosdesinstal2)
  tcscves: TcscveEntity[];

  @OneToMany(() => TcscveEntity, (tcscveEntity) => tcscveEntity.numosinstal2)
  tcscves2: TcscveEntity[];

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.numos)
  tcseags: TcseagEntity[];

  @ManyToMany(() => TcsfldEntity, (tcsfldEntity) => tcsfldEntity.tcsoses)
  @JoinTable({
    name: 'TCSFXO',
    joinColumns: [{ name: 'NUMOS', referencedColumnName: 'numos' }],
    inverseJoinColumns: [{ name: 'CODFLD', referencedColumnName: 'codfld' }],
    schema: 'SANKHYA',
  })
  tcsflds: TcsfldEntity[];

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.numos2)
  tcsites: TcsiteEntity[];

  @ManyToOne(() => TcscttEntity, (tcscttEntity) => tcscttEntity.tcsoses)
  @JoinColumn([
    { name: 'CODPAP', referencedColumnName: 'codpap' },
    { name: 'CODCONTATOPAP', referencedColumnName: 'codcontato' },
  ])
  tcsctt: TcscttEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcsoses)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TcscosEntity, (tcscosEntity) => tcscosEntity.tcsoses)
  @JoinColumn([{ name: 'CODCOS', referencedColumnName: 'codcos' }])
  codcos: TcscosEntity;

  @ManyToOne(() => TcscosEntity, (tcscosEntity) => tcscosEntity.tcsoses2)
  @JoinColumn([{ name: 'CODCOSANT', referencedColumnName: 'codcos' }])
  codcosant: TcscosEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcsoses)
  @JoinColumn([{ name: 'CODPARCATEND', referencedColumnName: 'codparc' }])
  codparcatend: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcsoses2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tcsoses)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TcspapEntity, (tcspapEntity) => tcspapEntity.tcsoses)
  @JoinColumn([{ name: 'CODPAP', referencedColumnName: 'codpap' }])
  codpap: TcspapEntity;

  @ManyToOne(() => TcspepEntity, (tcspepEntity) => tcspepEntity.tcsoses)
  @JoinColumn([{ name: 'CODPROCMAHA', referencedColumnName: 'codproc' }])
  codprocmaha: TcspepEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcsoses)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcsoatEntity, (tcsoatEntity) => tcsoatEntity.tcsoses)
  @JoinColumn([{ name: 'CODOAT', referencedColumnName: 'codoat' }])
  codoat: TcsoatEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcsoses)
  @JoinColumn([{ name: 'NUMOSRELACIONADA', referencedColumnName: 'numos' }])
  numosrelacionada2: TcsoseEntity;

  @OneToMany(
    () => TcsoseEntity,
    (tcsoseEntity) => tcsoseEntity.numosrelacionada2,
  )
  tcsoses: TcsoseEntity[];

  @ManyToOne(() => TcstpnEntity, (tcstpnEntity) => tcstpnEntity.tcsoses)
  @JoinColumn([{ name: 'CODTPN', referencedColumnName: 'codtpn' }])
  codtpn: TcstpnEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsoses)
  @JoinColumn([{ name: 'CODUSUSOLICITANTE', referencedColumnName: 'codusu' }])
  codususolicitante: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsoses2)
  @JoinColumn([{ name: 'CODUSUFECH', referencedColumnName: 'codusu' }])
  codusufech: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsoses3)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codusu' }])
  codusuresp: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsoses4)
  @JoinColumn([{ name: 'CODATEND', referencedColumnName: 'codusu' }])
  codatend: TsiusuEntity;

  @OneToMany(() => TcspnpEntity, (tcspnpEntity) => tcspnpEntity.numos2)
  tcspnps: TcspnpEntity[];

  @OneToMany(() => TcsprnEntity, (tcsprnEntity) => tcsprnEntity.numos2)
  tcsprns: TcsprnEntity[];

  @OneToMany(() => TcsrpnEntity, (tcsrpnEntity) => tcsrpnEntity.numos2)
  tcsrpns: TcsrpnEntity[];

  @OneToOne(() => TcsspnEntity, (tcsspnEntity) => tcsspnEntity.numos2)
  tcsspn: TcsspnEntity;

  @OneToMany(() => TcsumoEntity, (tcsumoEntity) => tcsumoEntity.numos2)
  tcsumos: TcsumoEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.numos)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.numos)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgftelEntity, (tgftelEntity) => tgftelEntity.numos)
  tgftels: TgftelEntity[];

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.numos2)
  tgpacos: TgpacoEntity[];

  @OneToMany(() => TgpregEntity, (tgpregEntity) => tgpregEntity.numos2)
  tgpregs: TgpregEntity[];

  @OneToMany(() => TmiplaEntity, (tmiplaEntity) => tmiplaEntity.numos)
  tmiplas: TmiplaEntity[];
}
