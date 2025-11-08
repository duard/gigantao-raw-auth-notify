import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbsalImpEntity } from './tCBSAL_IMP.entity';

@Index('PK_TCBPLA_IMP', ['codemp', 'ctactb'], { unique: true })
@Entity('TCBPLA_IMP', { schema: 'SANKHYA' })
export class TcbplaImpEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CTACTB', length: 30 })
  ctactb: string;

  @Column('varchar', { name: 'CODCTACTBPAI', length: 30 })
  codctactbpai: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('varchar', { name: 'DESCRCTA', length: 40 })
  descrcta: string;

  @Column('varchar', { name: 'ANALITICA', length: 1, default: () => "'N'" })
  analitica: string;

  @Column('varchar', { name: 'CODGRUPOCTA', nullable: true, length: 2 })
  codgrupocta: string | null;

  @Column('datetime', { name: 'DTINCLUSAO', default: () => 'getdate()' })
  dtinclusao: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('datetime', { name: 'DTPRIMIMP', default: () => 'getdate()' })
  dtprimimp: Date;

  @Column('int', { name: 'CODCTACTB', nullable: true })
  codctactb: number | null;

  @Column('int', { name: 'CODCTACTBINTPAI', nullable: true })
  codctactbintpai: number | null;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbplaImps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @OneToMany(
    () => TcbsalImpEntity,
    (tcbsalImpEntity) => tcbsalImpEntity.tcbplaImp,
  )
  tcbsalImps: TcbsalImpEntity[];
}
