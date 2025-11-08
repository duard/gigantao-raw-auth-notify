import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpbasEntity } from './tFPBAS.entity';
import { TfpbastesteEntity } from './tFPBASTESTE.entity';
import { TfpbsuEntity } from './tFPBSU.entity';

@Index('PK_TPFLOGCALC', ['codlog'], { unique: true })
@Entity('TFPLOGCALC', { schema: 'SANKHYA' })
export class TfplogcalcEntity {
  @Column('int', { primary: true, name: 'CODLOG' })
  codlog: number;

  @Column('text', { name: 'LOG', nullable: true })
  log: string | null;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @OneToMany(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.codlog)
  tfpbas: TfpbasEntity[];

  @OneToMany(
    () => TfpbastesteEntity,
    (tfpbastesteEntity) => tfpbastesteEntity.codlog,
  )
  tfpbastestes: TfpbastesteEntity[];

  @OneToMany(() => TfpbsuEntity, (tfpbsuEntity) => tfpbsuEntity.codlog)
  tfpbsus: TfpbsuEntity[];
}
