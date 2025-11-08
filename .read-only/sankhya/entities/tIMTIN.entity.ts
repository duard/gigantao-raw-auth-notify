import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TiminrEntity } from './tIMINR.entity';
import { TimintEntity } from './tIMINT.entity';

@Index('PK_TIMTIN', ['tincodigo'], { unique: true })
@Entity('TIMTIN', { schema: 'SANKHYA' })
export class TimtinEntity {
  @Column('int', { primary: true, name: 'TINCODIGO' })
  tincodigo: number;

  @Column('varchar', { name: 'TINDESCRICAO', nullable: true, length: 50 })
  tindescricao: string | null;

  @OneToMany(() => TiminrEntity, (timinrEntity) => timinrEntity.inrtipointermed)
  timinrs: TiminrEntity[];

  @OneToMany(() => TimintEntity, (timintEntity) => timintEntity.inttipointermed)
  timints: TimintEntity[];
}
