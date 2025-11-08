import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpprtictEntity } from './tFPPRTICT.entity';
import { TfpprtintermEntity } from './tFPPRTINTERM.entity';

@Index('PK_TFPPRTIBC', ['nuibc'], { unique: true })
@Entity('TFPPRTIBC', { schema: 'SANKHYA' })
export class TfpprtibcEntity {
  @Column('int', { primary: true, name: 'NUIBC' })
  nuibc: number;

  @Column('datetime', { name: 'DTREF', nullable: true })
  dtref: Date | null;

  @Column('float', { name: 'VLRBASECONTPREV', nullable: true, precision: 53 })
  vlrbasecontprev: number | null;

  @Column('float', { name: 'VLRBASECONTPREV13', nullable: true, precision: 53 })
  vlrbasecontprev13: number | null;

  @Column('float', { name: 'VLRBASECALCFGTS', nullable: true, precision: 53 })
  vlrbasecalcfgts: number | null;

  @Column('float', { name: 'VLRBASECALCFGTS13', nullable: true, precision: 53 })
  vlrbasecalcfgts13: number | null;

  @Column('smallint', { name: 'GRAUEXPAGNOC', nullable: true })
  grauexpagnoc: number | null;

  @Column('float', {
    name: 'VLRBASECALCGUIAFGTS',
    nullable: true,
    precision: 53,
  })
  vlrbasecalcguiafgts: number | null;

  @Column('float', {
    name: 'VLRBASECALCGUIAFGTS13',
    nullable: true,
    precision: 53,
  })
  vlrbasecalcguiafgts13: number | null;

  @Column('varchar', { name: 'FGTSPAGOTRAB', nullable: true, length: 1 })
  fgtspagotrab: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('float', { name: 'VLRREMUNPREVGFIP', nullable: true, precision: 53 })
  vlrremunprevgfip: number | null;

  @Column('float', { name: 'VRBCFGTSPROCTRAB', nullable: true, precision: 53 })
  vrbcfgtsproctrab: number | null;

  @Column('float', { name: 'VRBCFGTSSEFIP', nullable: true, precision: 53 })
  vrbcfgtssefip: number | null;

  @Column('float', { name: 'VRBCFGTSDECANT', nullable: true, precision: 53 })
  vrbcfgtsdecant: number | null;

  @ManyToOne(
    () => TfpprtictEntity,
    (tfpprtictEntity) => tfpprtictEntity.tfpprtibcs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUICT', referencedColumnName: 'nuict' }])
  nuict: TfpprtictEntity;

  @OneToMany(
    () => TfpprtintermEntity,
    (tfpprtintermEntity) => tfpprtintermEntity.nuibc,
  )
  tfpprtinterms: TfpprtintermEntity[];
}
