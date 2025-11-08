import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfdimesccfg48Entity } from './tGFDIMESCCFG48.entity';

@Index('PK_TGFDIMESCTPO48', ['codemp', 'dtref', 'codigo', 'codtipoper'], {
  unique: true,
})
@Entity('TGFDIMESCTPO48', { schema: 'SANKHYA' })
export class Tgfdimesctpo48Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @ManyToOne(
    () => Tgfdimesccfg48Entity,
    (tgfdimesccfg48Entity) => tgfdimesccfg48Entity.tgfdimesctpos,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODIGO', referencedColumnName: 'codigo' },
  ])
  tgfdimesccfg: Tgfdimesccfg48Entity;
}
