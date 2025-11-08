import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsdplcEntity } from './tSDPLC.entity';
import { TsdplaEntity } from './tSDPLA.entity';

@Index('PK_TSDPLT', ['nupla', 'nometab'], { unique: true })
@Entity('TSDPLT', { schema: 'SANKHYA' })
export class TsdpltEntity {
  @Column('int', { primary: true, name: 'NUPLA' })
  nupla: number;

  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('datetime', { name: 'DHINICIOSINC', nullable: true })
  dhiniciosinc: Date | null;

  @Column('datetime', { name: 'DHULTIMASINC', nullable: true })
  dhultimasinc: Date | null;

  @Column('text', { name: 'FILTROLINHA', nullable: true })
  filtrolinha: string | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @OneToMany(() => TsdplcEntity, (tsdplcEntity) => tsdplcEntity.tsdplt)
  tsdplcs: TsdplcEntity[];

  @ManyToOne(() => TsdplaEntity, (tsdplaEntity) => tsdplaEntity.tsdplts)
  @JoinColumn([{ name: 'NUPLA', referencedColumnName: 'nupla' }])
  nupla2: TsdplaEntity;
}
