import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index('PK_TGFDIMESCR81', ['codemp', 'dtref', 'reg', 'tpitem'], {
  unique: true,
})
@Entity('TGFDIMESCR81', { schema: 'SANKHYA' })
export class Tgfdimescr81Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 2,
    default: () => "'81'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'TPITEM', length: 3 })
  tpitem: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', { name: 'VLRITEM', nullable: true, precision: 53 })
  vlritem: number | null;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimescr23,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
