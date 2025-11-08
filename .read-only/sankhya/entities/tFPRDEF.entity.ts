import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpreqadmEntity } from './tFPREQADM.entity';

@Index('PK_TFPRDEF', ['idreqadm', 'tipodeficiencia'], { unique: true })
@Entity('TFPRDEF', { schema: 'SANKHYA' })
export class TfprdefEntity {
  @Column('int', { primary: true, name: 'IDREQADM' })
  idreqadm: number;

  @Column('smallint', { primary: true, name: 'TIPODEFICIENCIA' })
  tipodeficiencia: number;

  @ManyToOne(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.tfprdefs,
  )
  @JoinColumn([{ name: 'IDREQADM', referencedColumnName: 'id' }])
  idreqadm2: TfpreqadmEntity;
}
