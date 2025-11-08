import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_D_IACT', ['actId'], {})
@Index('CMD_ACT_IDX_H_D_IACTI', ['actInstId'], {})
@Index('CMD_ACT_IDX_H_D_ICI', ['caseInstId'], {})
@Index('CMD_ACT_IDX_H_D_IID', ['decDefId'], {})
@Index('CMD_ACT_IDX_H_D_IKEY', ['decDefKey'], {})
@Index('CMD_ACT_IDX_H_D_IPI', ['procInstId'], {})
@Index('CMD_ACT_IDX_H_D_IRQID', ['decReqId'], {})
@Index('CMD_ACT_IDX_H_D_IRQKEY', ['decReqKey'], {})
@Index('CMD_ACT_IDX_H_D_IT', ['evalTime'], {})
@Index('CMD_ACT_IDX_H_D_ITEID', ['tenantId'], {})
@Index('CMD_ACT_IDX_H_D_ITRID', ['rootDecInstId'], {})
@Index('PK__CMD_ACT___C4971C0F270B2517', ['id'], { unique: true })
@Entity('CMD_ACT_HI_DECINST', { schema: 'SANKHYA' })
export class CmdActHiDecinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'DEC_DEF_ID_', length: 64 })
  decDefId: string;

  @Column('nvarchar', { name: 'DEC_DEF_KEY_', length: 255 })
  decDefKey: string;

  @Column('nvarchar', { name: 'DEC_DEF_NAME_', nullable: true, length: 255 })
  decDefName: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_KEY_', nullable: true, length: 255 })
  caseDefKey: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_ID_', nullable: true, length: 64 })
  caseDefId: string | null;

  @Column('nvarchar', { name: 'CASE_INST_ID_', nullable: true, length: 64 })
  caseInstId: string | null;

  @Column('nvarchar', { name: 'ACT_INST_ID_', nullable: true, length: 64 })
  actInstId: string | null;

  @Column('nvarchar', { name: 'ACT_ID_', nullable: true, length: 255 })
  actId: string | null;

  @Column('datetime', { name: 'EVAL_TIME_' })
  evalTime: Date;

  @Column('float', { name: 'COLLECT_VALUE_', nullable: true, precision: 53 })
  collectValue: number | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 255 })
  userId: string | null;

  @Column('nvarchar', { name: 'ROOT_DEC_INST_ID_', nullable: true, length: 64 })
  rootDecInstId: string | null;

  @Column('nvarchar', { name: 'DEC_REQ_ID_', nullable: true, length: 64 })
  decReqId: string | null;

  @Column('nvarchar', { name: 'DEC_REQ_KEY_', nullable: true, length: 255 })
  decReqKey: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
