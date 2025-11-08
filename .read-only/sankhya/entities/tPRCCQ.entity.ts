import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TpriccqEntity } from './tPRICCQ.entity';
import { TprtacEntity } from './tPRTAC.entity';

@Index('PK_TPRCCQ', ['idccq'], { unique: true })
@Entity('TPRCCQ', { schema: 'SANKHYA' })
export class TprccqEntity {
  @Column('int', { primary: true, name: 'IDCCQ' })
  idccq: number;

  @Column('varchar', { name: 'DESCRCICLO', length: 100 })
  descrciclo: string;

  @Column('char', {
    name: 'APROVARSTATUSLOTE',
    length: 1,
    default: () => "'S'",
  })
  aprovarstatuslote: string;

  @Column('varchar', {
    name: 'APROVARCOMRESSALVAS',
    length: 1,
    default: () => "'N'",
  })
  aprovarcomressalvas: string;

  @OneToMany(() => TpratvEntity, (tpratvEntity) => tpratvEntity.idccq)
  tpratvs: TpratvEntity[];

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprccqs)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc: TprprcEntity;

  @OneToMany(() => TpriccqEntity, (tpriccqEntity) => tpriccqEntity.idccq)
  tpriccqs: TpriccqEntity[];

  @OneToMany(() => TprtacEntity, (tprtacEntity) => tprtacEntity.idccq2)
  tprtacs: TprtacEntity[];
}
