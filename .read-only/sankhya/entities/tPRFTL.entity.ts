import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TprlpaEntity } from './tPRLPA.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TprvftlEntity } from './tPRVFTL.entity';

@Index('PK_TPRFTL', ['idformula'], { unique: true })
@Entity('TPRFTL', { schema: 'SANKHYA' })
export class TprftlEntity {
  @Column('int', { primary: true, name: 'IDFORMULA' })
  idformula: number;

  @Column('varchar', { name: 'DESCFORMULA', length: 50 })
  descformula: string;

  @Column('varchar', { name: 'EXPRESSAO', nullable: true, length: 255 })
  expressao: string | null;

  @OneToMany(() => TprlpaEntity, (tprlpaEntity) => tprlpaEntity.idformula)
  tprlpas: TprlpaEntity[];

  @OneToMany(() => TprprcEntity, (tprprcEntity) => tprprcEntity.idformula)
  tprprcs: TprprcEntity[];

  @OneToMany(() => TprvftlEntity, (tprvftlEntity) => tprvftlEntity.idformula2)
  tprvftls: TprvftlEntity[];
}
