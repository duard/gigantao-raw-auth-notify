import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPTFA', ['codtipfinapesp'], { unique: true })
@Entity('TFPTFA', { schema: 'SANKHYA' })
export class TfptfaEntity {
  @Column('int', { primary: true, name: 'CODTIPFINAPESP' })
  codtipfinapesp: number;

  @Column('varchar', { name: 'DESCRTIPFINAPESP', length: 250 })
  descrtipfinapesp: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfptfas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
