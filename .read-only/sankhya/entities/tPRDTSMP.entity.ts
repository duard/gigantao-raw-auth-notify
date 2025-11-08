import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprhsmpEntity } from './tPRHSMP.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TpratvEntity } from './tPRATV.entity';

@Index('PK_TPRDTSMP', ['coddtsmp'], { unique: true })
@Entity('TPRDTSMP', { schema: 'SANKHYA' })
export class TprdtsmpEntity {
  @Column('int', { primary: true, name: 'CODDTSMP' })
  coddtsmp: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CONTROLE', length: 40 })
  controle: string;

  @ManyToOne(() => TprhsmpEntity, (tprhsmpEntity) => tprhsmpEntity.tprdtsmps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODHSMP', referencedColumnName: 'codhsmp' }])
  codhsmp: TprhsmpEntity;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprdtsmps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc: TprprcEntity;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tprdtsmps)
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx: TpratvEntity;
}
