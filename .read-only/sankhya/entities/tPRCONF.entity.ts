import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprcoiEntity } from './tPRCOI.entity';
import { TpriatvEntity } from './tPRIATV.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TprapoEntity } from './tPRAPO.entity';

@Index('PK_TPRCONF', ['nuconf'], { unique: true })
@Entity('TPRCONF', { schema: 'SANKHYA' })
export class TprconfEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('datetime', { name: 'DHINICONF' })
  dhiniconf: Date;

  @Column('datetime', { name: 'DHFINCONF', nullable: true })
  dhfinconf: Date | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'A'" })
  status: string;

  @OneToMany(() => TprcoiEntity, (tprcoiEntity) => tprcoiEntity.nuconf2)
  tprcois: TprcoiEntity[];

  @ManyToOne(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.tprconfs)
  @JoinColumn([{ name: 'IDIATV', referencedColumnName: 'idiatv' }])
  idiatv: TpriatvEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tprconfs)
  @JoinColumn([{ name: 'CODUSUCONF', referencedColumnName: 'codusu' }])
  codusuconf: TsiusuEntity;

  @ManyToOne(() => TprapoEntity, (tprapoEntity) => tprapoEntity.tprconfs)
  @JoinColumn([{ name: 'NUAPO', referencedColumnName: 'nuapo' }])
  nuapo: TprapoEntity;
}
