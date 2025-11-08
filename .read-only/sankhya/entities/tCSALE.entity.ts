import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfetEntity } from './tCSFET.entity';
import { TcstacEntity } from './tCSTAC.entity';

@Index('PK_TCSALE', ['nuale'], { unique: true })
@Entity('TCSALE', { schema: 'SANKHYA' })
export class TcsaleEntity {
  @Column('smallint', { primary: true, name: 'NUALE' })
  nuale: number;

  @Column('char', { name: 'DESCRALE', length: 40 })
  descrale: string;

  @Column('char', { name: 'TIPVALOR', length: 1, default: () => "'N'" })
  tipvalor: string;

  @Column('char', { name: 'OPERADOR', length: 10, default: () => "'N'" })
  operador: string;

  @Column('int', { name: 'VALOR', default: () => '(0)' })
  valor: number;

  @Column('char', { name: 'TIQUEM', length: 1 })
  tiquem: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'QUEM', length: 120 })
  quem: string;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcsales)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPA', referencedColumnName: 'numetapa' },
  ])
  tcsfet: TcsfetEntity;

  @ManyToOne(() => TcstacEntity, (tcstacEntity) => tcstacEntity.tcsales)
  @JoinColumn([{ name: 'CODTIPACAO', referencedColumnName: 'codtipacao' }])
  codtipacao: TcstacEntity;
}
