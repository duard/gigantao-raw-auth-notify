import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgadijEntity } from './tGADIJ.entity';

@Index('PK_TGACUJ', ['codprod', 'codcultura'], { unique: true })
@Entity('TGACUJ', { schema: 'SANKHYA' })
export class TgacujEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODCULTURA' })
  codcultura: number;

  @Column('varchar', { name: 'NOMECULTURA', length: 50 })
  nomecultura: string;

  @Column('varchar', { name: 'NOMECIENTIFICO', length: 50 })
  nomecientifico: string;

  @Column('float', { name: 'DOSAGEMIND', nullable: true, precision: 53 })
  dosagemind: number | null;

  @Column('varchar', { name: 'UNIDDOSAGEM', nullable: true, length: 10 })
  uniddosagem: string | null;

  @Column('smallint', { name: 'QTDHECTARE', nullable: true })
  qtdhectare: number | null;

  @Column('smallint', { name: 'DOSAGEMPLA', nullable: true })
  dosagempla: number | null;

  @Column('varchar', { name: 'UNIDPLA', nullable: true, length: 10 })
  unidpla: string | null;

  @Column('smallint', { name: 'APLICACOES', nullable: true })
  aplicacoes: number | null;

  @Column('smallint', { name: 'INTERVALO', nullable: true })
  intervalo: number | null;

  @Column('smallint', { name: 'CARENCIA', nullable: true })
  carencia: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgacujs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @OneToMany(() => TgadijEntity, (tgadijEntity) => tgadijEntity.tgacuj)
  tgadijs: TgadijEntity[];
}
