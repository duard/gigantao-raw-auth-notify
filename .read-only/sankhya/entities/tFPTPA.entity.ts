import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPTPA', ['tipacidente'], { unique: true })
@Entity('TFPTPA', { schema: 'SANKHYA' })
export class TfptpaEntity {
  @Column('varchar', { primary: true, name: 'TIPACIDENTE', length: 10 })
  tipacidente: string;

  @Column('varchar', { name: 'DESCRTIPACIDENTE', length: 250 })
  descrtipacidente: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfptpas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
