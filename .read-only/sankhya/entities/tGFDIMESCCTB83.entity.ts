import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfdimesccfg83Entity } from './tGFDIMESCCFG83.entity';

@Index('PK_TGFDIMESCCTB83', ['codemp', 'dtref', 'codigo', 'codctactb'], {
  unique: true,
})
@Entity('TGFDIMESCCTB83', { schema: 'SANKHYA' })
export class Tgfdimescctb83Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @ManyToOne(
    () => Tgfdimesccfg83Entity,
    (tgfdimesccfg83Entity) => tgfdimesccfg83Entity.tgfdimescctbs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODIGO', referencedColumnName: 'codigo' },
  ])
  tgfdimesccfg: Tgfdimesccfg83Entity;
}
