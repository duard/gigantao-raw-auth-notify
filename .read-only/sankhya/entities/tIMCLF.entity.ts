import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimcfiEntity } from './tIMCFI.entity';
import { TimvcoEntity } from './tIMVCO.entity';

@Index('PK_TIMCLF', ['clfcodigo'], { unique: true })
@Entity('TIMCLF', { schema: 'SANKHYA' })
export class TimclfEntity {
  @Column('int', { primary: true, name: 'CLFCODIGO' })
  clfcodigo: number;

  @Column('varchar', { name: 'CLFDESCRICAO', length: 30 })
  clfdescricao: string;

  @Column('varchar', { name: 'CLFOBSERVACAO', nullable: true, length: 60 })
  clfobservacao: string | null;

  @Column('char', { name: 'CLFESTAGIO', length: 1, default: () => '(0)' })
  clfestagio: string;

  @Column('char', { name: 'CLFPARAQUE', length: 1 })
  clfparaque: string;

  @Column('datetime', { name: 'CLFDATAINI' })
  clfdataini: Date;

  @Column('datetime', { name: 'CLFDATAFIM' })
  clfdatafim: Date;

  @Column('varchar', { name: 'CLFMOSTRAPRECO', nullable: true, length: 1 })
  clfmostrapreco: string | null;

  @Column('char', { name: 'CLFLEGADO', nullable: true, length: 1 })
  clflegado: string | null;

  @OneToMany(
    () => TimcfiEntity,
    (timcfiEntity) => timcfiEntity.cficlassificado2,
  )
  timcfis: TimcfiEntity[];

  @ManyToOne(() => TimvcoEntity, (timvcoEntity) => timvcoEntity.timclves)
  @JoinColumn([{ name: 'CLFVEICULO', referencedColumnName: 'vcocodigo' }])
  clfveiculo: TimvcoEntity;
}
