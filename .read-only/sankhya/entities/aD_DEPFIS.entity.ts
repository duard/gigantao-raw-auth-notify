import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdTgfgedEntity } from './aD_TGFGED.entity';

@Index('PK_AD_DEPFIS', ['id', 'nureg'], { unique: true })
@Entity('AD_DEPFIS', { schema: 'SANKHYA' })
export class AdDepfisEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'NUREG' })
  nureg: number;

  @Column('varchar', { name: 'DESCREG', nullable: true, length: 100 })
  descreg: string | null;

  @ManyToOne(() => AdTgfgedEntity, (adTgfgedEntity) => adTgfgedEntity.adDepfis)
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  adTgfged: AdTgfgedEntity;
}
