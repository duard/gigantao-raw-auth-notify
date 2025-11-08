import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';
import { TprawcEntity } from './tPRAWC.entity';
import { TprccqEntity } from './tPRCCQ.entity';
import { TprdtsmpEntity } from './tPRDTSMP.entity';
import { TprefxEntity } from './tPREFX.entity';
import { TprformEntity } from './tPRFORM.entity';
import { TprftlEntity } from './tPRFTL.entity';
import { TprilopEntity } from './tPRILOP.entity';
import { TprimpsEntity } from './tPRIMPS.entity';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TprlpaEntity } from './tPRLPA.entity';
import { TprlpiEntity } from './tPRLPI.entity';
import { TprplpEntity } from './tPRPLP.entity';
import { TprrpaEntity } from './tPRRPA.entity';
import { TprtxppEntity } from './tPRTXPP.entity';

@Index('PK_TPRPRC', ['idproc'], { unique: true })
@Index('TPRPRC_I01', ['codprc', 'versao'], {})
@Entity('TPRPRC', { schema: 'SANKHYA' })
export class TprprcEntity {
  @Column('int', { primary: true, name: 'IDPROC' })
  idproc: number;

  @Column('int', { name: 'CODPRC' })
  codprc: number;

  @Column('smallint', { name: 'VERSAO', default: () => '(1)' })
  versao: number;

  @Column('varchar', { name: 'DESCRABREV', length: 100 })
  descrabrev: string;

  @Column('varchar', { name: 'DESCRLONGA', nullable: true, length: 3103 })
  descrlonga: string | null;

  @Column('datetime', { name: 'DHCAD' })
  dhcad: Date;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSUCAD' })
  codusucad: number;

  @Column('smallint', { name: 'CODUSUALT' })
  codusualt: number;

  @Column('char', { name: 'MULTIPA', length: 1, default: () => "'N'" })
  multipa: string;

  @Column('char', { name: 'MULTICONTROLE', length: 1, default: () => "'N'" })
  multicontrole: string;

  @Column('int', { name: 'CODLOCALALMOXARIFE', nullable: true })
  codlocalalmoxarife: number | null;

  @Column('int', { name: 'CODLOCALMANUFATURA', nullable: true })
  codlocalmanufatura: number | null;

  @Column('char', { name: 'TIPOINICIA', length: 1, default: () => "'I'" })
  tipoinicia: string;

  @Column('text', { name: 'XMLBPMN', nullable: true })
  xmlbpmn: string | null;

  @Column('varchar', { name: 'IDWFLOW', nullable: true, length: 100 })
  idwflow: string | null;

  @Column('char', { name: 'TIPOPROC', length: 1, default: () => "'M'" })
  tipoproc: string;

  @Column('varchar', { name: 'TIPONROLOTE', length: 2, default: () => "'MN'" })
  tiponrolote: string;

  @Column('char', { name: 'TIPOFRAGNROLOTE', length: 1, default: () => "'N'" })
  tipofragnrolote: string;

  @Column('varchar', { name: 'MASCNROLOTE', nullable: true, length: 30 })
  mascnrolote: string | null;

  @Column('char', { name: 'PROCDESMONTE', length: 1, default: () => "'N'" })
  procdesmonte: string;

  @Column('int', { name: 'CODPRCPRODUCAO', nullable: true })
  codprcproducao: number | null;

  @Column('char', { name: 'USATERCEIRO', length: 1, default: () => "'N'" })
  usaterceiro: string;

  @Column('char', { name: 'DEFTERCEIRO', length: 1, default: () => "'O'" })
  defterceiro: string;

  @Column('varchar', { name: 'PADRAO', length: 1, default: () => "'N'" })
  padrao: string;

  @Column('char', { name: 'EXIGEPEDIDO', length: 1, default: () => "'N'" })
  exigepedido: string;

  @Column('varchar', { name: 'LOTECURINGA', nullable: true, length: 11 })
  lotecuringa: string | null;

  @Column('float', { name: 'PERCDESVIOSUP', nullable: true, precision: 53 })
  percdesviosup: number | null;

  @Column('float', { name: 'PERCDESVIOINF', nullable: true, precision: 53 })
  percdesvioinf: number | null;

  @Column('char', { name: 'PROCREPARO', nullable: true, length: 1 })
  procreparo: string | null;

