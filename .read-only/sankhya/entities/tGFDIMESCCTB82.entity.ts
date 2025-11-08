import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfdimesccfg82Entity } from './tGFDIMESCCFG82.entity';

@Index('PK_TGFDIMESCCTB82', ['codemp', 'dtref', 'codigo', 'codctactb'], {
  unique: true,
})
@Entity('TGFDIMESCCTB82', { schema: 'SANKHYA' })
export class Tgfdimescctb82Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @ManyToOne(
    () => Tgfdimesccfg82Entity,
    (tgfdimesccfg82Entity) => tgfdimesccfg82Entity.tgfdimescctbs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODIGO', referencedColumnName: 'codigo' },
  ])
  tgfdimesccfg: Tgfdimesccfg82Entity;
}
