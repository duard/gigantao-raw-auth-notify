import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpspenEntity } from './tFPSPEN.entity';

@Index('PK_TFPFILAESOCIAL', ['id'], { unique: true })
@Entity('TFPFILAESOCIAL', { schema: 'SANKHYA' })
export class TfpfilaesocialEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @ManyToOne(
    () => TfpspenEntity,
    (tfpspenEntity) => tfpspenEntity.tfpfilaesocials,
  )
  @JoinColumn([{ name: 'IDTFPSPEN', referencedColumnName: 'id' }])
  idtfpspen: TfpspenEntity;
}
