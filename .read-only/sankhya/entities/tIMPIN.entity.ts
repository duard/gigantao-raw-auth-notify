import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimporEntity } from './tIMPOR.entity';
import { TimodaEntity } from './tIMODA.entity';
import { TimfidEntity } from './tIMFID.entity';
import { TimordEntity } from './tIMORD.entity';
import { TimcolEntity } from './tIMCOL.entity';
import { TimtraEntity } from './tIMTRA.entity';
import { TimrndEntity } from './tIMRND.entity';

@Index('PK_TIMPIN', ['nupin'], { unique: true })
@Entity('TIMPIN', { schema: 'SANKHYA' })
export class TimpinEntity {
  @Column('int', { primary: true, name: 'NUPIN' })
  nupin: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('datetime', { name: 'DHULTIMAEXEC', nullable: true })
  dhultimaexec: Date | null;

  @Column('varchar', { name: 'FILEULTIMAEXEC', nullable: true, length: 260 })
  fileultimaexec: string | null;

  @Column('varchar', { name: 'URLULTIMAEXEC', nullable: true, length: 500 })
  urlultimaexec: string | null;

  @ManyToOne(() => TimporEntity, (timporEntity) => timporEntity.timpins)
  @JoinColumn([{ name: 'NUPOR', referencedColumnName: 'porcodigo' }])
  nupor: TimporEntity;

  @ManyToOne(() => TimodaEntity, (timodaEntity) => timodaEntity.timpins)
  @JoinColumn([{ name: 'NUODA', referencedColumnName: 'nuoda' }])
  nuoda: TimodaEntity;

  @ManyToOne(() => TimfidEntity, (timfidEntity) => timfidEntity.timpins)
  @JoinColumn([{ name: 'NUFID', referencedColumnName: 'nufid' }])
  nuf: TimfidEntity;

  @ManyToOne(() => TimordEntity, (timordEntity) => timordEntity.timpins)
  @JoinColumn([{ name: 'NUORD', referencedColumnName: 'nuord' }])
  nuord: TimordEntity;

  @ManyToOne(() => TimcolEntity, (timcolEntity) => timcolEntity.timpins)
  @JoinColumn([{ name: 'NUCOL', referencedColumnName: 'nucol' }])
  nucol: TimcolEntity;

  @ManyToOne(() => TimtraEntity, (timtraEntity) => timtraEntity.timpins)
  @JoinColumn([{ name: 'NUTRA', referencedColumnName: 'nutra' }])
  nutra: TimtraEntity;

  @ManyToOne(() => TimrndEntity, (timrndEntity) => timrndEntity.timpins)
  @JoinColumn([{ name: 'NURND', referencedColumnName: 'nurnd' }])
  nurnd: TimrndEntity;
}
