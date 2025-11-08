import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpasoEntity } from './tFPASO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPRCO', ['nuaso', 'codagente'], { unique: true })
@Entity('TFPRCO', { schema: 'SANKHYA' })
export class TfprcoEntity {
  @Column('int', { primary: true, name: 'NUASO' })
  nuaso: number;

  @Column('varchar', { primary: true, name: 'CODAGENTE', length: 10 })
  codagente: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpasoEntity, (tfpasoEntity) => tfpasoEntity.tfprcos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUASO', referencedColumnName: 'nuaso' }])
  nuaso2: TfpasoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfprcos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
