import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimltvEntity } from './tIMLTV.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimreoEntity } from './tIMREO.entity';
import { TimrepEntity } from './tIMREP.entity';

@Index('PK_TIMREN', ['rencodigo'], { unique: true })
@Entity('TIMREN', { schema: 'SANKHYA' })
export class TimrenEntity {
  @Column('int', { primary: true, name: 'RENCODIGO' })
  rencodigo: number;

  @Column('char', { name: 'RENESTAGIO', length: 2 })
  renestagio: string;

  @Column('datetime', { name: 'RENDTBASE' })
  rendtbase: Date;

  @Column('float', { name: 'RENVLRJUROS', nullable: true, precision: 53 })
  renvlrjuros: number | null;

  @Column('float', { name: 'RENVLRMULTA', nullable: true, precision: 53 })
  renvlrmulta: number | null;

  @Column('float', { name: 'RENVLRCORR', nullable: true, precision: 53 })
  renvlrcorr: number | null;

  @Column('float', { name: 'RENVLRDESCAP', nullable: true, precision: 53 })
  renvlrdescap: number | null;

  @Column('float', { name: 'RENVLRDESC', nullable: true, precision: 53 })
  renvlrdesc: number | null;

  @Column('float', { name: 'RENVLRTOTAL', nullable: true, precision: 53 })
  renvlrtotal: number | null;

  @Column('datetime', { name: 'RENDHINCLUSAO', nullable: true })
  rendhinclusao: Date | null;

  @Column('datetime', { name: 'RENDHALTERACAO', nullable: true })
  rendhalteracao: Date | null;

  @Column('int', { name: 'RENNURENEG', nullable: true })
  rennureneg: number | null;

  @Column('datetime', { name: 'RENDTENTRADA', nullable: true })
  rendtentrada: Date | null;

  @Column('float', { name: 'RENVLRENTRADA', nullable: true, precision: 53 })
  renvlrentrada: number | null;

  @Column('int', { name: 'RENQTDENTRADA', nullable: true })
  renqtdentrada: number | null;

  @Column('datetime', { name: 'RENDTPARCELA', nullable: true })
  rendtparcela: Date | null;

  @Column('float', { name: 'RENVLRPARCELAR', nullable: true, precision: 53 })
  renvlrparcelar: number | null;

  @Column('int', { name: 'RENQTDPARCELA', nullable: true })
  renqtdparcela: number | null;

  @Column('float', { name: 'RENVLRBALAO', nullable: true, precision: 53 })
  renvlrbalao: number | null;

  @Column('int', { name: 'RENMESBALAO', nullable: true })
  renmesbalao: number | null;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timrens)
  @JoinColumn([{ name: 'RENCONTRATO', referencedColumnName: 'ltvcodigo' }])
  rencontrato: TimltvEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timrens)
  @JoinColumn([{ name: 'RENUSUINCLUSAO', referencedColumnName: 'codusu' }])
  renusuinclusao: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timrens2)
  @JoinColumn([{ name: 'RENUSUALTERACAO', referencedColumnName: 'codusu' }])
  renusualteracao: TsiusuEntity;

  @OneToMany(() => TimreoEntity, (timreoEntity) => timreoEntity.reoreneg2)
  timreos: TimreoEntity[];

  @OneToMany(() => TimrepEntity, (timrepEntity) => timrepEntity.repreneg2)
  timreps: TimrepEntity[];
}
