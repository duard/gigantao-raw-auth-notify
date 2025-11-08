import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TfpocoEntity } from './tFPOCO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPPRA', ['nupreas', 'nuocor'], { unique: true })
@Index('TFPPRA_I01', ['nuocor'], { unique: true })
@Entity('TFPPRA', { schema: 'SANKHYA' })
export class TfppraEntity {
  @Column('int', { primary: true, name: 'NUPREAS' })
  nupreas: number;

  @Column('int', { primary: true, name: 'NUOCOR' })
  nuocor: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfppra, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor2: TfpocoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppras)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
