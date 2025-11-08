import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPPCAT', ['codparteatingida'], { unique: true })
@Entity('TFPPCAT', { schema: 'SANKHYA' })
export class TfppcatEntity {
  @Column('int', { primary: true, name: 'CODPARTEATINGIDA' })
  codparteatingida: number;

  @Column('varchar', { name: 'DESCRPARTEATINGIDA', length: 250 })
  descrparteatingida: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppcats)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
