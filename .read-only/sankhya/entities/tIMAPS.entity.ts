import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimapoEntity } from './tIMAPO.entity';
import { TimaprEntity } from './tIMAPR.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMAPS', ['apscodigo'], { unique: true })
@Entity('TIMAPS', { schema: 'SANKHYA' })
export class TimapsEntity {
  @Column('smallint', { primary: true, name: 'APSCODIGO' })
  apscodigo: number;

  @Column('datetime', { name: 'APSDATA' })
  apsdata: Date;

  @Column('int', { name: 'APSNURENEG' })
  apsnureneg: number;

  @Column('float', {
    name: 'APSVLRTOTALCANCELADO',
    nullable: true,
    precision: 53,
  })
  apsvlrtotalcancelado: number | null;

  @Column('float', {
    name: 'APSVLRTOTALAPROVEITAR',
    nullable: true,
    precision: 53,
  })
  apsvlrtotalaproveitar: number | null;

  @Column('float', { name: 'APSVLRTOTALABERTO', nullable: true, precision: 53 })
  apsvlrtotalaberto: number | null;

  @Column('float', {
    name: 'APSVLRTOTALPENDENTE',
    nullable: true,
    precision: 53,
  })
  apsvlrtotalpendente: number | null;

  @Column('float', {
    name: 'APSVLRTOTALAPROVEITADO',
    nullable: true,
    precision: 53,
  })
  apsvlrtotalaproveitado: number | null;

  @Column('float', {
    name: 'APSVLRTOTALRESTANTE',
    nullable: true,
    precision: 53,
  })
  apsvlrtotalrestante: number | null;

  @Column('float', {
    name: 'APSVLRTOTALRESTITUIR',
    nullable: true,
    precision: 53,
  })
  apsvlrtotalrestituir: number | null;

  @Column('char', { name: 'APSLEGADO', nullable: true, length: 1 })
  apslegado: string | null;

  @OneToMany(() => TimapoEntity, (timapoEntity) => timapoEntity.apoaprovsaldo2)
  timapos: TimapoEntity[];

  @OneToMany(() => TimaprEntity, (timaprEntity) => timaprEntity.apraprovsaldo2)
  timaprs: TimaprEntity[];

  @ManyToOne(() => TimlotEntity, (timlotEntity) => timlotEntity.timaps)
  @JoinColumn([{ name: 'APSLOTEAMENTO', referencedColumnName: 'lotcodigo' }])
  apsloteamento: TimlotEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timaps)
  @JoinColumn([{ name: 'APSCOMPRADOR', referencedColumnName: 'codparc' }])
  apscomprador: TgfparEntity;
}
