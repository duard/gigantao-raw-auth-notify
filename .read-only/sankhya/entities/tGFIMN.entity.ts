import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfimcEntity } from './tGFIMC.entity';

@Index('PK_TGFIMN', ['nunota', 'sequencia', 'codimp'], { unique: true })
@Index('TGFIMN_I01', ['codimp'], {})
@Index('TGFIMN_IPER', ['nunota'], {})
@Entity('TGFIMN', { schema: 'SANKHYA' })
export class TgfimnEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('int', { name: 'CODCID', nullable: true })
  codcid: number | null;

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

  @Column('smallint', { name: 'TIPOIMPOSTO', default: () => '(0)' })
  tipoimposto: number;

  @Column('char', { name: 'TIPOINSSESPECIAL', nullable: true, length: 1 })
  tipoinssespecial: string | null;

  @Column('float', { name: 'PERCINSSESPECIAL', nullable: true, precision: 53 })
  percinssespecial: number | null;

  @Column('float', { name: 'VLRINSSESPECIAL', nullable: true, precision: 53 })
  vlrinssespecial: number | null;

  @Column('varchar', { name: 'CODRECEITA', nullable: true, length: 10 })
  codreceita: string | null;

  @Column('smallint', { name: 'TPIRRFEXT', nullable: true })
  tpirrfext: number | null;

  @Column('int', { name: 'CODNATREND', nullable: true })
  codnatrend: number | null;

  @ManyToOne(() => TgfimcEntity, (tgfimcEntity) => tgfimcEntity.tgfimns)
  @JoinColumn([{ name: 'CODIMP', referencedColumnName: 'codimp' }])
  codimp2: TgfimcEntity;
}
