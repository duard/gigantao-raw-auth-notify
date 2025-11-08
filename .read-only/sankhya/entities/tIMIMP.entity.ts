import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimcblEntity } from './tIMCBL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimadmEntity } from './tIMADM.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimirbEntity } from './tIMIRB.entity';

@Index('PK_TIMIMP', ['impcontrato', 'impproprietario'], { unique: true })
@Index('TIMIMP_I01', ['impproprietario'], {})
@Index('TIMIMP_I02', ['impcontrato'], {})
@Entity('TIMIMP', { schema: 'SANKHYA' })
export class TimimpEntity {
  @Column('smallint', { primary: true, name: 'IMPCONTRATO' })
  impcontrato: number;

  @Column('int', { primary: true, name: 'IMPPROPRIETARIO' })
  impproprietario: number;

  @Column('float', { name: 'IMPPERCENTUAL', precision: 53 })
  imppercentual: number;

  @Column('smallint', { name: 'IMPFORMADEREPASSE', default: () => '(0)' })
  impformaderepasse: number;

  @Column('float', {
    name: 'IMPPERCENTUALRETIDO',
    nullable: true,
    precision: 53,
  })
  imppercentualretido: number | null;

  @Column('char', {
    name: 'IMPREPASSADEPOSITARIOS',
    length: 1,
    default: () => "'N'",
  })
  imprepassadepositarios: string;

  @Column('int', { name: 'IMPIDENTIFICADOR', nullable: true })
  impidentificador: number | null;

  @Column('char', { name: 'IMPLEGADO', nullable: true, length: 1 })
  implegado: string | null;

  @Column('datetime', { name: 'IMPDHALTER', nullable: true })
  impdhalter: Date | null;

  @Column('datetime', { name: 'IMPDHINC', nullable: true })
  impdhinc: Date | null;

  @ManyToOne(() => TimcblEntity, (timcblEntity) => timcblEntity.timimps)
  @JoinColumn([
    { name: 'IMPPROPRIETARIO', referencedColumnName: 'cbllocador' },
    { name: 'IMPCONTACORRENTE', referencedColumnName: 'cblcodigo' },
  ])
  timcbl: TimcblEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timimps)
  @JoinColumn([{ name: 'IMPUSUARIO', referencedColumnName: 'codusu' }])
  impusuario: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timimps2)
  @JoinColumn([{ name: 'IMPCODUSUINC', referencedColumnName: 'codusu' }])
  impcodusuinc: TsiusuEntity;

  @ManyToOne(() => TimadmEntity, (timadmEntity) => timadmEntity.timimps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IMPCONTRATO', referencedColumnName: 'admnucontrato' }])
  impcontrato2: TimadmEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timimps)
  @JoinColumn([{ name: 'IMPPROCURADOR', referencedColumnName: 'codparc' }])
  impprocurador: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timimps2)
  @JoinColumn([{ name: 'IMPPROPRIETARIO', referencedColumnName: 'codparc' }])
  impproprietario2: TgfparEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.timimps)
  @JoinColumn([{ name: 'IMPCODTIPTIT', referencedColumnName: 'codtiptit' }])
  impcodtiptit: TgftitEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timimps)
  @JoinColumn([{ name: 'IMPIMOVEL', referencedColumnName: 'imvcodigo' }])
  impimovel: TimimvEntity;

  @OneToMany(() => TimirbEntity, (timirbEntity) => timirbEntity.timimp)
  timirbs: TimirbEntity[];
}
