import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpambEntity } from './tFPAMB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPATIV', ['codamb', 'codativ'], { unique: true })
@Entity('TFPATIV', { schema: 'SANKHYA' })
export class TfpativEntity {
  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

  @Column('varchar', { primary: true, name: 'CODATIV', length: 6 })
  codativ: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpambEntity, (tfpambEntity) => tfpambEntity.tfpativs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODAMB', referencedColumnName: 'codamb' }])
  codamb2: TfpambEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpativs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
