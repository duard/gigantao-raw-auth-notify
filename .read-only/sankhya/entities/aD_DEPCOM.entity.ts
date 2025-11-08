import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdTgfgedEntity } from './aD_TGFGED.entity';

@Index('PK_AD_DEPCOM', ['id', 'nureg'], { unique: true })
@Entity('AD_DEPCOM', { schema: 'SANKHYA' })
export class AdDepcomEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'NUREG' })
  nureg: number;

  @Column('varchar', { name: 'DESCREG', nullable: true, length: 100 })
  descreg: string | null;

  @ManyToOne(() => AdTgfgedEntity, (adTgfgedEntity) => adTgfgedEntity.adDepcoms)
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  adTgfged: AdTgfgedEntity;
}
