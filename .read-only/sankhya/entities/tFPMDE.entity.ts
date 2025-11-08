import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfppreEntity } from './tFPPRE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPMDE', ['codpref', 'codevento'], { unique: true })
@Entity('TFPMDE', { schema: 'SANKHYA' })
export class TfpmdeEntity {
  @Column('smallint', { primary: true, name: 'CODPREF' })
  codpref: number;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpmdes)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TfppreEntity, (tfppreEntity) => tfppreEntity.tfpmdes)
  @JoinColumn([{ name: 'CODPREF', referencedColumnName: 'codpref' }])
  codpref2: TfppreEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpmdes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
