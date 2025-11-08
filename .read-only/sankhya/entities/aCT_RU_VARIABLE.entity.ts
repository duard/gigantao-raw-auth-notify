import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ActGeBytearrayEntity } from './aCT_GE_BYTEARRAY.entity';
import { ActRuExecutionEntity } from './aCT_RU_EXECUTION.entity';

@Index('ACT_IDX_VARIABLE_BA', ['bytearrayId'], {})
@Index('ACT_IDX_VARIABLE_EXEC', ['executionId'], {})
@Index('ACT_IDX_VARIABLE_PROCINST', ['procInstId'], {})
@Index('ACT_IDX_VARIABLE_TASK_ID', ['taskId'], {})
@Index('PK__ACT_RU_VARIABLE__4DF87301', ['id'], { unique: true })
@Entity('ACT_RU_VARIABLE', { schema: 'SANKHYA' })
export class ActRuVariableEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

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

  @ManyToOne(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.actRuVariables,
  )
  @JoinColumn([{ name: 'EXECUTION_ID_', referencedColumnName: 'id' }])
  executionId_2: ActRuExecutionEntity;

  @ManyToOne(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.actRuVariables2,
  )
  @JoinColumn([{ name: 'PROC_INST_ID_', referencedColumnName: 'id' }])
  procInstId_2: ActRuExecutionEntity;

  @ManyToOne(
    () => ActGeBytearrayEntity,
    (actGeBytearrayEntity) => actGeBytearrayEntity.actRuVariables,
  )
  @JoinColumn([{ name: 'BYTEARRAY_ID_', referencedColumnName: 'id' }])
  bytearrayId_2: ActGeBytearrayEntity;
}