  @Column('char', { name: 'PRODPARATERCEIRO', length: 1, default: () => "'N'" })
  prodparaterceiro: string;

  @Column('char', { name: 'LIBERADESVIO', length: 1, default: () => "'N'" })
  liberadesvio: string;

  @Column('varchar', {
    name: 'USALOTECURINGA',
    length: 1,
    default: () => "'N'",
  })
  usalotecuringa: string;

  @Column('text', { name: 'XMLBPMNUI', nullable: true })
  xmlbpmnui: string | null;

  @Column('char', { name: 'TIPOFRAGNROLOTESP', nullable: true, length: 1 })
  tipofragnrolotesp: string | null;

  @Column('varchar', { name: 'MASCNROLOTESP', nullable: true, length: 30 })
  mascnrolotesp: string | null;

  @Column('varchar', { name: 'TIPONROLOTESP', nullable: true, length: 2 })
  tiponrolotesp: string | null;

  @Column('char', { name: 'USACONFNROLOTESP', nullable: true, length: 1 })
  usaconfnrolotesp: string | null;

  @Column('char', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('char', { name: 'PADRAOPRODUTO', length: 1, default: () => "'N'" })
  padraoproduto: string;

  @Column('int', { name: 'VERSAOANT', nullable: true })
  versaoant: number | null;

  @Column('char', { name: 'ROTEIROHTML5', nullable: true, length: 1 })
  roteirohtml5: string | null;

  @Column('char', { name: 'TIPEXECATV', length: 1, default: () => "'A'" })
  tipexecatv: string;

  @Column('int', { name: 'QTDDIAS', nullable: true })
  qtddias: number | null;

  @Column('char', { name: 'PEREDICAO', length: 1, default: () => "'L'" })
  peredicao: string;

  @OneToMany(() => TpratvEntity, (tpratvEntity) => tpratvEntity.codprcsub)
  tpratvs: TpratvEntity[];

  @OneToMany(() => TpratvEntity, (tpratvEntity) => tpratvEntity.idproc)
  tpratvs2: TpratvEntity[];

  @OneToMany(() => TprawcEntity, (tprawcEntity) => tprawcEntity.idproc2)
  tprawcs: TprawcEntity[];

  @OneToMany(() => TprccqEntity, (tprccqEntity) => tprccqEntity.idproc)
  tprccqs: TprccqEntity[];

  @OneToMany(() => TprdtsmpEntity, (tprdtsmpEntity) => tprdtsmpEntity.idproc)
  tprdtsmps: TprdtsmpEntity[];

  @OneToMany(() => TprefxEntity, (tprefxEntity) => tprefxEntity.idproc2)
  tprefxes: TprefxEntity[];

  @OneToMany(() => TprformEntity, (tprformEntity) => tprformEntity.idproc)
  tprforms: TprformEntity[];

  @OneToMany(() => TprilopEntity, (tprilopEntity) => tprilopEntity.idproc)
  tprilops: TprilopEntity[];

  @OneToMany(() => TprimpsEntity, (tprimpsEntity) => tprimpsEntity.idproc)
  tprimps: TprimpsEntity[];

  @OneToMany(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.idproc)
  tpriprocs: TpriprocEntity[];

  @OneToMany(() => TprlpaEntity, (tprlpaEntity) => tprlpaEntity.idproc2)
  tprlpas: TprlpaEntity[];

  @OneToMany(() => TprlpiEntity, (tprlpiEntity) => tprlpiEntity.idproc2)
  tprlpis: TprlpiEntity[];

  @ManyToOne(() => TprftlEntity, (tprftlEntity) => tprftlEntity.tprprcs)
  @JoinColumn([{ name: 'IDFORMULA', referencedColumnName: 'idformula' }])
  idformula: TprftlEntity;

  @ManyToOne(() => TprplpEntity, (tprplpEntity) => tprplpEntity.tprprcs)
  @JoinColumn([{ name: 'CODPLP', referencedColumnName: 'codplp' }])
  codplp: TprplpEntity;

  @ManyToOne(() => TprrpaEntity, (tprrpaEntity) => tprrpaEntity.tprprcs)
  @JoinColumn([{ name: 'IDRPAINICIAL', referencedColumnName: 'idrpa' }])
  idrpainicial: TprrpaEntity;

  @OneToMany(() => TprtxppEntity, (tprtxppEntity) => tprtxppEntity.idproc2)
  tprtxpps: TprtxppEntity[];
}
