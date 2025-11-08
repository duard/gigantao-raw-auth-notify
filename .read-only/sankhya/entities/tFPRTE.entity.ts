import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpcreEntity } from './tFPCRE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpeveEntity } from './tFPEVE.entity';

@Index('PK_TFPRTE', ['codcrirateio', 'codevento'], { unique: true })
@Entity('TFPRTE', { schema: 'SANKHYA' })
export class TfprteEntity {
  @Column('smallint', { primary: true, name: 'CODCRIRATEIO' })
  codcrirateio: number;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfpcreEntity, (tfpcreEntity) => tfpcreEntity.tfprtes)
  @JoinColumn([{ name: 'CODCRIRATEIO', referencedColumnName: 'codcrirateio' }])
  codcrirateio2: TfpcreEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfprtes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfprtes)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;
}
