import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_D_OI', ['decInstId'], {})
@Index('CMD_ACT_IDX_H_D_OR', ['ruleOrder', 'clauseId'], {})
@Index('PK__CMD_ACT___C4971C0F2EAC46DF', ['id'], { unique: true })
@Entity('CMD_ACT_HI_DEC_OUT', { schema: 'SANKHYA' })
export class CmdActHiDecOutEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'DEC_INST_ID_', length: 64 })
  decInstId: string;

  @Column('nvarchar', { name: 'CLAUSE_ID_', nullable: true, length: 64 })
  clauseId: string | null;

  @Column('nvarchar', { name: 'CLAUSE_NAME_', nullable: true, length: 255 })
  clauseName: string | null;

  @Column('nvarchar', { name: 'RULE_ID_', nullable: true, length: 64 })
  ruleId: string | null;

  @Column('int', { name: 'RULE_ORDER_', nullable: true })
  ruleOrder: number | null;

  @Column('nvarchar', { name: 'VAR_NAME_', nullable: true, length: 255 })
  varName: string | null;

  @Column('nvarchar', { name: 'VAR_TYPE_', nullable: true, length: 100 })
  varType: string | null;

  @Column('nvarchar', { name: 'BYTEARRAY_ID_', nullable: true, length: 64 })
  bytearrayId: string | null;

  @Column('float', { name: 'DOUBLE_', nullable: true, precision: 53 })
  double: number | null;

  @Column('numeric', { name: 'LONG_', nullable: true, precision: 19, scale: 0 })
  long: number | null;

  @Column('nvarchar', { name: 'TEXT_', nullable: true, length: 3103 })
  text: string | null;

  @Column('nvarchar', { name: 'TEXT2_', nullable: true, length: 3103 })
  text2: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
