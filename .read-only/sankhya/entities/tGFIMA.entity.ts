import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfimcEntity } from './tGFIMC.entity';

@Index('PK_TGFIMA', ['codimp', 'tipo', 'codigo'], { unique: true })
@Index('TGFIMA_I01', ['tipo', 'codigo'], {})
@Entity('TGFIMA', { schema: 'SANKHYA' })
export class TgfimaEntity {
  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'T'",
  })
  tipo: string;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('char', { name: 'CALCULAR', length: 1, default: () => "'S'" })
  calcular: string;

  @Column('smallint', { name: 'TIPIMP', default: () => '(0)' })
  tipimp: number;

  @Column('float', { name: 'REDBASE', nullable: true, precision: 53 })
  redbase: number | null;

  @Column('smallint', { name: 'IMPNOTA', default: () => '(2)' })
  impnota: number;

  @Column('smallint', { name: 'IMPFINORIGEST', default: () => '(2)' })
  impfinorigest: number;

  @Column('smallint', { name: 'IMPFINORIGFIN', default: () => '(2)' })
  impfinorigfin: number;

  @Column('varchar', { name: 'CODRECEITA', nullable: true, length: 10 })
  codreceita: string | null;

  @Column('smallint', { name: 'TPIRRFEXT', nullable: true })
  tpirrfext: number | null;

  @ManyToOne(() => TgfimcEntity, (tgfimcEntity) => tgfimcEntity.tgfimas)
  @JoinColumn([{ name: 'CODIMP', referencedColumnName: 'codimp' }])
  codimp2: TgfimcEntity;
}
