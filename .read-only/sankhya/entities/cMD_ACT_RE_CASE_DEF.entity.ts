import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CmdActRuCaseExecutionEntity } from './cMD_ACT_RU_CASE_EXECUTION.entity';
import { CmdActRuTaskEntity } from './cMD_ACT_RU_TASK.entity';

@Index('CMD_ACT_IDX_CASE_DEF_TENANT_ID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F49954745', ['id'], { unique: true })
@Entity('CMD_ACT_RE_CASE_DEF', { schema: 'SANKHYA' })
export class CmdActReCaseDefEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'CATEGORY_', nullable: true, length: 255 })
  category: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'KEY_', length: 255 })
  key: string;

  @Column('int', { name: 'VERSION_' })
  version: number;

  @Column('nvarchar', { name: 'DEPLOYMENT_ID_', nullable: true, length: 64 })
  deploymentId: string | null;

  @Column('nvarchar', { name: 'RESOURCE_NAME_', nullable: true, length: 3103 })
  resourceName: string | null;

  @Column('nvarchar', {
    name: 'DGRM_RESOURCE_NAME_',
    nullable: true,
    length: 3103,
  })
  dgrmResourceName: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('int', { name: 'HISTORY_TTL_', nullable: true })
  historyTtl: number | null;

  @OneToMany(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) => cmdActRuCaseExecutionEntity.caseDefId_2,
  )
  cmdActRuCaseExecutions: CmdActRuCaseExecutionEntity[];

  @OneToMany(
    () => CmdActRuTaskEntity,
    (cmdActRuTaskEntity) => cmdActRuTaskEntity.caseDefId_2,
  )
  cmdActRuTasks: CmdActRuTaskEntity[];
}
