import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TcscpaEntity } from './tCSCPA.entity';
import { TcscprEntity } from './tCSCPR.entity';

@Index('PK_TCSCGR', ['numcontrato', 'grupo'], { unique: true })
@Entity('TCSCGR', { schema: 'SANKHYA' })
export class TcscgrEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'GRUPO' })
  grupo: number;

  @Column('smallint', { name: 'QTDPARC' })
  qtdparc: number;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcscgrs)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @OneToMany(() => TcscpaEntity, (tcscpaEntity) => tcscpaEntity.tcscgr)
  tcscpas: TcscpaEntity[];

  @OneToMany(() => TcscprEntity, (tcscprEntity) => tcscprEntity.tcscgr)
  tcscprs: TcscprEntity[];
}
