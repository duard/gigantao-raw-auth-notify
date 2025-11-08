import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimctrEntity } from './tIMCTR.entity';
import { TimdtlEntity } from './tIMDTL.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMLCR', ['lcrcontrato', 'lcrcontador'], { unique: true })
@Entity('TIMLCR', { schema: 'SANKHYA' })
export class TimlcrEntity {
  @Column('int', { name: 'LCRCODIGO', nullable: true })
  lcrcodigo: number | null;

  @Column('int', { primary: true, name: 'LCRCONTRATO' })
  lcrcontrato: number;

  @Column('int', { primary: true, name: 'LCRCONTADOR' })
  lcrcontador: number;

  @Column('datetime', { name: 'LCRDATARENEGOCIACAO', nullable: true })
  lcrdatarenegociacao: Date | null;

  @Column('datetime', { name: 'LCRDATAINICIO' })
  lcrdatainicio: Date;

  @Column('smallint', { name: 'LCRPRAZOLOCACAO' })
  lcrprazolocacao: number;

  @Column('datetime', { name: 'LCRDATATERMINO', nullable: true })
  lcrdatatermino: Date | null;

  @Column('float', { name: 'LCRVALORALUGUEL', precision: 53 })
  lcrvaloraluguel: number;

  @Column('char', {
    name: 'LCRGEROUPARCELAS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  lcrgerouparcelas: string | null;

  @Column('float', { name: 'LCRVALORSEGURO', nullable: true, precision: 53 })
  lcrvalorseguro: number | null;

  @Column('datetime', { name: 'LCRINICIOSEGURO', nullable: true })
  lcrinicioseguro: Date | null;

  @Column('datetime', { name: 'LCRTERMINOSEGURO', nullable: true })
  lcrterminoseguro: Date | null;

  @Column('text', { name: 'LCROBSERVACAO', nullable: true })
  lcrobservacao: string | null;

  @Column('varchar', { name: 'LCRSEGURADORA', nullable: true, length: 120 })
  lcrseguradora: string | null;

  @Column('char', { name: 'LCRSEGADM', length: 1, default: () => "'N'" })
  lcrsegadm: string;

  @Column('datetime', { name: 'LCRDHALTER', default: () => 'getdate()' })
  lcrdhalter: Date;

  @Column('smallint', { name: 'LCRDIAVENC' })
  lcrdiavenc: number;

  @Column('varchar', { name: 'LCRESTAGIO', length: 2, default: () => "'NE'" })
  lcrestagio: string;

  @Column('char', {
    name: 'LCRISENTATARIFABOL',
    length: 1,
    default: () => "'N'",
  })
  lcrisentatarifabol: string;

  @Column('char', { name: 'LCRLEGADO', nullable: true, length: 1 })
  lcrlegado: string | null;

  @Column('datetime', { name: 'LCRDTPRIVENC', nullable: true })
  lcrdtprivenc: Date | null;

  @Column('varchar', { name: 'LCRAPOLICE', nullable: true, length: 50 })
  lcrapolice: string | null;

  @Column('int', { name: 'LCRQTDMPRO', nullable: true })
  lcrqtdmpro: number | null;

  @Column('float', {
    name: 'LCRVALORALUGUELATUAL',
    nullable: true,
    precision: 53,
  })
  lcrvaloraluguelatual: number | null;

  @OneToMany(() => TimctrEntity, (timctrEntity) => timctrEntity.timlcr)
  timctrs: TimctrEntity[];

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.timlcr)
  timdtls: TimdtlEntity[];

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timlcrs)
  @JoinColumn([{ name: 'LCRCONTRATO', referencedColumnName: 'loccodigo' }])
  lcrcontrato2: TimlocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timlcrs)
  @JoinColumn([{ name: 'LCRUSUARIO', referencedColumnName: 'codusu' }])
  lcrusuario: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timlcrs2)
  @JoinColumn([{ name: 'LCRCODUSUINC', referencedColumnName: 'codusu' }])
  lcrcodusuinc: TsiusuEntity;
}
