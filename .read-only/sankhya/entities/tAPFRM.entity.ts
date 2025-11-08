import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TapfatEntity } from './tAPFAT.entity';
import { TapmrmEntity } from './tAPMRM.entity';

@Index('PK_TAPFRM', ['nufat', 'nurm', 'tipo'], { unique: true })
@Entity('TAPFRM', { schema: 'SANKHYA' })
export class TapfrmEntity {
  @Column('int', { primary: true, name: 'NUFAT' })
  nufat: number;

  @Column('int', { primary: true, name: 'NURM' })
  nurm: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('float', { name: 'PERCFAT', nullable: true, precision: 53 })
  percfat: number | null;

  @ManyToOne(() => TapfatEntity, (tapfatEntity) => tapfatEntity.tapfrms)
  @JoinColumn([{ name: 'NUFAT', referencedColumnName: 'nufat' }])
  nufat2: TapfatEntity;

  @ManyToOne(() => TapmrmEntity, (tapmrmEntity) => tapmrmEntity.tapfrms)
  @JoinColumn([{ name: 'NURM', referencedColumnName: 'nurm' }])
  nurm2: TapmrmEntity;
}
