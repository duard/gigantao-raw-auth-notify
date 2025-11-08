import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFIRR', ['nunota', 'sequencia'], { unique: true })
@Index('TGFIRR_I01', ['nunotafat', 'sequenciafat'], {})
@Index('TGFIRR_I02', ['nunotaret', 'sequenciaret'], {})
@Index('TGFIRR_I03', ['nunotarem', 'sequenciarem'], {})
@Entity('TGFIRR', { schema: 'SANKHYA' })
export class TgfirrEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUNOTAREM', nullable: true })
  nunotarem: number | null;

  @Column('smallint', { name: 'SEQUENCIAREM', nullable: true })
  sequenciarem: number | null;

  @Column('int', { name: 'NUNOTARET', nullable: true })
  nunotaret: number | null;

  @Column('smallint', { name: 'SEQUENCIARET', nullable: true })
  sequenciaret: number | null;

  @Column('int', { name: 'NUNOTAFAT', nullable: true })
  nunotafat: number | null;

  @Column('smallint', { name: 'SEQUENCIAFAT', nullable: true })
  sequenciafat: number | null;

  @Column('char', { name: 'REMETER', nullable: true, length: 1 })
  remeter: string | null;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfirrs)
  @JoinColumn([
    { name: 'NUNOTAREM', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIAREM', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfirrs2)
  @JoinColumn([
    { name: 'NUNOTARET', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequencia' },
  ])
  tgfite2: TgfiteEntity;

  @OneToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfirr)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite3: TgfiteEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfirrs3)
  @JoinColumn([
    { name: 'NUNOTAFAT', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIAFAT', referencedColumnName: 'sequencia' },
  ])
  tgfite4: TgfiteEntity;
}
