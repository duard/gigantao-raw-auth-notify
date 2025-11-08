import { Column, Entity, Index } from 'typeorm';

@Index('ACT_IDX_HI_DETAIL_ACT_INST', ['actInstId'], {})
@Index('ACT_IDX_HI_DETAIL_NAME', ['name'], {})
@Index('ACT_IDX_HI_DETAIL_PROC_INST', ['procInstId'], {})
@Index('ACT_IDX_HI_DETAIL_TASK_ID', ['taskId'], {})
@Index('ACT_IDX_HI_DETAIL_TIME', ['time'], {})
@Index('PK__ACT_HI_DETAIL__15B419DE', ['id'], { unique: true })
@Entity('ACT_HI_DETAIL', { schema: 'SANKHYA' })
export class ActHiDetailEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'ACT_INST_ID_', nullable: true, length: 64 })
  actInstId: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'VAR_TYPE_', nullable: true, length: 255 })
  varType: string | null;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('datetime', { name: 'TIME_', nullable: true })
  time: Date | null;

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
}
