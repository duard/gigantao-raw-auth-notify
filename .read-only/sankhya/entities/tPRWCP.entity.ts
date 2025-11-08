import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprastEntity } from './tPRAST.entity';
import { TprawcEntity } from './tPRAWC.entity';
import { TprcwcEntity } from './tPRCWC.entity';
import { TprhwxaEntity } from './tPRHWXA.entity';
import { TpriatvEntity } from './tPRIATV.entity';
import { TpriwcEntity } from './tPRIWC.entity';
import { TproeeEntity } from './tPROEE.entity';
import { TprpiprocEntity } from './tPRPIPROC.entity';
import { TprrxpEntity } from './tPRRXP.entity';
import { TprrxwEntity } from './tPRRXW.entity';
import { TprtxpEntity } from './tPRTXP.entity';
import { TprplpEntity } from './tPRPLP.entity';
import { TprcapEntity } from './tPRCAP.entity';
import { TprmqpEntity } from './tPRMQP.entity';
import { TprwlopEntity } from './tPRWLOP.entity';
import { TprwxipEntity } from './tPRWXIP.entity';
import { TprwxpEntity } from './tPRWXP.entity';

@Index('PK_TPRWCP', ['codwcp'], { unique: true })
@Index('TPRWCP_I01', ['codcwc'], {})
@Entity('TPRWCP', { schema: 'SANKHYA' })
export class TprwcpEntity {
  @Column('int', { primary: true, name: 'CODWCP' })
  codwcp: number;

  @Column('int', { name: 'CODCWC' })
  codcwc: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('float', { name: 'QTDCAPACIDADEMIN', precision: 53 })
  qtdcapacidademin: number;

  @Column('float', {
    name: 'QTDCAPACIDADEPAD',
    precision: 53,
    default: () => '(0)',
  })
  qtdcapacidadepad: number;

  @Column('float', { name: 'QTDCAPACIDADEMAX', precision: 53 })
  qtdcapacidademax: number;

  @Column('smallint', { name: 'CODUSURESP' })
  codusuresp: number;

  @Column('int', { name: 'CODCENCUS' })
  codcencus: number;

  @Column('smallint', { name: 'CODCARGAHOR' })
  codcargahor: number;

  @Column('char', { name: 'TIPOSETUP', length: 1, default: () => "'N'" })
  tiposetup: string;

  @Column('char', { name: 'EXIGECLEANUP', length: 1, default: () => "'N'" })
  exigecleanup: string;

  @Column('smallint', { name: 'TEMPOSETUP', default: () => '(0)' })
  temposetup: number;

  @Column('smallint', { name: 'TEMPOCLEANUP', default: () => '(0)' })
  tempocleanup: number;

  @Column('float', { name: 'INDICEOEE', precision: 53, default: () => '(1)' })
  indiceoee: number;

  @Column('varchar', { name: 'NOMEIMPRESSORA', length: 100 })
  nomeimpressora: string;

  @Column('char', { name: 'SETUPPRONTO', length: 1 })
  setuppronto: string;

  @Column('int', { name: 'CODLOCALWC' })
  codlocalwc: number;

  @Column('varchar', { name: 'OPERACAO', length: 1, default: () => "'E'" })
  operacao: string;

  @Column('float', { name: 'QTDCARGAMIN', nullable: true, precision: 53 })
  qtdcargamin: number | null;

  @Column('float', { name: 'QTDCARGAMAX', nullable: true, precision: 53 })
  qtdcargamax: number | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('char', { name: 'RESTRINGECARGA', nullable: true, length: 1 })
  restringecarga: string | null;

  @Column('varchar', { name: 'DISPONIBILIDADE', nullable: true, length: 20 })
  disponibilidade: string | null;

  @OneToMany(() => TprastEntity, (tprastEntity) => tprastEntity.codwcp)
  tprasts: TprastEntity[];

  @OneToMany(() => TprawcEntity, (tprawcEntity) => tprawcEntity.codwcp)
  tprawcs: TprawcEntity[];

  @OneToMany(() => TprcwcEntity, (tprcwcEntity) => tprcwcEntity.codwcppadrao)
  tprcwcs: TprcwcEntity[];

  @OneToMany(() => TprhwxaEntity, (tprhwxaEntity) => tprhwxaEntity.codwcp2)
  tprhwxas: TprhwxaEntity[];

  @OneToMany(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.codwcp)
  tpriatvs: TpriatvEntity[];

  @OneToMany(() => TpriwcEntity, (tpriwcEntity) => tpriwcEntity.codwcp)
  tpriwcs: TpriwcEntity[];

  @OneToMany(() => TproeeEntity, (tproeeEntity) => tproeeEntity.codwcp2)
  tproees: TproeeEntity[];

  @OneToMany(() => TprpiprocEntity, (tprpiprocEntity) => tprpiprocEntity.codwcp)
  tprpiprocs: TprpiprocEntity[];

  @OneToMany(() => TprrxpEntity, (tprrxpEntity) => tprrxpEntity.codwcp)
  tprrxps: TprrxpEntity[];

  @OneToMany(() => TprrxwEntity, (tprrxwEntity) => tprrxwEntity.codwcp2)
  tprrxws: TprrxwEntity[];

  @OneToMany(() => TprtxpEntity, (tprtxpEntity) => tprtxpEntity.codwcp2)
  tprtxps: TprtxpEntity[];

  @ManyToOne(() => TprplpEntity, (tprplpEntity) => tprplpEntity.tprwcps)
  @JoinColumn([{ name: 'CODPLP', referencedColumnName: 'codplp' }])
  codplp: TprplpEntity;

  @ManyToOne(() => TprcapEntity, (tprcapEntity) => tprcapEntity.tprwcps)
  @JoinColumn([{ name: 'CODCAP', referencedColumnName: 'codcap' }])
  codcap: TprcapEntity;

  @ManyToOne(() => TprmqpEntity, (tprmqpEntity) => tprmqpEntity.tprwcps)
  @JoinColumn([{ name: 'NUMQP', referencedColumnName: 'codmqp' }])
  numqp: TprmqpEntity;

  @ManyToOne(() => TprcwcEntity, (tprcwcEntity) => tprcwcEntity.tprwcps)
  @JoinColumn([{ name: 'CODCWC', referencedColumnName: 'codcwc' }])
  codcwc2: TprcwcEntity;

  @OneToMany(() => TprwlopEntity, (tprwlopEntity) => tprwlopEntity.codwcp)
  tprwlops: TprwlopEntity[];

  @OneToMany(() => TprwxipEntity, (tprwxipEntity) => tprwxipEntity.codwcp2)
  tprwxips: TprwxipEntity[];

  @OneToMany(() => TprwxpEntity, (tprwxpEntity) => tprwxpEntity.codwcp2)
  tprwxps: TprwxpEntity[];
}
