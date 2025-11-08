import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpprtictEntity } from './tFPPRTICT.entity';

@Index('PK_TFPPRTREM', ['nurem'], { unique: true })
@Entity('TFPPRTREM', { schema: 'SANKHYA' })
export class TfpprtremEntity {
  @Column('int', { primary: true, name: 'NUREM' })
  nurem: number;

  @Column('datetime', { name: 'DTINIREMUN', nullable: true })
  dtiniremun: Date | null;

  @Column('float', { name: 'VLRSALBASE', nullable: true, precision: 53 })
  vlrsalbase: number | null;

  @Column('smallint', { name: 'UNDPGTO', nullable: true })
  undpgto: number | null;

  @Column('varchar', { name: 'DSCSALVAR', nullable: true, length: 999 })
  dscsalvar: string | null;

  @ManyToOne(
    () => TfpprtictEntity,
    (tfpprtictEntity) => tfpprtictEntity.tfpprtrems,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUICT', referencedColumnName: 'nuict' }])
  nuict: TfpprtictEntity;
}
