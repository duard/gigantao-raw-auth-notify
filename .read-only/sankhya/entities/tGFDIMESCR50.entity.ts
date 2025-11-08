import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index('PK_TGFDIMESCR50', ['codemp', 'dtref', 'reg', 'uf'], { unique: true })
@Entity('TGFDIMESCR50', { schema: 'SANKHYA' })
export class Tgfdimescr50Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 2,
    default: () => "'50'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'UF', length: 2 })
  uf: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', { name: 'VLRCTBNAOCONTRIB', nullable: true, precision: 53 })
  vlrctbnaocontrib: number | null;

  @Column('float', { name: 'VLRCTBCONTRIB', nullable: true, precision: 53 })
  vlrctbcontrib: number | null;

  @Column('float', {
    name: 'BASECALCNAOCONTRIB',
    nullable: true,
    precision: 53,
  })
  basecalcnaocontrib: number | null;

  @Column('float', { name: 'BASECALCCONTRIB', nullable: true, precision: 53 })
  basecalccontrib: number | null;

  @Column('float', { name: 'OUTRAS', nullable: true, precision: 53 })
  outras: number | null;

  @Column('float', { name: 'ICMSSUBSTIT', nullable: true, precision: 53 })
  icmssubstit: number | null;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimescr20,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
