import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpprtictEntity } from './tFPPRTICT.entity';

@Index('PK_TFPPRTABONO', ['nuabono'], { unique: true })
@Index('UK_TFPPRTABONO', ['nuict', 'anobase'], { unique: true })
@Entity('TFPPRTABONO', { schema: 'SANKHYA' })
export class TfpprtabonoEntity {
  @Column('int', { primary: true, name: 'NUABONO' })
  nuabono: number;

  @Column('int', { name: 'NUICT', unique: true })
  nuict: number;

  @Column('datetime', { name: 'ANOBASE', nullable: true, unique: true })
  anobase: Date | null;

  @ManyToOne(
    () => TfpprtictEntity,
    (tfpprtictEntity) => tfpprtictEntity.tfpprtabonos,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUICT', referencedColumnName: 'nuict' }])
  nuict2: TfpprtictEntity;
}
