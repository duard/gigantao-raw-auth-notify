import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprapaEntity } from './tPRAPA.entity';
import { TpriatvEntity } from './tPRIATV.entity';
import { TpravoEntity } from './tPRAVO.entity';
import { TprconfEntity } from './tPRCONF.entity';
import { TprropeEntity } from './tPRROPE.entity';

@Index('PK_TPRAPO', ['nuapo'], { unique: true })
@Entity('TPRAPO', { schema: 'SANKHYA' })
export class TprapoEntity {
  @Column('int', { primary: true, name: 'NUAPO' })
  nuapo: number;

  @Column('datetime', { name: 'DHAPO', nullable: true })
  dhapo: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 500 })
  observacao: string | null;

  @Column('varchar', {
    name: 'SITUACAO',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  situacao: string | null;

  @OneToMany(() => TprapaEntity, (tprapaEntity) => tprapaEntity.nuapo2)
  tprapas: TprapaEntity[];

  @ManyToOne(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.tprapos)
  @JoinColumn([{ name: 'IDIATV', referencedColumnName: 'idiatv' }])
  idiatv: TpriatvEntity;

  @OneToMany(() => TpravoEntity, (tpravoEntity) => tpravoEntity.nuapo)
  tpravos: TpravoEntity[];

  @OneToMany(() => TprconfEntity, (tprconfEntity) => tprconfEntity.nuapo)
  tprconfs: TprconfEntity[];

  @OneToMany(() => TprropeEntity, (tprropeEntity) => tprropeEntity.nuapo)
  tprropes: TprropeEntity[];
}
