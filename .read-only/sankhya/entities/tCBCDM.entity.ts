import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbdmtEntity } from './tCBDMT.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcbempEntity } from './tCBEMP.entity';

@Index('PK_TCBCDM', ['codemp', 'codtdm', 'coddmt', 'codctactb'], {
  unique: true,
})
@Entity('TCBCDM', { schema: 'SANKHYA' })
export class TcbcdmEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODTDM' })
  codtdm: number;

  @Column('char', { primary: true, name: 'CODDMT', length: 30 })
  coddmt: string;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @ManyToOne(() => TcbdmtEntity, (tcbdmtEntity) => tcbdmtEntity.tcbcdms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODTDM', referencedColumnName: 'codtdm' },
    { name: 'CODDMT', referencedColumnName: 'coddmt' },
  ])
  tcbdmt: TcbdmtEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbcdms)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbcdms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;
}
