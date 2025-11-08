import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfconEntity } from './tGFCON.entity';
import { Tgfcoi2Entity } from './tGFCOI2.entity';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFCBC', ['codbarcomp'], { unique: true })
@Index('TGFCBC_I01', ['nuconf', 'seqconf'], {})
@Entity('TGFCBC', { schema: 'SANKHYA' })
export class TgfcbcEntity {
  @Column('varchar', { primary: true, name: 'CODBARCOMP', length: 40 })
  codbarcomp: string;

  @Column('int', { name: 'NUCONF', nullable: true })
  nuconf: number | null;

  @Column('int', { name: 'SEQCONF', nullable: true })
  seqconf: number | null;

  @ManyToOne(() => TgfconEntity, (tgfconEntity) => tgfconEntity.tgfcbcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCONF', referencedColumnName: 'nuconf' },
    { name: 'SEQCONF', referencedColumnName: 'sequencia' },
  ])
  tgfcon: TgfconEntity;

  @ManyToOne(() => Tgfcoi2Entity, (tgfcoi2Entity) => tgfcoi2Entity.tgfcbcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCONF2', referencedColumnName: 'nuconf' },
    { name: 'SEQCONF2', referencedColumnName: 'seqconf' },
  ])
  tgfcoi: Tgfcoi2Entity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfcbcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
