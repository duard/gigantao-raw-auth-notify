import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { TcscxtEntity } from './tCSCXT.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSTPN', ['codtpn'], { unique: true })
@Entity('TCSTPN', { schema: 'SANKHYA' })
export class TcstpnEntity {
  @Column('smallint', { primary: true, name: 'CODTPN' })
  codtpn: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @OneToMany(() => TcscxtEntity, (tcscxtEntity) => tcscxtEntity.codtpn2)
  tcscxts: TcscxtEntity[];

  @ManyToMany(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcstpns)
  @JoinTable({
    name: 'TCSNXT',
    joinColumns: [{ name: 'CODTPN', referencedColumnName: 'codtpn' }],
    inverseJoinColumns: [{ name: 'CODNAT', referencedColumnName: 'codnat' }],
    schema: 'SANKHYA',
  })
  tgfnats: TgfnatEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codtpn)
  tcsoses: TcsoseEntity[];

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcstpns)
  tgfpros: TgfproEntity[];
}
