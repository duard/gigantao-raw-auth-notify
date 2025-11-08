import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfimcEntity } from './tGFIMC.entity';

@Index('PK_TGFIMF', ['nufin', 'codimp'], { unique: true })
@Index('TGFIMF_I01', ['nufin'], {})
@Index('TGFIMF_I02', ['codimp'], {})
@Entity('TGFIMF', { schema: 'SANKHYA' })
export class TgfimfEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('float', { name: 'BASE', nullable: true, precision: 53 })
  base: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('smallint', { name: 'TIPIMP', default: () => '(0)' })
  tipimp: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('char', { name: 'TIPOINSSESPECIAL', nullable: true, length: 1 })
  tipoinssespecial: string | null;

  @Column('float', { name: 'PERCINSSESPECIAL', nullable: true, precision: 53 })
  percinssespecial: number | null;

  @Column('float', { name: 'VLRINSSESPECIAL', nullable: true, precision: 53 })
  vlrinssespecial: number | null;

  @Column('varchar', { name: 'CODRECEITA', nullable: true, length: 10 })
  codreceita: string | null;

  @Column('int', { name: 'CODNATREND', nullable: true })
  codnatrend: number | null;

  @Column('smallint', { name: 'TPIRRFEXT', nullable: true })
  tpirrfext: number | null;

  @ManyToOne(() => TgfimcEntity, (tgfimcEntity) => tgfimcEntity.tgfimfs)
  @JoinColumn([{ name: 'CODIMP', referencedColumnName: 'codimp' }])
  codimp2: TgfimcEntity;
}
