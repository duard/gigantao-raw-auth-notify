import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfrngEntity } from './tGFRNG.entity';

@Index('PK_TGFTRN', ['nurng', 'codtipoper'], { unique: true })
@Entity('TGFTRN', { schema: 'SANKHYA' })
export class TgftrnEntity {
  @Column('int', { primary: true, name: 'NURNG' })
  nurng: number;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { name: 'SEQEXEC', nullable: true })
  seqexec: number | null;

  @ManyToOne(() => TgfrngEntity, (tgfrngEntity) => tgfrngEntity.tgftrns)
  @JoinColumn([{ name: 'NURNG', referencedColumnName: 'nurng' }])
  nurng2: TgfrngEntity;
}
