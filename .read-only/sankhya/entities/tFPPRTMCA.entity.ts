import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpprtictEntity } from './tFPPRTICT.entity';

@Index('PK_TFPPRTMCA', ['numca'], { unique: true })
@Entity('TFPPRTMCA', { schema: 'SANKHYA' })
export class TfpprtmcaEntity {
  @Column('int', { primary: true, name: 'NUMCA' })
  numca: number;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('smallint', { name: 'NATATIVIDADE', nullable: true })
  natatividade: number | null;

  @Column('datetime', { name: 'DTINIMUDCATEG', nullable: true })
  dtinimudcateg: Date | null;

  @ManyToOne(
    () => TfpprtictEntity,
    (tfpprtictEntity) => tfpprtictEntity.tfpprtmcas,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUICT', referencedColumnName: 'nuict' }])
  nuict: TfpprtictEntity;
}
