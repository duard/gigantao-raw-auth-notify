import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TcbplaEntity } from './tCBPLA.entity';

@Index(
  'PK_TCBSAL',
  ['codemp', 'codctactb', 'codcencus', 'codproj', 'referencia'],
  { unique: true },
)
@Index('TCBSAL_I01', ['codemp', 'referencia', 'codctactb'], {})
@Entity('TCBSAL', { schema: 'SANKHYA' })
export class TcbsalEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('money', { name: 'SALDOINICMES', default: () => '(0)' })
  saldoinicmes: number;

  @Column('money', { name: 'DEBMES', default: () => '(0)' })
  debmes: number;

  @Column('money', { name: 'CREDMES', default: () => '(0)' })
  credmes: number;

  @Column('int', { primary: true, name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbsals)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcbsals)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcbsals)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbsals, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;
}
