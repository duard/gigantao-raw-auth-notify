import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcrcEntity } from './tGFCRC.entity';
import { TgfarcEntity } from './tGFARC.entity';

@Index('PK_TGFRRC', ['nuarc', 'seqreg'], { unique: true })
@Entity('TGFRRC', { schema: 'SANKHYA' })
export class TgfrrcEntity {
  @Column('int', { primary: true, name: 'NUARC' })
  nuarc: number;

  @Column('smallint', { primary: true, name: 'SEQREG' })
  seqreg: number;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { name: 'LARGTOTAL', nullable: true })
  largtotal: number | null;

  @Column('varchar', { name: 'OBRIGATORIO', length: 1, default: () => "'N'" })
  obrigatorio: string;

  @Column('text', { name: 'QUERYEXPORTACAO', nullable: true })
  queryexportacao: string | null;

  @Column('text', { name: 'DATASOURCE', nullable: true })
  datasource: string | null;

  @Column('text', { name: 'SQLPARAMS', nullable: true })
  sqlparams: string | null;

  @OneToMany(() => TgfcrcEntity, (tgfcrcEntity) => tgfcrcEntity.tgfrrc)
  tgfcrcs: TgfcrcEntity[];

  @ManyToOne(() => TgfarcEntity, (tgfarcEntity) => tgfarcEntity.tgfrrcs)
  @JoinColumn([{ name: 'NUARC', referencedColumnName: 'nuarc' }])
  nuarc2: TgfarcEntity;
}
