import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPRDP', ['dtBf'], { unique: true })
@Entity('TGFPRDP', { schema: 'SANKHYA' })
export class TgfprdpEntity {
  @Column('datetime', { primary: true, name: 'DT_BF' })
  dtBf: Date;

  @Column('smallint', { name: 'IND_BF' })
  indBf: number;

  @Column('int', { name: 'DE_BF' })
  deBf: number;

  @Column('smallint', { name: 'IND_NAT' })
  indNat: number;

  @Column('smallint', { name: 'IND_ICMS_MIN' })
  indIcmsMin: number;

  @Column('float', { name: 'PCT_BF', precision: 53 })
  pctBf: number;

  @Column('smallint', { name: 'PRZ_BF' })
  przBf: number;

  @Column('float', { name: 'GI_01', precision: 53 })
  gi_01: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'IND_AP', nullable: true })
  indAp: number | null;

  @Column('varchar', { name: 'CODPRODSEMINC', nullable: true, length: 8 })
  codprodseminc: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfprdps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
