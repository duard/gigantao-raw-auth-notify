import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfcbcoEntity } from './tFCBCO.entity';

@Index('PK_TFCTEL', ['nucurriculo', 'telefone'], { unique: true })
@Entity('TFCTEL', { schema: 'SANKHYA' })
export class TfctelEntity {
  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('varchar', { primary: true, name: 'TELEFONE', length: 13 })
  telefone: string;

  @Column('char', { name: 'OBS', nullable: true, length: 200 })
  obs: string | null;

  @ManyToOne(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.tfctels)
  @JoinColumn([{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }])
  nucurriculo2: TfcbcoEntity;
}
