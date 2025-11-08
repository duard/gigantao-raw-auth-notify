import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index('PK_TGFDIMESCR49', ['codemp', 'dtref', 'reg', 'uf'], { unique: true })
@Entity('TGFDIMESCR49', { schema: 'SANKHYA' })
export class Tgfdimescr49Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 2,
    default: () => "'49'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'UF', length: 2 })
  uf: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', { name: 'VLRCTB', nullable: true, precision: 53 })
  vlrctb: number | null;

  @Column('float', { name: 'BASECALC', nullable: true, precision: 53 })
  basecalc: number | null;

  @Column('float', { name: 'OUTRAS', nullable: true, precision: 53 })
  outras: number | null;

  @Column('float', { name: 'VLRPETRENERG', nullable: true, precision: 53 })
  vlrpetrenerg: number | null;

  @Column('float', { name: 'OUTROSPROD', nullable: true, precision: 53 })
  outrosprod: number | null;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimescr19,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
