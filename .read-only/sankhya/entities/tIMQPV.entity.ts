import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsimoeEntity } from './tSIMOE.entity';
import { TimclaEntity } from './tIMCLA.entity';

@Index('PK_TIMQPV', ['qpvcontrato', 'qpvidentificador'], { unique: true })
@Entity('TIMQPV', { schema: 'SANKHYA' })
export class TimqpvEntity {
  @Column('int', { primary: true, name: 'QPVCONTRATO' })
  qpvcontrato: number;

  @Column('int', { primary: true, name: 'QPVIDENTIFICADOR' })
  qpvidentificador: number;

  @Column('varchar', { name: 'QPVTIPO', length: 2 })
  qpvtipo: string;

  @Column('varchar', { name: 'QPVTIPOPARCELA', length: 2 })
  qpvtipoparcela: string;

  @Column('datetime', { name: 'QPVDATAPRIMEIRA' })
  qpvdataprimeira: Date;

  @Column('smallint', { name: 'QPVQUANTIDADE' })
  qpvquantidade: number;

  @Column('float', { name: 'QPVVALORPARCELA', precision: 53 })
  qpvvalorparcela: number;

  @Column('float', { name: 'QPVVALORPARCELADO', precision: 53 })
  qpvvalorparcelado: number;

  @Column('varchar', { name: 'QPVFORMAPAGAMENTO', nullable: true, length: 250 })
  qpvformapagamento: string | null;

  @Column('int', { name: 'QPVPLANO', nullable: true })
  qpvplano: number | null;

  @Column('char', { name: 'QPVLEGADO', nullable: true, length: 1 })
  qpvlegado: string | null;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timqpvs)
  @JoinColumn([{ name: 'QPVINDICEAPCHV', referencedColumnName: 'codmoeda' }])
  qpvindiceapchv: TsimoeEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timqpvs2)
  @JoinColumn([{ name: 'QPVINDICE', referencedColumnName: 'codmoeda' }])
  qpvindice: TsimoeEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timqpvs)
  @JoinColumn([{ name: 'QPVCONTRATO', referencedColumnName: 'clacodigo' }])
  qpvcontrato2: TimclaEntity;
}
