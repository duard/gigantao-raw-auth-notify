import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfcprbEntity } from './tGFCPRB.entity';
import { TgfdacprbEntity } from './tGFDACPRB.entity';

@Index('PK_TGFACPRB', ['codemp', 'dtref', 'codcprb', 'codobra'], {
  unique: true,
})
@Entity('TGFACPRB', { schema: 'SANKHYA' })
export class TgfacprbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'CODCPRB', length: 8 })
  codcprb: string;

  @Column('varchar', { primary: true, name: 'CODOBRA', length: 15 })
  codobra: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfacprbs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfcprbEntity, (tgfcprbEntity) => tgfcprbEntity.tgfacprbs)
  @JoinColumn([{ name: 'CODCPRB', referencedColumnName: 'codcprb' }])
  codcprb2: TgfcprbEntity;

  @OneToMany(
    () => TgfdacprbEntity,
    (tgfdacprbEntity) => tgfdacprbEntity.tgfacprb,
  )
  tgfdacprbs: TgfdacprbEntity[];
}
