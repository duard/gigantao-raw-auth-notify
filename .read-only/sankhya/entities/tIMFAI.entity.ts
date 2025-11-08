import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimlocEntity } from './tIMLOC.entity';
import { TimfeaEntity } from './tIMFEA.entity';
import { TimfpcEntity } from './tIMFPC.entity';

@Index('PK_TIMFAI', ['faifechamento', 'faicontratoloc'], { unique: true })
@Entity('TIMFAI', { schema: 'SANKHYA' })
export class TimfaiEntity {
  @Column('int', { primary: true, name: 'FAIFECHAMENTO' })
  faifechamento: number;

  @Column('int', { primary: true, name: 'FAICONTRATOLOC' })
  faicontratoloc: number;

  @Column('float', { name: 'FAITOTVENDA', precision: 53 })
  faitotvenda: number;

  @Column('char', { name: 'FAILEGADO', nullable: true, length: 1 })
  failegado: string | null;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timfais)
  @JoinColumn([{ name: 'FAICONTRATOLOC', referencedColumnName: 'loccodigo' }])
  faicontratoloc2: TimlocEntity;

  @ManyToOne(() => TimfeaEntity, (timfeaEntity) => timfeaEntity.timfais)
  @JoinColumn([{ name: 'FAIFECHAMENTO', referencedColumnName: 'feacodigo' }])
  faifechamento2: TimfeaEntity;

  @ManyToOne(() => TimfpcEntity, (timfpcEntity) => timfpcEntity.timfais)
  @JoinColumn([
    { name: 'FAICONTRATOLOC', referencedColumnName: 'fpccontratoloc' },
    { name: 'FAIREFFORMAPGTO', referencedColumnName: 'fpcreferencia' },
  ])
  timfpc: TimfpcEntity;
}
