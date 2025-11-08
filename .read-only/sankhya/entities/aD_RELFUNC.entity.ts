import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AdRelfunciteEntity } from './aD_RELFUNCITE.entity';

@Index('PK_AD_RELFUNC', ['codusu'], { unique: true })
@Entity('AD_RELFUNC', { schema: 'SANKHYA' })
export class AdRelfuncEntity {
  @Column('int', { primary: true, name: 'CODUSU' })
  codusu: number;

  @OneToMany(
    () => AdRelfunciteEntity,
    (adRelfunciteEntity) => adRelfunciteEntity.codusu2,
  )
  adRelfuncites: AdRelfunciteEntity[];

  @OneToMany(
    () => AdRelfunciteEntity,
    (adRelfunciteEntity) => adRelfunciteEntity.codusu3,
  )
  adRelfuncites2: AdRelfunciteEntity[];
}
