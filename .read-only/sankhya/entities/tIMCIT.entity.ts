import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimfciEntity } from './tIMFCI.entity';

@Index('PK_TIMCIT', ['citcodigo'], { unique: true })
@Entity('TIMCIT', { schema: 'SANKHYA' })
export class TimcitEntity {
  @Column('int', { primary: true, name: 'CITCODIGO' })
  citcodigo: number;

  @Column('datetime', { name: 'CITVIGENCIA', nullable: true })
  citvigencia: Date | null;

  @Column('float', { name: 'CITCOMAVISTA', nullable: true, precision: 53 })
  citcomavista: number | null;

  @Column('char', { name: 'CITINCORPAOVALOR', nullable: true, length: 1 })
  citincorpaovalor: string | null;

  @OneToMany(() => TimfciEntity, (timfciEntity) => timfciEntity.fcicomissao2)
  timfcis: TimfciEntity[];
}
