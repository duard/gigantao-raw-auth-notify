import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimedgEntity } from './tIMEDG.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimiviEntity } from './tIMIVI.entity';
import { TimpipEntity } from './tIMPIP.entity';

@Index('PK_TIMIPT', ['iptcodigo'], { unique: true })
@Entity('TIMIPT', { schema: 'SANKHYA' })
export class TimiptEntity {
  @Column('int', { primary: true, name: 'IPTCODIGO' })
  iptcodigo: number;

  @Column('varchar', { name: 'IPTINSCRICAO', length: 40 })
  iptinscricao: string;

  @Column('datetime', { name: 'IPTREFERENCIA' })
  iptreferencia: Date;

  @Column('datetime', { name: 'IPTREFINICOBRANCA' })
  iptrefinicobranca: Date;

  @Column('varchar', { name: 'IPTTIPO', length: 2 })
  ipttipo: string;

  @Column('float', { name: 'IPTVLRTOT', precision: 53 })
  iptvlrtot: number;

  @Column('int', { name: 'IPTQTDPARC' })
  iptqtdparc: number;

  @Column('float', { name: 'IPTTXEXPEDIENTE', precision: 53 })
  ipttxexpediente: number;

  @Column('float', { name: 'IPTPERCDESC', nullable: true, precision: 53 })
  iptpercdesc: number | null;

  @Column('char', { name: 'IPTCARNENAIMOB', nullable: true, length: 1 })
  iptcarnenaimob: string | null;

  @Column('nvarchar', { name: 'IPTOBSERVACAO', nullable: true })
  iptobservacao: string | null;

  @Column('char', { name: 'IPTREPASSAPARA', length: 1 })
  iptrepassapara: string;

  @Column('varchar', { name: 'IPTRECEBEDE', length: 1, default: () => "'I'" })
  iptrecebede: string;

  @Column('datetime', { name: 'IPTREFINIPAGTO', nullable: true })
  iptrefinipagto: Date | null;

  @Column('char', { name: 'IPTGERAAVULSO', nullable: true, length: 1 })
  iptgeraavulso: string | null;

  @ManyToOne(() => TimedgEntity, (timedgEntity) => timedgEntity.timipts)
  @JoinColumn([{ name: 'IPTEDIFICIO', referencedColumnName: 'edgcodigo' }])
  iptedificio: TimedgEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timipts)
  @JoinColumn([{ name: 'IPTIMOVEL', referencedColumnName: 'imvcodigo' }])
  iptimovel: TimimvEntity;

  @OneToMany(() => TimiviEntity, (timiviEntity) => timiviEntity.iviiptu2)
  timivis: TimiviEntity[];

  @OneToMany(() => TimpipEntity, (timpipEntity) => timpipEntity.pipiptu2)
  timpips: TimpipEntity[];
}
