import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfexpnEntity } from './tGFEXPN.entity';
import { TgfexpdEntity } from './tGFEXPD.entity';

@Index('PK_TGFEXPR', ['nrore', 'nrodeclaracao'], { unique: true })
@Entity('TGFEXPR', { schema: 'SANKHYA' })
export class TgfexprEntity {
  @Column('varchar', { primary: true, name: 'NRORE', length: 12 })
  nrore: string;

  @Column('varchar', { primary: true, name: 'NRODECLARACAO', length: 14 })
  nrodeclaracao: string;

  @Column('datetime', { name: 'DTRE', nullable: true })
  dtre: Date | null;

  @OneToMany(() => TgfexpnEntity, (tgfexpnEntity) => tgfexpnEntity.tgfexpr)
  tgfexpns: TgfexpnEntity[];

  @ManyToOne(() => TgfexpdEntity, (tgfexpdEntity) => tgfexpdEntity.tgfexprs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NRODECLARACAO', referencedColumnName: 'nrodeclaracao' },
  ])
  nrodeclaracao2: TgfexpdEntity;
}
