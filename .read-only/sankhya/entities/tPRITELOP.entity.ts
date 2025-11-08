import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprilopEntity } from './tPRILOP.entity';

@Index('PK_TPRITELOP', ['nulop', 'seqop', 'nunota', 'seqnota'], {
  unique: true,
})
@Entity('TPRITELOP', { schema: 'SANKHYA' })
export class TpritelopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('smallint', { primary: true, name: 'SEQOP' })
  seqop: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQNOTA' })
  seqnota: number;

  @Column('datetime', { name: 'DTPREVENT', nullable: true })
  dtprevent: Date | null;

  @ManyToOne(() => TprilopEntity, (tprilopEntity) => tprilopEntity.tpritelops)
  @JoinColumn([
    { name: 'NULOP', referencedColumnName: 'nulop' },
    { name: 'SEQOP', referencedColumnName: 'seqop' },
  ])
  tprilop: TprilopEntity;
}
