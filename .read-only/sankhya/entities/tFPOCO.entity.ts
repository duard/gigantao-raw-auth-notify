import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TfpafgEntity } from './tFPAFG.entity';
import { TfpaftEntity } from './tFPAFT.entity';
import { TfpajuEntity } from './tFPAJU.entity';
import { TfpanxocoEntity } from './tFPANXOCO.entity';
import { TfpattEntity } from './tFPATT.entity';
import { TfpbiodmpEntity } from './tFPBIODMP.entity';
import { TfpferEntity } from './tFPFER.entity';
import { TfpfsuEntity } from './tFPFSU.entity';
import { TfplotEntity } from './tFPLOT.entity';
import { TfphisEntity } from './tFPHIS.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpmanEntity } from './tFPMAN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpcnvEntity } from './tFPCNV.entity';
import { TfppssEntity } from './tFPPSS.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpocorjsEntity } from './tFPOCORJS.entity';
import { TfpponEntity } from './tFPPON.entity';
import { TfppraEntity } from './tFPPRA.entity';
import { TfprpoEntity } from './tFPRPO.entity';
import { TfpsubEntity } from './tFPSUB.entity';

@Index('PK_TFPOCO', ['nuocor'], { unique: true })
@Index('TFPOCO_I01', ['codemp', 'codfunc', 'codhistocor', 'dtinicocor'], {
  unique: true,
})
@Index('TFPOCO_I02', ['nureincid'], {})
@Index('TFPOCO_I03', ['codsind', 'processocnv'], {})
@Index('TGFPOCO_I01', ['nuocor'], { unique: true })
@Entity('TFPOCO', { schema: 'SANKHYA' })
export class TfpocoEntity {
  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { name: 'CODHISTOCOR' })
  codhistocor: number;

  @Column('datetime', { name: 'DTINICOCOR' })
  dtinicocor: Date;

  @Column('datetime', { name: 'DTFINALOCOR', nullable: true })
  dtfinalocor: Date | null;

  @Column('char', { name: 'DESCROCOR', length: 250 })
  descrocor: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { primary: true, name: 'NUOCOR' })
  nuocor: number;

  @Column('char', { name: 'RECORRENTE', length: 1, default: () => "'N'" })
  recorrente: string;

  @Column('datetime', { name: 'DTPREVRET', nullable: true })
  dtprevret: Date | null;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'S'" })
  digitado: string;

  @Column('int', { name: 'NUREINCID', nullable: true })
  nureincid: number | null;

  @Column('char', { name: 'INDEFEITORETRO', length: 1, default: () => "'N'" })
  indefeitoretro: string;

  @Column('char', { name: 'REAJUSTECCT', length: 1, default: () => "'N'" })
  reajustecct: string;

  @Column('int', { name: 'NUFALTA', nullable: true })
  nufalta: number | null;

  @Column('smallint', {
    name: 'ORIGRETIF',
    nullable: true,
    default: () => '(0)',
  })
  origretif: number | null;

  @Column('char', { name: 'ENVESOCIAL', length: 1, default: () => "'N'" })
  envesocial: string;

  @Column('smallint', { name: 'DIASPREVRET', nullable: true })
  diasprevret: number | null;

  @Column('varchar', { name: 'ESPECIALIDADE', nullable: true, length: 80 })
  especialidade: string | null;

  @Column('char', { name: 'FORCADTFIM', length: 1, default: () => "'N'" })
  forcadtfim: string;

  @Column('smallint', { name: 'CODSIND', nullable: true })
  codsind: number | null;

  @Column('varchar', { name: 'PROCESSOCNV', nullable: true, length: 30 })
  processocnv: string | null;

  @Column('datetime', { name: 'DTINTERROMPEFER', nullable: true })
  dtinterrompefer: Date | null;

  @Column('varchar', { name: 'CID', nullable: true, length: 5 })
  cid: string | null;

  @OneToMany(() => TfpafgEntity, (tfpafgEntity) => tfpafgEntity.nuocor)
  tfpafgs: TfpafgEntity[];

  @OneToOne(() => TfpaftEntity, (tfpaftEntity) => tfpaftEntity.nuocor2)
  tfpaft: TfpaftEntity;

  @OneToMany(() => TfpajuEntity, (tfpajuEntity) => tfpajuEntity.nuocor)
  tfpajus: TfpajuEntity[];

  @OneToMany(
    () => TfpanxocoEntity,
    (tfpanxocoEntity) => tfpanxocoEntity.nuocor2,
  )
  tfpanxocos: TfpanxocoEntity[];

  @OneToMany(() => TfpattEntity, (tfpattEntity) => tfpattEntity.nuocor2)
  tfpatts: TfpattEntity[];

  @OneToMany(() => TfpbiodmpEntity, (tfpbiodmpEntity) => tfpbiodmpEntity.nuocor)
  tfpbiodmps: TfpbiodmpEntity[];

  @OneToMany(() => TfpferEntity, (tfpferEntity) => tfpferEntity.nuocorlicgest)
  tfpfers: TfpferEntity[];

  @OneToMany(() => TfpfsuEntity, (tfpfsuEntity) => tfpfsuEntity.nuocor)
  tfpfsus: TfpfsuEntity[];

  @OneToMany(() => TfplotEntity, (tfplotEntity) => tfplotEntity.nuocor)
  tfplots: TfplotEntity[];

  @ManyToOne(() => TfphisEntity, (tfphisEntity) => tfphisEntity.tfpocos)
  @JoinColumn([{ name: 'CODHISTOCOR', referencedColumnName: 'codhistocor' }])
  codhistocor2: TfphisEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpocos)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpmanEntity, (tfpmanEntity) => tfpmanEntity.tfpocos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUMANEJO', referencedColumnName: 'numanejo' }])
  numanejo: TfpmanEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpocos)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpcnvEntity, (tfpcnvEntity) => tfpcnvEntity.tfpocos)
  @JoinColumn([
    { name: 'CODSIND', referencedColumnName: 'codsind' },
    { name: 'PROCESSOCNV', referencedColumnName: 'processo' },
    { name: 'SEQUENCIACNV', referencedColumnName: 'sequencia' },
  ])
  tfpcnv: TfpcnvEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpocos)
  @JoinColumn([{ name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' }])
  nuprocesso: TfppssEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpocos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpocos)
  @JoinColumn([{ name: 'NUOCORORIG', referencedColumnName: 'nuocor' }])
  nuocororig: TfpocoEntity;

  @OneToMany(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.nuocororig)
  tfpocos: TfpocoEntity[];

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpocos2)
  @JoinColumn([{ name: 'NUREINCID', referencedColumnName: 'nuocor' }])
  nureinc: TfpocoEntity;

  @OneToMany(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.nureinc)
  tfpocos2: TfpocoEntity[];

  @OneToMany(
    () => TfpocorjsEntity,
    (tfpocorjsEntity) => tfpocorjsEntity.nuocororig,
  )
  tfpocorjs: TfpocorjsEntity[];

  @OneToMany(
    () => TfpocorjsEntity,
    (tfpocorjsEntity) => tfpocorjsEntity.nureinc,
  )
  tfpocorjs2: TfpocorjsEntity[];

  @OneToMany(() => TfpponEntity, (tfpponEntity) => tfpponEntity.nuocor2)
  tfppons: TfpponEntity[];

  @OneToMany(() => TfpponEntity, (tfpponEntity) => tfpponEntity.nuocor3)
  tfppons2: TfpponEntity[];

  @OneToOne(() => TfppraEntity, (tfppraEntity) => tfppraEntity.nuocor2)
  tfppra: TfppraEntity;

  @OneToMany(() => TfprpoEntity, (tfprpoEntity) => tfprpoEntity.nuoco)
  tfprpos: TfprpoEntity[];

  @OneToMany(() => TfpsubEntity, (tfpsubEntity) => tfpsubEntity.nuocor)
  tfpsubs: TfpsubEntity[];
}
