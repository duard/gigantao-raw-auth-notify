import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { TcfmotpneuEntity } from './tCFMOTPNEU.entity';
import { TcfpnuhistEntity } from './tCFPNUHIST.entity';

@Index('PK_TCFEVENTPNEU', ['codevento'], { unique: true })
@Entity('TCFEVENTPNEU', { schema: 'SANKHYA' })
export class TcfeventpneuEntity {
  @Column('int', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('varchar', { name: 'DESCREVENTO', nullable: true, length: 100 })
  descrevento: string | null;

  @ManyToMany(
    () => TcfmotpneuEntity,
    (tcfmotpneuEntity) => tcfmotpneuEntity.tcfeventpneus,
  )
  @JoinTable({
    name: 'TCFEVENTPNEUMOT',
    joinColumns: [{ name: 'CODEVENTO', referencedColumnName: 'codevento' }],
    inverseJoinColumns: [{ name: 'CODMOT', referencedColumnName: 'codmot' }],
    schema: 'SANKHYA',
  })
  tcfmotpneus: TcfmotpneuEntity[];

  @OneToMany(
    () => TcfpnuhistEntity,
    (tcfpnuhistEntity) => tcfpnuhistEntity.codevento,
  )
  tcfpnuhists: TcfpnuhistEntity[];
}
