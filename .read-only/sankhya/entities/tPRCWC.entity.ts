import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprawcEntity } from './tPRAWC.entity';
import { TprcapEntity } from './tPRCAP.entity';
import { TprwcpEntity } from './tPRWCP.entity';
import { TprpiprocEntity } from './tPRPIPROC.entity';
import { TprtxpEntity } from './tPRTXP.entity';

@Index('PK_TPRCWC', ['codcwc'], { unique: true })
@Entity('TPRCWC', { schema: 'SANKHYA' })
export class TprcwcEntity {
  @Column('int', { primary: true, name: 'CODCWC' })
  codcwc: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { name: 'TEMPOSETUP', default: () => '(0)' })
  temposetup: number;

  @Column('int', { name: 'TEMPOCLEANUP', default: () => '(0)' })
  tempocleanup: number;

  @Column('float', { name: 'QTDCAPACIDADEMIN', precision: 53 })
  qtdcapacidademin: number;

  @Column('float', { name: 'QTDCAPACIDADEPAD', precision: 53 })
  qtdcapacidadepad: number;

  @Column('float', { name: 'QTDCAPACIDADEMAX', precision: 53 })
  qtdcapacidademax: number;

  @OneToMany(() => TprawcEntity, (tprawcEntity) => tprawcEntity.codcwc)
  tprawcs: TprawcEntity[];

  @ManyToOne(() => TprcapEntity, (tprcapEntity) => tprcapEntity.tprcwcs)
  @JoinColumn([{ name: 'CODCAP', referencedColumnName: 'codcap' }])
  codcap: TprcapEntity;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprcwcs)
  @JoinColumn([{ name: 'CODWCPPADRAO', referencedColumnName: 'codwcp' }])
  codwcppadrao: TprwcpEntity;

  @OneToMany(() => TprpiprocEntity, (tprpiprocEntity) => tprpiprocEntity.codcwc)
  tprpiprocs: TprpiprocEntity[];

  @OneToMany(() => TprtxpEntity, (tprtxpEntity) => tprtxpEntity.codcwc2)
  tprtxps: TprtxpEntity[];

  @OneToMany(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.codcwc2)
  tprwcps: TprwcpEntity[];
}
