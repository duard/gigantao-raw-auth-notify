import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfprraEntity } from './tFPRRA.entity';
import { TfpambEntity } from './tFPAMB.entity';

@Index('PK_TFPAMBR', ['codamb', 'cpfresp'], { unique: true })
@Entity('TFPAMBR', { schema: 'SANKHYA' })
export class TfpambrEntity {
  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

  @Column('varchar', { primary: true, name: 'CPFRESP', length: 11 })
  cpfresp: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpambrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfprraEntity, (tfprraEntity) => tfprraEntity.tfpambrs)
  @JoinColumn([{ name: 'CPFRESP', referencedColumnName: 'cpfresp' }])
  cpfresp2: TfprraEntity;

  @ManyToOne(() => TfpambEntity, (tfpambEntity) => tfpambEntity.tfpambrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODAMB', referencedColumnName: 'codamb' }])
  codamb2: TfpambEntity;
}
