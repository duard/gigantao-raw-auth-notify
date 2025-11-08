import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbitelpEntity } from './tCBITELP.entity';
import { TcbcfgaplpnatEntity } from './tCBCFGAPLPNAT.entity';

@Index('PK_TCBCFGAPLP', ['codemp', 'codnatlp'], { unique: true })
@Entity('TCBCFGAPLP', { schema: 'SANKHYA' })
export class TcbcfgaplpEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODNATLP' })
  codnatlp: number;

  @Column('char', { name: 'TIPDATANOTAS', nullable: true, length: 1 })
  tipdatanotas: string | null;

  @Column('char', { name: 'TIPDATAFIN', nullable: true, length: 1 })
  tipdatafin: string | null;

  @Column('char', { name: 'DEDIPIBC', nullable: true, length: 1 })
  dedipibc: string | null;

  @Column('char', { name: 'DEDICMSSTBC', nullable: true, length: 1 })
  dedicmsstbc: string | null;

  @Column('char', { name: 'DEDDESCINCBC', nullable: true, length: 1 })
  deddescincbc: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @ManyToOne(
    () => TcbitelpEntity,
    (tcbitelpEntity) => tcbitelpEntity.tcbcfgaplps,
  )
  @JoinColumn([{ name: 'CODNATLP', referencedColumnName: 'codnatlp' }])
  codnatlp2: TcbitelpEntity;

  @OneToMany(
    () => TcbcfgaplpnatEntity,
    (tcbcfgaplpnatEntity) => tcbcfgaplpnatEntity.tcbcfgaplp,
  )
  tcbcfgaplpnats: TcbcfgaplpnatEntity[];
}
