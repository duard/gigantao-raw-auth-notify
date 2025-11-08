import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimclfEntity } from './tIMCLF.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TimmdaEntity } from './tIMMDA.entity';

@Index('PK_TIMVCO', ['vcocodigo'], { unique: true })
@Entity('TIMVCO', { schema: 'SANKHYA' })
export class TimvcoEntity {
  @Column('int', { primary: true, name: 'VCOCODIGO' })
  vcocodigo: number;

  @Column('varchar', { name: 'VCONOMEDOVEICULO', nullable: true, length: 30 })
  vconomedoveiculo: string | null;

  @Column('char', { name: 'VCOLEGADO', nullable: true, length: 1 })
  vcolegado: string | null;

  @OneToMany(() => TimclfEntity, (timclfEntity) => timclfEntity.clfveiculo)
  timclves: TimclfEntity[];

  @OneToMany(() => TimfacEntity, (timfacEntity) => timfacEntity.facveiculo)
  timfacs: TimfacEntity[];

  @ManyToOne(() => TimmdaEntity, (timmdaEntity) => timmdaEntity.timvcos)
  @JoinColumn([{ name: 'VCOMIDIA', referencedColumnName: 'mdacodigo' }])
  vcomidia: TimmdaEntity;
}
