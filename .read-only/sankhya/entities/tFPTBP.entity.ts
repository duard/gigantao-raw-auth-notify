import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPTBP', ['tipbeneficio'], { unique: true })
@Entity('TFPTBP', { schema: 'SANKHYA' })
export class TfptbpEntity {
  @Column('int', { primary: true, name: 'TIPBENEFICIO' })
  tipbeneficio: number;

  @Column('varchar', { name: 'DESCRTIPBENEFICIO', length: 250 })
  descrtipbeneficio: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfptbps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
