import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbarpEntity } from './tCBARP.entity';
import { TcbpctEntity } from './tCBPCT.entity';

@Index('PK_TCBCRP', ['nuperiodoctb', 'tabela'], { unique: true })
@Entity('TCBCRP', { schema: 'SANKHYA' })
export class TcbcrpEntity {
  @Column('int', { primary: true, name: 'NUPERIODOCTB' })
  nuperiodoctb: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { primary: true, name: 'TABELA' })
  tabela: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @OneToMany(() => TcbarpEntity, (tcbarpEntity) => tcbarpEntity.tcbcrp)
  tcbarps: TcbarpEntity[];

  @ManyToOne(() => TcbpctEntity, (tcbpctEntity) => tcbpctEntity.tcbcrps)
  @JoinColumn([{ name: 'NUPERIODOCTB', referencedColumnName: 'nuperiodoctb' }])
  nuperiodoctb2: TcbpctEntity;
}
