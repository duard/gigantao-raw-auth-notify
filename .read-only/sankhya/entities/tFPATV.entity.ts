import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPATV', ['codativ'], { unique: true })
@Entity('TFPATV', { schema: 'SANKHYA' })
export class TfpatvEntity {
  @Column('varchar', { primary: true, name: 'CODATIV', length: 6 })
  codativ: string;

  @Column('varchar', { name: 'DESCRATIV', nullable: true, length: 255 })
  descrativ: string | null;

  @Column('varchar', { name: 'DESCRCOMPLETA', nullable: true, length: 3103 })
  descrcompleta: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpatvs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
