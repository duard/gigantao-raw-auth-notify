import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TimltvEntity } from './tIMLTV.entity';
import { TimacoEntity } from './tIMACO.entity';

@Index('PK_TIMACM', ['acmsequencia', 'acmcontrato'], { unique: true })
@Entity('TIMACM', { schema: 'SANKHYA' })
export class TimacmEntity {
  @Column('int', { primary: true, name: 'ACMSEQUENCIA' })
  acmsequencia: number;

  @Column('int', { primary: true, name: 'ACMCONTRATO' })
  acmcontrato: number;

  @Column('char', { name: 'ACMESTAGIO', length: 2, default: () => "'CA'" })
  acmestagio: string;

  @Column('datetime', { name: 'ACMDTACUMULO', nullable: true })
  acmdtacumulo: Date | null;

  @Column('float', { name: 'ACMVLRACUMULADO', nullable: true, precision: 53 })
  acmvlracumulado: number | null;

  @Column('float', { name: 'ACMVLRDESCONTO', nullable: true, precision: 53 })
  acmvlrdesconto: number | null;

  @Column('float', { name: 'ACMVLRTOTAL', nullable: true, precision: 53 })
  acmvlrtotal: number | null;

  @Column('int', { name: 'ACMNURENEG', nullable: true })
  acmnureneg: number | null;

  @Column('datetime', {
    name: 'ACMDHINCUSAO',
    nullable: true,
    default: () => 'getdate()',
  })
  acmdhincusao: Date | null;

  @Column('datetime', {
    name: 'ACMDHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  acmdhalter: Date | null;

  @Column('datetime', { name: 'ACMDTCANCELADO', nullable: true })
  acmdtcancelado: Date | null;

  @Column('char', { name: 'ACMLEGADO', nullable: true, length: 1 })
  acmlegado: string | null;

  @Column('datetime', { name: 'ACMDTVENC', nullable: true })
  acmdtvenc: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timacms)
  @JoinColumn([{ name: 'ACMUSUALTER', referencedColumnName: 'codusu' }])
  acmusualter: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timacms2)
  @JoinColumn([{ name: 'ACMUSUINCLUSAO', referencedColumnName: 'codusu' }])
  acmusuinclusao: TsiusuEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timacms)
  @JoinColumn([{ name: 'ACMNUFIN', referencedColumnName: 'nufin' }])
  acmnufin: TgffinEntity;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timacms)
  @JoinColumn([{ name: 'ACMCONTRATO', referencedColumnName: 'ltvcodigo' }])
  acmcontrato2: TimltvEntity;

  @OneToMany(() => TimacoEntity, (timacoEntity) => timacoEntity.timacm)
  timacos: TimacoEntity[];
}
