import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index('PK_TGFDIMESCR46', ['codemp', 'dtref', 'reg', 'sequencia'], {
  unique: true,
})
@Entity('TGFDIMESCR46', { schema: 'SANKHYA' })
export class Tgfdimescr46Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 2,
    default: () => "'46'",
  })
  reg: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('varchar', { name: 'IDENTIFICACAO', nullable: true, length: 15 })
  identificacao: string | null;

  @Column('float', { name: 'VLRCREDUTILAPUR', nullable: true, precision: 53 })
  vlrcredutilapur: number | null;

  @Column('smallint', { name: 'ORIGEM', nullable: true })
  origem: number | null;

  @Column('varchar', { name: 'TIPCRED', nullable: true, length: 1 })
  tipcred: string | null;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimescr16,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
