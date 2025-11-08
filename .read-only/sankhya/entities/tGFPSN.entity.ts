import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempsnEntity } from './tGFEMPSN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPSN', ['nupartilha'], { unique: true })
@Index('TGFPSN_I01', ['tiposn'], {})
@Entity('TGFPSN', { schema: 'SANKHYA' })
export class TgfpsnEntity {
  @Column('int', { primary: true, name: 'NUPARTILHA' })
  nupartilha: number;

  @Column('smallint', { name: 'TIPOSN', default: () => '(0)' })
  tiposn: number;

  @Column('float', { name: 'VLRRECBRUTA', precision: 53, default: () => '(0)' })
  vlrrecbruta: number;

  @Column('float', { name: 'ALIQUOTA', precision: 53, default: () => '(0)' })
  aliquota: number;

  @Column('float', { name: 'ALIQIRPJ', precision: 53, default: () => '(0)' })
  aliqirpj: number;

  @Column('float', { name: 'ALIQCSLL', precision: 53, default: () => '(0)' })
  aliqcsll: number;

  @Column('float', { name: 'ALIQCOFINS', precision: 53, default: () => '(0)' })
  aliqcofins: number;

  @Column('float', {
    name: 'ALIQPISPASEP',
    precision: 53,
    default: () => '(0)',
  })
  aliqpispasep: number;

  @Column('float', { name: 'ALIQCPP', precision: 53, default: () => '(0)' })
  aliqcpp: number;

  @Column('float', { name: 'ALIQICMS', precision: 53, default: () => '(0)' })
  aliqicms: number;

  @Column('float', { name: 'ALIQIPI', precision: 53, default: () => '(0)' })
  aliqipi: number;

  @Column('float', { name: 'ALIQISS', precision: 53, default: () => '(0)' })
  aliqiss: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'TIPOMERCADO', nullable: true, length: 1 })
  tipomercado: string | null;

  @Column('int', { name: 'NUFAIXA', nullable: true })
  nufaixa: number | null;

  @Column('float', {
    name: 'ALIQCOFINSALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  aliqcofinsaliefe: number;

  @Column('smallint', { name: 'TIPOSNALIEFE', default: () => '(0)' })
  tiposnaliefe: number;

  @Column('float', {
    name: 'ALIQUOTAALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  aliquotaaliefe: number;

  @Column('float', {
    name: 'ALIQPISPASEPALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  aliqpispasepaliefe: number;

  @Column('float', {
    name: 'ALIQCPPALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  aliqcppaliefe: number;

  @Column('char', { name: 'TIPOMERCADOALIEFE', nullable: true, length: 1 })
  tipomercadoaliefe: string | null;

  @Column('float', {
    name: 'ALIQIRPJALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  aliqirpjaliefe: number;

  @Column('float', {
    name: 'ALIQIPIALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  aliqipialiefe: number;

  @Column('float', {
    name: 'VLRRECBRUTAALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  vlrrecbrutaaliefe: number;

  @Column('int', { name: 'NUFAIXAALIEFE', nullable: true })
  nufaixaaliefe: number | null;

  @Column('float', {
    name: 'ALIQICMSALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  aliqicmsaliefe: number;

  @Column('float', {
    name: 'ALIQISSALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  aliqissaliefe: number;

  @Column('float', {
    name: 'ALIQCSLLALIEFE',
    precision: 53,
    default: () => '(0)',
  })
  aliqcsllaliefe: number;

  @Column('int', { name: 'NUAPURACAO', nullable: true })
  nuapuracao: number | null;

  @OneToMany(
    () => TgfempsnEntity,
    (tgfempsnEntity) => tgfempsnEntity.nupartilha2,
  )
  tgfempsns: TgfempsnEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpsns)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
