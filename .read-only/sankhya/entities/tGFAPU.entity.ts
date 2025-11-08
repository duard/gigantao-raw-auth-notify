import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftamEntity } from './tGFTAM.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFAPU', ['codtipamostra', 'codusuapu', 'tipomanipulacao'], {
  unique: true,
})
@Entity('TGFAPU', { schema: 'SANKHYA' })
export class TgfapuEntity {
  @Column('smallint', { primary: true, name: 'CODUSUAPU' })
  codusuapu: number;

  @Column('int', { primary: true, name: 'CODTIPAMOSTRA' })
  codtipamostra: number;

  @Column('varchar', { primary: true, name: 'TIPOMANIPULACAO', length: 1 })
  tipomanipulacao: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgftamEntity, (tgftamEntity) => tgftamEntity.tgfapus)
  @JoinColumn([
    { name: 'CODTIPAMOSTRA', referencedColumnName: 'codtipamostra' },
  ])
  codtipamostra2: TgftamEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfapus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfapus2)
  @JoinColumn([{ name: 'CODUSUAPU', referencedColumnName: 'codusu' }])
  codusuapu2: TsiusuEntity;
}
