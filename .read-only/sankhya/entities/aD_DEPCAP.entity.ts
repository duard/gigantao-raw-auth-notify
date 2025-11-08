import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdTgfgedEntity } from './aD_TGFGED.entity';

@Index('PK_AD_DEPCAP', ['id', 'nureg'], { unique: true })
@Entity('AD_DEPCAP', { schema: 'SANKHYA' })
export class AdDepcapEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'NUREG' })
  nureg: number;

  @Column('varchar', { name: 'DESCREG', nullable: true, length: 100 })
  descreg: string | null;

  @ManyToOne(() => AdTgfgedEntity, (adTgfgedEntity) => adTgfgedEntity.adDepcaps)
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  adTgfged: AdTgfgedEntity;
}
