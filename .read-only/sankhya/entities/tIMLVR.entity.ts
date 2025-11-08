import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimbarEntity } from './tIMBAR.entity';
import { TiminrEntity } from './tIMINR.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TimltvEntity } from './tIMLTV.entity';

@Index('PK_TIMLVR', ['lvrcodigo', 'lvrcontrato'], { unique: true })
@Entity('TIMLVR', { schema: 'SANKHYA' })
export class TimlvrEntity {
  @Column('int', { primary: true, name: 'LVRCODIGO' })
  lvrcodigo: number;

  @Column('int', { primary: true, name: 'LVRCONTRATO' })
  lvrcontrato: number;

  @Column('varchar', { name: 'LVRRENEGOCIACAO', nullable: true, length: 50 })
  lvrrenegociacao: string | null;

  @Column('char', { name: 'LVRALTERATABELA', nullable: true, length: 1 })
  lvralteratabela: string | null;

  @Column('datetime', { name: 'LVRDATA' })
  lvrdata: Date;

  @Column('float', { name: 'LVRSMJURMUL', nullable: true, precision: 53 })
  lvrsmjurmul: number | null;

  @Column('float', { name: 'LVRMAXDESC', nullable: true, precision: 53 })
  lvrmaxdesc: number | null;

  @Column('float', { name: 'LVRVALORPAGO', nullable: true, precision: 53 })
  lvrvalorpago: number | null;

  @Column('float', { name: 'LVRVALOREMABERTO', nullable: true, precision: 53 })
  lvrvaloremaberto: number | null;

  @Column('smallint', { name: 'LVRQTDPARPAGAS', nullable: true })
  lvrqtdparpagas: number | null;

  @Column('float', { name: 'LVRVALOREMATRASO', nullable: true, precision: 53 })
  lvrvalorematraso: number | null;

  @Column('smallint', { name: 'LVRPARCELASEMATRASO', nullable: true })
  lvrparcelasematraso: number | null;

  @Column('float', { name: 'LVRJUROS', nullable: true, precision: 53 })
  lvrjuros: number | null;

  @Column('float', { name: 'LVRTXRENEG', nullable: true, precision: 53 })
  lvrtxreneg: number | null;

  @Column('float', { name: 'LVRDESCONTO', nullable: true, precision: 53 })
  lvrdesconto: number | null;

  @Column('varchar', { name: 'LVRPQDESCONTO', nullable: true, length: 200 })
  lvrpqdesconto: string | null;

  @Column('float', { name: 'LVRVLPAGORENEGOC', nullable: true, precision: 53 })
  lvrvlpagorenegoc: number | null;

  @Column('char', { name: 'LVRAPROVEITASALDO', nullable: true, length: 1 })
  lvraproveitasaldo: string | null;

  @Column('float', { name: 'LVRVLAPARCELAR', nullable: true, precision: 53 })
  lvrvlaparcelar: number | null;

  @Column('smallint', { name: 'LVRQTDPARCELAS', nullable: true })
  lvrqtdparcelas: number | null;

  @Column('float', { name: 'LVRVALORPARCELA', nullable: true, precision: 53 })
  lvrvalorparcela: number | null;

  @Column('smallint', { name: 'LVRQTDPARCABERTO', nullable: true })
  lvrqtdparcaberto: number | null;

  @Column('datetime', { name: 'LVRDTPRIPARCELA' })
  lvrdtpriparcela: Date;

  @Column('smallint', { name: 'LVRPRIPARCELA', nullable: true })
  lvrpriparcela: number | null;

  @Column('char', {
    name: 'LVRESTAGIO',
    nullable: true,
    length: 2,
    default: () => "'AB'",
  })
  lvrestagio: string | null;

  @Column('int', { name: 'LVRNUACERTO', nullable: true })
  lvrnuacerto: number | null;

  @Column('char', { name: 'LVRLEGADO', nullable: true, length: 1 })
  lvrlegado: string | null;

  @Column('float', { name: 'LVRDESCAP', nullable: true, precision: 53 })
  lvrdescap: number | null;

  @Column('float', { name: 'LVRCORRECAO', nullable: true, precision: 53 })
  lvrcorrecao: number | null;

  @Column('datetime', { name: 'LVROLDPROXREAJUSTE', nullable: true })
  lvroldproxreajuste: Date | null;

  @Column('int', { name: 'LVRNURENEG', nullable: true })
  lvrnureneg: number | null;

  @Column('char', { name: 'LVRFECHAMENTOBANCO', nullable: true, length: 1 })
  lvrfechamentobanco: string | null;

  @Column('float', { name: 'LVRVLRBANCOATUAL', nullable: true, precision: 53 })
  lvrvlrbancoatual: number | null;

  @Column('float', {
    name: 'LVRVLRBANCOFECHADO',
    nullable: true,
    precision: 53,
  })
  lvrvlrbancofechado: number | null;

  @Column('float', { name: 'LVRVLRBANCODIFER', nullable: true, precision: 53 })
  lvrvlrbancodifer: number | null;

  @Column('float', {
    name: 'LVRFINBANCODEVOLVER',
    nullable: true,
    precision: 53,
  })
  lvrfinbancodevolver: number | null;

  @Column('datetime', { name: 'LVRDTAMORTSALDO', nullable: true })
  lvrdtamortsaldo: Date | null;

  @Column('float', {
    name: 'LVRVLRTOTALINTERMED',
    nullable: true,
    precision: 53,
  })
  lvrvlrtotalintermed: number | null;

  @Column('float', { name: 'LVRVLRTOTALBALAO', nullable: true, precision: 53 })
  lvrvlrtotalbalao: number | null;

  @Column('float', {
    name: 'LVRVLRBANCODEVOLVER',
    nullable: true,
    precision: 53,
  })
  lvrvlrbancodevolver: number | null;

  @Column('float', { name: 'LVROLDJUROS', precision: 53 })
  lvroldjuros: number;

  @Column('float', { name: 'LVRMAISJUROS', precision: 53 })
  lvrmaisjuros: number;

  @OneToMany(() => TimbarEntity, (timbarEntity) => timbarEntity.timlvr)
  timbars: TimbarEntity[];

  @OneToMany(() => TiminrEntity, (timinrEntity) => timinrEntity.timlvr)
  timinrs: TiminrEntity[];

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timlvrs)
  @JoinColumn([{ name: 'LVRFINCOMPENSAMORT', referencedColumnName: 'nufin' }])
  lvrfincompensamort: TgffinEntity;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timlvrs)
  @JoinColumn([{ name: 'LVRCONTRATO', referencedColumnName: 'ltvcodigo' }])
  lvrcontrato2: TimltvEntity;
}
