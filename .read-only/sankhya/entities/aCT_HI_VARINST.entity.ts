import { Column, Entity, Index } from 'typeorm';

@Index('ACT_IDX_HI_PROCVAR_NAME_TYPE', ['name', 'varType'], {})
@Index('ACT_IDX_HI_PROCVAR_PROC_INST', ['procInstId'], {})
@Index('ACT_IDX_HI_PROCVAR_TASK_ID', ['taskId'], {})
@Index('PK__ACT_HI_VARINST__13CBD16C', ['id'], { unique: true })
@Entity('ACT_HI_VARINST', { schema: 'SANKHYA' })
export class ActHiVarinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'PROC_INST_ID_', length: 64 })
  procInstId: string;

  @Column('nvarchar', { name: 'EXECUTION_ID_', length: 64 })
  executionId: string;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'NAME_', length: 255 })
  name: string;

  @Column('nvarchar', { name: 'VAR_TYPE_', length: 100 })
  varType: string;

  @Column('int', { name: 'REV_' })
  rev: number;

  @Column('nvarchar', { name: 'BYTEARRAY_ID_', length: 64 })
  bytearrayId: string;

  @Column('float', { name: 'DOUBLE_', nullable: true, precision: 53 })
  double: number | null;

  @Column('numeric', { name: 'LONG_', nullable: true, precision: 19, scale: 0 })
  long: number | null;

  @Column('nvarchar', { name: 'TEXT_', nullable: true, length: 3103 })
  text: string | null;

  @Column('nvarchar', { name: 'TEXT2_', nullable: true, length: 3103 })
  text2: string | null;

  @Column('datetime', { name: 'CREATE_TIME_' })
  createTime: Date;

  @Column('datetime', { name: 'LAST_UPDATED_TIME_' })
  lastUpdatedTime: Date;
}
