import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgframEntity } from './tGFRAM.entity';
import { TpravoEntity } from './tPRAVO.entity';
import { TpresrEntity } from './tPRESR.entity';
import { TprhwxaEntity } from './tPRHWXA.entity';
import { TpriatvEntity } from './tPRIATV.entity';
import { TpriccqEntity } from './tPRICCQ.entity';
import { TpricopEntity } from './tPRICOP.entity';
import { TpridepEntity } from './tPRIDEP.entity';
import { TprinotaEntity } from './tPRINOTA.entity';
import { TpripaEntity } from './tPRIPA.entity';
import { TprplpEntity } from './tPRPLP.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TprmpsEntity } from './tPRMPS.entity';
import { TprispEntity } from './tPRISP.entity';
import { TprmerEntity } from './tPRMER.entity';
import { TprpiprocEntity } from './tPRPIPROC.entity';
import { TprtxatEntity } from './tPRTXAT.entity';
import { TprwxipEntity } from './tPRWXIP.entity';

@Index('PK_TPRIPROC', ['idiproc'], { unique: true })
@Entity('TPRIPROC', { schema: 'SANKHYA' })
export class TpriprocEntity {
  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('datetime', { name: 'DHINST', nullable: true })
  dhinst: Date | null;

  @Column('varchar', { name: 'IDWFLOW', nullable: true, length: 100 })
  idwflow: string | null;

  @Column('varchar', {
    name: 'STATUSPROC',
    nullable: true,
    length: 2,
    default: () => "'R'",
  })
  statusproc: string | null;

  @Column('datetime', {
    name: 'DHINC',
    nullable: true,
    default: () => 'getdate()',
  })
  dhinc: Date | null;

  @Column('smallint', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;

  @Column('int', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('datetime', { name: 'DHTERMINO', nullable: true })
  dhtermino: Date | null;

  @Column('varchar', {
    name: 'NROLOTE',
    nullable: true,
    length: 20,
    default: () => "'0'",
  })
  nrolote: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'CODUSUFINAL', nullable: true })
  codusufinal: number | null;

  @Column('smallint', { name: 'SEQNOTA', nullable: true })
  seqnota: number | null;

  @Column('datetime', { name: 'DTPREVENT', nullable: true })
  dtprevent: Date | null;

  @Column('float', {
    name: 'TEMPOATRAVESS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  tempoatravess: number | null;

  @Column('datetime', { name: 'DTINICIOMAX', nullable: true })
  dtiniciomax: Date | null;

  @Column('int', { name: 'IDICOP', nullable: true })
  idicop: number | null;

  @OneToMany(() => TgframEntity, (tgframEntity) => tgframEntity.idiproc)
  tgframs: TgframEntity[];

  @OneToMany(() => TpravoEntity, (tpravoEntity) => tpravoEntity.idiproc)
  tpravos: TpravoEntity[];

  @OneToMany(() => TpresrEntity, (tpresrEntity) => tpresrEntity.idiproc2)
  tpresrs: TpresrEntity[];

  @OneToMany(() => TprhwxaEntity, (tprhwxaEntity) => tprhwxaEntity.idiproc2)
  tprhwxas: TprhwxaEntity[];

  @OneToMany(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.idiproc2)
  tpriatvs: TpriatvEntity[];

  @OneToMany(() => TpriccqEntity, (tpriccqEntity) => tpriccqEntity.idiproc)
  tpriccqs: TpriccqEntity[];

  @OneToMany(() => TpricopEntity, (tpricopEntity) => tpricopEntity.idiproc2)
  tpricops: TpricopEntity[];

  @OneToMany(() => TpridepEntity, (tpridepEntity) => tpridepEntity.idiprocpa2)
  tprideps: TpridepEntity[];

  @OneToMany(() => TpridepEntity, (tpridepEntity) => tpridepEntity.idiprocpi2)
  tprideps2: TpridepEntity[];

  @OneToMany(() => TprinotaEntity, (tprinotaEntity) => tprinotaEntity.idiproc2)
  tprinotas: TprinotaEntity[];

  @OneToMany(() => TpripaEntity, (tpripaEntity) => tpripaEntity.idiproc2)
  tpripas: TpripaEntity[];

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tpriprocs)
  @JoinColumn([{ name: 'IDIPROCPAI', referencedColumnName: 'idiproc' }])
  idiprocpai: TpriprocEntity;

  @OneToMany(
    () => TpriprocEntity,
    (tpriprocEntity) => tpriprocEntity.idiprocpai,
  )
  tpriprocs: TpriprocEntity[];

  @ManyToOne(() => TprplpEntity, (tprplpEntity) => tprplpEntity.tpriprocs)
  @JoinColumn([{ name: 'CODPLP', referencedColumnName: 'codplp' }])
  codplp: TprplpEntity;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tpriprocs)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc: TprprcEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tpriprocs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tpriprocs2)
  @JoinColumn([{ name: 'CODPARCTERC', referencedColumnName: 'codparc' }])
  codparcterc: TgfparEntity;

  @ManyToOne(() => TprmpsEntity, (tprmpsEntity) => tprmpsEntity.tpriprocs)
  @JoinColumn([{ name: 'NUMPS', referencedColumnName: 'numps' }])
  numps: TprmpsEntity;

  @OneToMany(() => TprispEntity, (tprispEntity) => tprispEntity.idiproc2)
  tprisps: TprispEntity[];

  @OneToMany(() => TprmerEntity, (tprmerEntity) => tprmerEntity.idiproc)
  tprmers: TprmerEntity[];

  @OneToMany(
    () => TprpiprocEntity,
    (tprpiprocEntity) => tprpiprocEntity.idiproc2,
  )
  tprpiprocs: TprpiprocEntity[];

  @OneToMany(() => TprtxatEntity, (tprtxatEntity) => tprtxatEntity.idiproc2)
  tprtxats: TprtxatEntity[];

  @OneToMany(() => TprwxipEntity, (tprwxipEntity) => tprwxipEntity.idiproc2)
  tprwxips: TprwxipEntity[];
}
