import { Column, Entity, Index, ManyToMany, OneToMany } from 'typeorm';
import { TcfeventpneuEntity } from './tCFEVENTPNEU.entity';
import { TcfpnuhistEntity } from './tCFPNUHIST.entity';

@Index('PK_TCFMOTPNEU', ['codmot'], { unique: true })
@Entity('TCFMOTPNEU', { schema: 'SANKHYA' })
export class TcfmotpneuEntity {
  @Column('int', { primary: true, name: 'CODMOT' })
  codmot: number;

  @Column('varchar', { name: 'DESCRMOT', nullable: true, length: 100 })
  descrmot: string | null;

  @ManyToMany(
    () => TcfeventpneuEntity,
    (tcfeventpneuEntity) => tcfeventpneuEntity.tcfmotpneus,
  )
  tcfeventpneus: TcfeventpneuEntity[];

  @OneToMany(
    () => TcfpnuhistEntity,
    (tcfpnuhistEntity) => tcfpnuhistEntity.codmotivo,
  )
  tcfpnuhists: TcfpnuhistEntity[];
}
