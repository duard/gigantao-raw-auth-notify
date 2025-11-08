import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { TimimvEntity } from './tIMIMV.entity';
import { TimporEntity } from './tIMPOR.entity';

@Index('PK_TIMTPL', ['tplcodigo'], { unique: true })
@Entity('TIMTPL', { schema: 'SANKHYA' })
export class TimtplEntity {
  @Column('int', { primary: true, name: 'TPLCODIGO' })
  tplcodigo: number;

  @Column('varchar', { name: 'TPLDESCRICAO', length: 100 })
  tpldescricao: string;

  @Column('int', { name: 'TPLQTDCONTRATADO', default: () => '(0)' })
  tplqtdcontratado: number;

  @Column('varchar', { name: 'TPLSIGLA', nullable: true, length: 50 })
  tplsigla: string | null;

  @ManyToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.timtpls)
  @JoinTable({
    name: 'TIMTIP',
    joinColumns: [{ name: 'TIPPLANO', referencedColumnName: 'tplcodigo' }],
    inverseJoinColumns: [
      { name: 'TIPIMOVEL', referencedColumnName: 'imvcodigo' },
    ],
    schema: 'SANKHYA',
  })
  timimvs: TimimvEntity[];

  @ManyToOne(() => TimporEntity, (timporEntity) => timporEntity.timtpls)
  @JoinColumn([{ name: 'TPLPORTAL', referencedColumnName: 'porcodigo' }])
  tplportal: TimporEntity;
}
