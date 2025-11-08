import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index('PK_TGFDIMECFG30', ['codemp', 'dtref', 'tpitem', 'codigo'], {
  unique: true,
})
@Entity('TGFDIMESCCFG30', { schema: 'SANKHYA' })
export class Tgfdimesccfg30Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'TPITEM', length: 3 })
  tpitem: string;

  @Column('varchar', { primary: true, name: 'CODIGO', length: 8 })
  codigo: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', {
    name: 'TPAJUSTE',
    nullable: true,
    length: 1,
    default: () => 'NULL',
  })
  tpajuste: string | null;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimesccfgs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
