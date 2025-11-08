import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';
import { TpresrEntity } from './tPRESR.entity';
import { TprevtEntity } from './tPREVT.entity';
import { TprlndEntity } from './tPRLND.entity';
import { TprmerEntity } from './tPRMER.entity';
import { TprprcEntity } from './tPRPRC.entity';

@Index('PK_TPRRPA', ['idrpa'], { unique: true })
@Entity('TPRRPA', { schema: 'SANKHYA' })
export class TprrpaEntity {
  @Column('int', { primary: true, name: 'IDRPA' })
  idrpa: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @OneToMany(() => TpratvEntity, (tpratvEntity) => tpratvEntity.idrpadest)
  tpratvs: TpratvEntity[];

  @OneToMany(() => TpratvEntity, (tpratvEntity) => tpratvEntity.idrpaoper)
  tpratvs2: TpratvEntity[];

  @OneToMany(() => TpresrEntity, (tpresrEntity) => tpresrEntity.idrpa2)
  tpresrs: TpresrEntity[];

  @OneToMany(() => TprevtEntity, (tprevtEntity) => tprevtEntity.idrpainicializa)
  tprevts: TprevtEntity[];

  @OneToMany(() => TprlndEntity, (tprlndEntity) => tprlndEntity.idrpapadrao)
  tprlnds: TprlndEntity[];

  @OneToMany(() => TprmerEntity, (tprmerEntity) => tprmerEntity.idrpa)
  tprmers: TprmerEntity[];

  @OneToMany(() => TprprcEntity, (tprprcEntity) => tprprcEntity.idrpainicial)
  tprprcs: TprprcEntity[];
}
