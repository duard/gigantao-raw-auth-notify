import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcatpaEntity } from './tCATPA.entity';
import { TcamapEntity } from './tCAMAP.entity';

@Index('PK_TCANOT', ['numapa', 'codtpa'], { unique: true })
@Entity('TCANOT', { schema: 'SANKHYA' })
export class TcanotEntity {
  @Column('int', { primary: true, name: 'NUMAPA' })
  numapa: number;

  @Column('smallint', { primary: true, name: 'CODTPA' })
  codtpa: number;

  @Column('char', { name: 'NOTA', nullable: true, length: 2 })
  nota: string | null;

  @Column('datetime', { name: 'DATAPROVA' })
  dataprova: Date;

  @Column('datetime', { name: 'DATAENTREGA', nullable: true })
  dataentrega: Date | null;

  @Column('smallint', { name: 'TOTFREQ' })
  totfreq: number;

  @ManyToOne(() => TcatpaEntity, (tcatpaEntity) => tcatpaEntity.tcanots)
  @JoinColumn([{ name: 'CODTPA', referencedColumnName: 'codtpa' }])
  codtpa2: TcatpaEntity;

  @ManyToOne(() => TcamapEntity, (tcamapEntity) => tcamapEntity.tcanots)
  @JoinColumn([{ name: 'NUMAPA', referencedColumnName: 'numapa' }])
  numapa2: TcamapEntity;
}
