import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { AdRelfuncEntity } from './aD_RELFUNC.entity';

@Index('PK_AD_RELFUNCITE', ['codusu', 'codusurel'], { unique: true })
@Entity('AD_RELFUNCITE', { schema: 'SANKHYA' })
export class AdRelfunciteEntity {
  @Column('smallint', { primary: true, name: 'CODUSUREL' })
  codusurel: number;

  @Column('int', { primary: true, name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adRelfuncites)
  @JoinColumn([{ name: 'CODUSUREL', referencedColumnName: 'codusu' }])
  codusurel2: TsiusuEntity;

  @ManyToOne(
    () => AdRelfuncEntity,
    (adRelfuncEntity) => adRelfuncEntity.adRelfuncites,
  )
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: AdRelfuncEntity;

  @ManyToOne(
    () => AdRelfuncEntity,
    (adRelfuncEntity) => adRelfuncEntity.adRelfuncites2,
  )
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu3: AdRelfuncEntity;
}
