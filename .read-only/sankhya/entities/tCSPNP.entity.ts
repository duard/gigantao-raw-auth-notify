import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsfipEntity } from './tCSFIP.entity';
import { TcsoseEntity } from './tCSOSE.entity';

@Index('PK_TCSPNP', ['numos', 'seqproposta'], { unique: true })
@Entity('TCSPNP', { schema: 'SANKHYA' })
export class TcspnpEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'SEQPROPOSTA' })
  seqproposta: number;

  @Column('varchar', { name: 'IDPROPOSTA', nullable: true, length: 20 })
  idproposta: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('char', { name: 'TEMFINANC', nullable: true, length: 1 })
  temfinanc: string | null;

  @Column('varchar', { name: 'DESCRPROPOSTA', nullable: true, length: 255 })
  descrproposta: string | null;

  @Column('char', { name: 'IMPRIMIU', length: 1, default: () => "'N'" })
  imprimiu: string;

  @OneToMany(() => TcsfipEntity, (tcsfipEntity) => tcsfipEntity.tcspnp)
  tcsfips: TcsfipEntity[];

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcspnps)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;
}
