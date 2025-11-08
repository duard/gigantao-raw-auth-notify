import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprbomEntity } from './tPRBOM.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TprmpsEntity } from './tPRMPS.entity';

@Index('PK_TPRIMPS', ['numps', 'seqimps'], { unique: true })
@Index('TPRIMPS_I_MPS_PROD_CON', ['codprod', 'controle'], {})
@Entity('TPRIMPS', { schema: 'SANKHYA' })
export class TprimpsEntity {
  @Column('int', { primary: true, name: 'NUMPS' })
  numps: number;

  @Column('int', { primary: true, name: 'SEQIMPS' })
  seqimps: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('float', { name: 'QTDGIRMEDIO', precision: 53, default: () => '(0)' })
  qtdgirmedio: number;

  @Column('float', { name: 'QTDDEMBRUTA', precision: 53, default: () => '(0)' })
  qtddembruta: number;

  @Column('float', {
    name: 'QTDDEMINDIRETA',
    precision: 53,
    default: () => '(0)',
  })
  qtddemindireta: number;

  @Column('float', {
    name: 'QTDDEMAJUSTADA',
    precision: 53,
    default: () => '(0)',
  })
  qtddemajustada: number;

  @Column('float', { name: 'QTDESTOQUE', precision: 53, default: () => '(0)' })
  qtdestoque: number;

  @Column('float', {
    name: 'QTDPRODUZIRCALC',
    precision: 53,
    default: () => '(0)',
  })
  qtdproduzircalc: number;

  @Column('float', {
    name: 'QTDPRODUZIRAD',
    precision: 53,
    default: () => '(0)',
  })
  qtdproduzirad: number;

  @Column('float', {
    name: 'QTDPEDCOMPRA',
    precision: 53,
    default: () => '(0)',
  })
  qtdpedcompra: number;

  @Column('float', {
    name: 'QTDPRODUZIRLIQ',
    precision: 53,
    default: () => '(0)',
  })
  qtdproduzirliq: number;

  @Column('float', { name: 'QTDEMOP', precision: 53, default: () => '(0)' })
  qtdemop: number;

  @Column('float', {
    name: 'QTDSALDOPRODUZIR',
    precision: 53,
    default: () => '(0)',
  })
  qtdsaldoproduzir: number;

  @Column('float', {
    name: 'PERCESTSOBDEMANDA',
    precision: 53,
    default: () => '(0)',
  })
  percestsobdemanda: number;

  @Column('float', { name: 'QTDBASEMRP', precision: 53, default: () => '(0)' })
  qtdbasemrp: number;

  @Column('float', {
    name: 'QTDOUTROSPLAN',
    precision: 53,
    default: () => '(0)',
  })
  qtdoutrosplan: number;

  @Column('varchar', { name: 'FIXADO', length: 1, default: () => "'N'" })
  fixado: string;

  @Column('varchar', { name: 'PRODINTERM', length: 1, default: () => "'N'" })
  prodinterm: string;

  @Column('float', {
    name: 'QTDDEMANDALIQ',
    precision: 53,
    default: () => '(0)',
  })
  qtddemandaliq: number;

  @Column('int', { name: 'PRIORIDADE' })
  prioridade: number;

  @Column('float', {
    name: 'QTDGIROMEDIOCALC',
    precision: 53,
    default: () => '(0)',
  })
  qtdgiromediocalc: number;

  @Column('int', { name: 'SEQIMPSPAI', nullable: true })
  seqimpspai: number | null;

  @Column('datetime', { name: 'DTPREVENTPAI', nullable: true })
  dtpreventpai: Date | null;

  @Column('datetime', { name: 'DTPREVENT', nullable: true })
  dtprevent: Date | null;

  @Column('float', {
    name: 'QTDOPPENDENTE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdoppendente: number | null;

  @Column('float', {
    name: 'TEMPOATRAVESS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  tempoatravess: number | null;

  @Column('datetime', { name: 'DTINICIOMAX', nullable: true })
  dtiniciomax: Date | null;

  @Column('float', { name: 'QTDPRODMIN', nullable: true, precision: 53 })
  qtdprodmin: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'SEQNOTA', nullable: true })
  seqnota: number | null;

  @OneToMany(() => TprbomEntity, (tprbomEntity) => tprbomEntity.tprimps)
  tprboms: TprbomEntity[];

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprimps)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc: TprprcEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprimps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TprmpsEntity, (tprmpsEntity) => tprmpsEntity.tprimps)
  @JoinColumn([{ name: 'NUMPS', referencedColumnName: 'numps' }])
  numps2: TprmpsEntity;
}
