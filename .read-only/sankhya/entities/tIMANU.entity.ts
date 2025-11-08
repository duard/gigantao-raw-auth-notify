import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimimvEntity } from './tIMIMV.entity';
import { TimcfiEntity } from './tIMCFI.entity';

@Index('PK_TIMANU', ['anuimovel', 'anucodigo'], { unique: true })
@Entity('TIMANU', { schema: 'SANKHYA' })
export class TimanuEntity {
  @Column('int', { primary: true, name: 'ANUIMOVEL' })
  anuimovel: number;

  @Column('smallint', { primary: true, name: 'ANUCODIGO' })
  anucodigo: number;

  @Column('text', { name: 'ANUDESCRICAO', nullable: true })
  anudescricao: string | null;

  @Column('char', { name: 'ANULEGADO', nullable: true, length: 1 })
  anulegado: string | null;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timanus)
  @JoinColumn([{ name: 'ANUIMOVEL', referencedColumnName: 'imvcodigo' }])
  anuimovel2: TimimvEntity;

  @OneToMany(() => TimcfiEntity, (timcfiEntity) => timcfiEntity.timanu)
  timcfis: TimcfiEntity[];
}
