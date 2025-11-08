import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfdimesccfg84Entity } from './tGFDIMESCCFG84.entity';

@Index('PK_TGFDIMESCCTB84', ['codemp', 'dtref', 'codigo', 'codctactb'], {
  unique: true,
})
@Entity('TGFDIMESCCTB84', { schema: 'SANKHYA' })
export class Tgfdimescctb84Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @ManyToOne(
    () => Tgfdimesccfg84Entity,
    (tgfdimesccfg84Entity) => tgfdimesccfg84Entity.tgfdimescctbs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODIGO', referencedColumnName: 'codigo' },
  ])
  tgfdimesccfg: Tgfdimesccfg84Entity;
}
