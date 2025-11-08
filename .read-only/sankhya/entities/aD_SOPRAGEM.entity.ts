import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { AdSopragemiteEntity } from './aD_SOPRAGEMITE.entity';

@Index('PK_AD_SOPRAGEM', ['id'], { unique: true })
@Entity('AD_SOPRAGEM', { schema: 'SANKHYA' })
export class AdSopragemEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('datetime', { name: 'DTREGISTRO', nullable: true })
  dtregistro: Date | null;

  @Column('datetime', { name: 'DTINI', nullable: true })
  dtini: Date | null;

  @Column('datetime', { name: 'DTFIN', nullable: true })
  dtfin: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adSopragems)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => AdSopragemiteEntity,
    (adSopragemiteEntity) => adSopragemiteEntity.adSopragem,
  )
  adSopragemites: AdSopragemiteEntity[];
}
