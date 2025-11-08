import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimiprEntity } from './tIMIPR.entity';

@Index('PK_TIMMDS', ['mdscodigo'], { unique: true })
@Entity('TIMMDS', { schema: 'SANKHYA' })
export class TimmdsEntity {
  @Column('int', { primary: true, name: 'MDSCODIGO' })
  mdscodigo: number;

  @Column('varchar', { name: 'MDSMOTIVO', nullable: true, length: 40 })
  mdsmotivo: string | null;

  @OneToMany(() => TimiprEntity, (timiprEntity) => timiprEntity.iprmtvdesist)
  timiprs: TimiprEntity[];
}
