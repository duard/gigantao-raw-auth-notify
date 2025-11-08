import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpprtictEntity } from './tFPPRTICT.entity';

@Index('PK_TFPPRTIVI', ['nuivi'], { unique: true })
@Entity('TFPPRTIVI', { schema: 'SANKHYA' })
export class TfpprtiviEntity {
  @Column('int', { primary: true, name: 'NUIVI' })
  nuivi: number;

  @Column('varchar', { name: 'CODMATINC', nullable: true, length: 30 })
  codmatinc: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('datetime', { name: 'DTINITSVE', nullable: true })
  dtinitsve: Date | null;

  @ManyToOne(
    () => TfpprtictEntity,
    (tfpprtictEntity) => tfpprtictEntity.tfpprtivis,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUICT', referencedColumnName: 'nuict' }])
  nuict: TfpprtictEntity;
}
