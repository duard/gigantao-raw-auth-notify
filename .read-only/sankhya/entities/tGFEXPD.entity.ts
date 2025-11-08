import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsipaiEntity } from './tSIPAI.entity';
import { TgfexprEntity } from './tGFEXPR.entity';

@Index('PK_TGFEXPD', ['nrodeclaracao'], { unique: true })
@Entity('TGFEXPD', { schema: 'SANKHYA' })
export class TgfexpdEntity {
  @Column('varchar', { primary: true, name: 'NRODECLARACAO', length: 14 })
  nrodeclaracao: string;

  @Column('smallint', { name: 'TIPODEC', nullable: true })
  tipodec: number | null;

  @Column('datetime', { name: 'DTDECLARACAO', nullable: true })
  dtdeclaracao: Date | null;

  @Column('datetime', { name: 'DTAVERBACAO', nullable: true })
  dtaverbacao: Date | null;

  @Column('char', { name: 'NATUREZA', length: 1, default: () => "'1'" })
  natureza: string;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tgfexpds)
  @JoinColumn([{ name: 'CODPAISDESTINO', referencedColumnName: 'codpais' }])
  codpaisdestino: TsipaiEntity;

  @OneToMany(
    () => TgfexprEntity,
    (tgfexprEntity) => tgfexprEntity.nrodeclaracao2,
  )
  tgfexprs: TgfexprEntity[];
}
