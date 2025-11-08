import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIEJO', ['id'], { unique: true })
@Entity('TSIEJO', { schema: 'SANKHYA' })
export class TsiejoEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 255 })
  id: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 255 })
  descricao: string | null;

  @Column('datetime', { name: 'DHEXEC', nullable: true })
  dhexec: Date | null;

  @Column('datetime', { name: 'DHPROXEXEC', nullable: true })
  dhproxexec: Date | null;

  @Column('int', { name: 'QTDEXECS', nullable: true, default: () => '(0)' })
  qtdexecs: number | null;

  @Column('int', { name: 'TEMPOMAXEXEC', nullable: true, default: () => '(0)' })
  tempomaxexec: number | null;

  @Column('int', { name: 'TEMPOMINEXEC', nullable: true, default: () => '(0)' })
  tempominexec: number | null;

  @Column('int', { name: 'TEMPOEXEC', nullable: true, default: () => '(0)' })
  tempoexec: number | null;

  @Column('float', {
    name: 'MEDIAEXEC',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  mediaexec: number | null;

  @Column('int', {
    name: 'TEMPOULIMAEXEC',
    nullable: true,
    default: () => '(0)',
  })
  tempoulimaexec: number | null;

  @Column('varchar', {
    name: 'STATUSEXEC',
    nullable: true,
    length: 1,
    default: () => "'W'",
  })
  statusexec: string | null;

  @Column('varchar', { name: 'MSGERRO', nullable: true, length: 3103 })
  msgerro: string | null;

  @Column('text', { name: 'ERROTRACE', nullable: true })
  errotrace: string | null;

  @Column('int', { name: 'QTDFALHAS', nullable: true, default: () => '(0)' })
  qtdfalhas: number | null;

  @Column('varchar', {
    name: 'TIPJOB',
    nullable: true,
    length: 1,
    default: () => "'I'",
  })
  tipjob: string | null;

  @Column('varchar', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;
}
