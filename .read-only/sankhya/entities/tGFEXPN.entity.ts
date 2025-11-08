import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfexpcEntity } from './tGFEXPC.entity';
import { TgfexprEntity } from './tGFEXPR.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFEXPN', ['nunota', 'nrore', 'nrodeclaracao'], { unique: true })
@Entity('TGFEXPN', { schema: 'SANKHYA' })
export class TgfexpnEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { primary: true, name: 'NRORE', length: 12 })
  nrore: string;

  @Column('varchar', { primary: true, name: 'NRODECLARACAO', length: 14 })
  nrodeclaracao: string;

  @Column('smallint', { name: 'TIPOCONHEC', nullable: true })
  tipoconhec: number | null;

  @Column('varchar', { name: 'NROCONHEC', nullable: true, length: 18 })
  nroconhec: string | null;

  @Column('datetime', { name: 'DTCONHEC', nullable: true })
  dtconhec: Date | null;

  @Column('char', { name: 'NATUREZA', nullable: true, length: 1 })
  natureza: string | null;

  @OneToMany(() => TgfexpcEntity, (tgfexpcEntity) => tgfexpcEntity.tgfexpn)
  tgfexpcs: TgfexpcEntity[];

  @ManyToOne(() => TgfexprEntity, (tgfexprEntity) => tgfexprEntity.tgfexpns, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NRORE', referencedColumnName: 'nrore' },
    { name: 'NRODECLARACAO', referencedColumnName: 'nrodeclaracao' },
  ])
  tgfexpr: TgfexprEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfexpns)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
