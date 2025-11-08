import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TpreqpEntity } from './tPREQP.entity';
import { TprilopEntity } from './tPRILOP.entity';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TprmpsEntity } from './tPRMPS.entity';
import { TprmqpEntity } from './tPRMQP.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TprrhpEntity } from './tPRRHP.entity';
import { TprwcpEntity } from './tPRWCP.entity';

@Index('PK_TPRPLP', ['codplp'], { unique: true })
@Entity('TPRPLP', { schema: 'SANKHYA' })
export class TprplpEntity {
  @Column('int', { primary: true, name: 'CODPLP' })
  codplp: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'CODCARGAHOR' })
  codcargahor: number;

  @Column('int', { name: 'CODCENCUS' })
  codcencus: number;

  @OneToMany(() => TpreqpEntity, (tpreqpEntity) => tpreqpEntity.codplp)
  tpreqps: TpreqpEntity[];

  @OneToMany(() => TprilopEntity, (tprilopEntity) => tprilopEntity.codplp)
  tprilops: TprilopEntity[];

  @OneToMany(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.codplp)
  tpriprocs: TpriprocEntity[];

  @OneToMany(() => TprmpsEntity, (tprmpsEntity) => tprmpsEntity.codplanta)
  tprmps: TprmpsEntity[];

  @OneToMany(() => TprmqpEntity, (tprmqpEntity) => tprmqpEntity.codplp)
  tprmqps: TprmqpEntity[];

  @OneToMany(() => TprprcEntity, (tprprcEntity) => tprprcEntity.codplp)
  tprprcs: TprprcEntity[];

  @OneToMany(() => TprrhpEntity, (tprrhpEntity) => tprrhpEntity.codplp)
  tprrhps: TprrhpEntity[];

  @OneToMany(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.codplp)
  tprwcps: TprwcpEntity[];
}
