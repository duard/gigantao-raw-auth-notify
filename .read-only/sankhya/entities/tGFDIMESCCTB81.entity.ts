import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfdimesccfg81Entity } from './tGFDIMESCCFG81.entity';

@Index('PK_TGFDIMESCCTB81', ['codemp', 'dtref', 'codigo', 'codctactb'], {
  unique: true,
})
@Entity('TGFDIMESCCTB81', { schema: 'SANKHYA' })
export class Tgfdimescctb81Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @ManyToOne(
    () => Tgfdimesccfg81Entity,
    (tgfdimesccfg81Entity) => tgfdimesccfg81Entity.tgfdimescctbs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODIGO', referencedColumnName: 'codigo' },
  ])
  tgfdimesccfg: Tgfdimesccfg81Entity;
}
