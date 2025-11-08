import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpcghEntity } from './tFPCGH.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TrsanuEntity } from './tRSANU.entity';
import { TrsavrEntity } from './tRSAVR.entity';
import { TrscanEntity } from './tRSCAN.entity';
import { TrsepeEntity } from './tRSEPE.entity';
import { TrsmotEntity } from './tRSMOT.entity';
import { TrsperEntity } from './tRSPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TRSREQ', ['nurequisicao'], { unique: true })
@Entity('TRSREQ', { schema: 'SANKHYA' })
export class TrsreqEntity {
  @Column('int', { primary: true, name: 'NUREQUISICAO' })
  nurequisicao: number;

  @Column('char', { name: 'DESCRREQUISICAO', nullable: true, length: 40 })
  descrrequisicao: string | null;

  @Column('datetime', { name: 'DTREQUISICAO', nullable: true })
  dtrequisicao: Date | null;

  @Column('datetime', { name: 'DTPREVATEND', nullable: true })
  dtprevatend: Date | null;

  @Column('text', { name: 'JUSTIFICATIVA', nullable: true })
  justificativa: string | null;

  @Column('char', { name: 'TIPVAGA', nullable: true, length: 1 })
  tipvaga: string | null;

  @Column('smallint', { name: 'VINCULO', nullable: true })
  vinculo: number | null;

  @Column('int', { name: 'QTDVAGAS', nullable: true })
  qtdvagas: number | null;

  @Column('smallint', { name: 'SITREQUISICAO', default: () => '(0)' })
  sitrequisicao: number;

  @Column('smallint', { name: 'TIPOSELECAO', default: () => '(0)' })
  tiposelecao: number;

  @Column('smallint', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('char', { name: 'PERMITEEXFUNC', length: 1, default: () => "'S'" })
  permiteexfunc: string;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'A'" })
  status: string;

  @Column('int', { name: 'QTDVAGASATEND', default: () => '(0)' })
  qtdvagasatend: number;

  @Column('datetime', { name: 'DHAVALIACAO', nullable: true })
  dhavaliacao: Date | null;

  @Column('varchar', { name: 'OBSAVALIACAO', nullable: true, length: 3103 })
  obsavaliacao: string | null;

  @Column('char', { name: 'STATUSAVAL', nullable: true, length: 1 })
  statusaval: string | null;

  @Column('smallint', { name: 'GRAUINSTR', nullable: true })
  grauinstr: number | null;

  @Column('float', { name: 'INIFAIXSAL', nullable: true, precision: 53 })
  inifaixsal: number | null;

  @Column('float', { name: 'FIMFAIXSAL', nullable: true, precision: 53 })
  fimfaixsal: number | null;

  @Column('smallint', { name: 'TIPO', nullable: true })
  tipo: number | null;

  @Column('int', { name: 'PERMESES', nullable: true })
  permeses: number | null;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.nurequisicao)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TrsanuEntity, (trsanuEntity) => trsanuEntity.nurequisicao)
  trsanus: TrsanuEntity[];

  @OneToMany(() => TrsavrEntity, (trsavrEntity) => trsavrEntity.nurequisicao2)
  trsavrs: TrsavrEntity[];

  @OneToMany(() => TrscanEntity, (trscanEntity) => trscanEntity.nurequisicao2)
  trscans: TrscanEntity[];

  @OneToMany(() => TrsepeEntity, (trsepeEntity) => trsepeEntity.nurequisicao)
  trsepes: TrsepeEntity[];

  @OneToMany(() => TrsperEntity, (trsperEntity) => trsperEntity.nurequisicao2)
  trspers: TrsperEntity[];

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.trsreqs)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo: TfpcarEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trsreqs)
  @JoinColumn([{ name: 'CODUSUAVAL', referencedColumnName: 'codusu' }])
  codusuaval: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trsreqs2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trsreqs3)
  @JoinColumn([{ name: 'CODUSUREQUISITANTE', referencedColumnName: 'codusu' }])
  codusurequisitante: TsiusuEntity;

  @ManyToOne(() => TrsmotEntity, (trsmotEntity) => trsmotEntity.trsreqs)
  @JoinColumn([{ name: 'CODMOTIVO', referencedColumnName: 'codmotivo' }])
  codmotivo: TrsmotEntity;

  @ManyToOne(() => TrsmotEntity, (trsmotEntity) => trsmotEntity.trsreqs2)
  @JoinColumn([{ name: 'CODMOTIVOAVAL', referencedColumnName: 'codmotivo' }])
  codmotivoaval: TrsmotEntity;

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.trsreqs)
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor: TfpcghEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.trsreqs)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.trsreqs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.trsreqs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
