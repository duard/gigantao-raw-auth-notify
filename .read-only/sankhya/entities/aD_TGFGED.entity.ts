import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AdDepalmEntity } from './aD_DEPALM.entity';
import { AdDepcapEntity } from './aD_DEPCAP.entity';
import { AdDepcmpEntity } from './aD_DEPCMP.entity';
import { AdDepcntEntity } from './aD_DEPCNT.entity';
import { AdDepcomEntity } from './aD_DEPCOM.entity';
import { AdDepctrEntity } from './aD_DEPCTR.entity';
import { AdDepfinEntity } from './aD_DEPFIN.entity';
import { AdDepfisEntity } from './aD_DEPFIS.entity';
import { AdDeplogEntity } from './aD_DEPLOG.entity';
import { AdDepmanEntity } from './aD_DEPMAN.entity';
import { AdDepquaEntity } from './aD_DEPQUA.entity';
import { AdDeprhEntity } from './aD_DEPRH.entity';
import { AdDepsgtEntity } from './aD_DEPSGT.entity';

@Index('PK_AD_TGFGED', ['id'], { unique: true })
@Entity('AD_TGFGED', { schema: 'SANKHYA' })
export class AdTgfgedEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'DESCR', nullable: true, length: 100 })
  descr: string | null;

  @OneToMany(() => AdDepalmEntity, (adDepalmEntity) => adDepalmEntity.adTgfged)
  adDepalms: AdDepalmEntity[];

  @OneToMany(() => AdDepcapEntity, (adDepcapEntity) => adDepcapEntity.adTgfged)
  adDepcaps: AdDepcapEntity[];

  @OneToMany(() => AdDepcmpEntity, (adDepcmpEntity) => adDepcmpEntity.adTgfged)
  adDepcmps: AdDepcmpEntity[];

  @OneToMany(() => AdDepcntEntity, (adDepcntEntity) => adDepcntEntity.adTgfged)
  adDepcnts: AdDepcntEntity[];

  @OneToMany(() => AdDepcomEntity, (adDepcomEntity) => adDepcomEntity.adTgfged)
  adDepcoms: AdDepcomEntity[];

  @OneToMany(() => AdDepctrEntity, (adDepctrEntity) => adDepctrEntity.adTgfged)
  adDepctrs: AdDepctrEntity[];

  @OneToMany(() => AdDepfinEntity, (adDepfinEntity) => adDepfinEntity.adTgfged)
  adDepfins: AdDepfinEntity[];

  @OneToMany(() => AdDepfisEntity, (adDepfisEntity) => adDepfisEntity.adTgfged)
  adDepfis: AdDepfisEntity[];

  @OneToMany(() => AdDeplogEntity, (adDeplogEntity) => adDeplogEntity.adTgfged)
  adDeplogs: AdDeplogEntity[];

  @OneToMany(() => AdDepmanEntity, (adDepmanEntity) => adDepmanEntity.adTgfged)
  adDepmen: AdDepmanEntity[];

  @OneToMany(() => AdDepquaEntity, (adDepquaEntity) => adDepquaEntity.adTgfged)
  adDepquas: AdDepquaEntity[];

  @OneToMany(() => AdDeprhEntity, (adDeprhEntity) => adDeprhEntity.adTgfged)
  adDeprhs: AdDeprhEntity[];

  @OneToMany(() => AdDepsgtEntity, (adDepsgtEntity) => adDepsgtEntity.adTgfged)
  adDepsgts: AdDepsgtEntity[];
}
