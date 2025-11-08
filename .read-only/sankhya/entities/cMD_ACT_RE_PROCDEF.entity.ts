import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CmdActRuExecutionEntity } from './cMD_ACT_RU_EXECUTION.entity';
import { CmdActRuIdentitylinkEntity } from './cMD_ACT_RU_IDENTITYLINK.entity';
import { CmdActRuIncidentEntity } from './cMD_ACT_RU_INCIDENT.entity';
import { CmdActRuTaskEntity } from './cMD_ACT_RU_TASK.entity';

@Index('CMD_ACT_IDX_PRO_DEP_ID', ['deploymentId'], {})
@Index('CMD_ACT_IDX_PROCDEF_TENANT_ID', ['tenantId'], {})
@Index('CMD_ACT_IDX_PROCDEF_VER_TAG', ['versionTag'], {})
@Index('PK__CMD_ACT___C4971C0F04EB173D', ['id'], { unique: true })
@Entity('CMD_ACT_RE_PROCDEF', { schema: 'SANKHYA' })
export class CmdActReProcdefEntity {
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

  @Column('tinyint', { name: 'HAS_START_FORM_KEY_', nullable: true })
  hasStartFormKey: number | null;

  @Column('tinyint', { name: 'SUSPENSION_STATE_', nullable: true })
  suspensionState: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('nvarchar', { name: 'VERSION_TAG_', nullable: true, length: 64 })
  versionTag: string | null;

  @Column('int', { name: 'HISTORY_TTL_', nullable: true })
  historyTtl: number | null;

  @OneToMany(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.procDefId_2,
  )
  cmdActRuExecutions: CmdActRuExecutionEntity[];

  @OneToMany(
    () => CmdActRuIdentitylinkEntity,
    (cmdActRuIdentitylinkEntity) => cmdActRuIdentitylinkEntity.procDefId_2,
  )
  cmdActRuIdentitylinks: CmdActRuIdentitylinkEntity[];

  @OneToMany(
    () => CmdActRuIncidentEntity,
    (cmdActRuIncidentEntity) => cmdActRuIncidentEntity.procDefId_2,
  )
  cmdActRuIncidents: CmdActRuIncidentEntity[];

  @OneToMany(
    () => CmdActRuTaskEntity,
    (cmdActRuTaskEntity) => cmdActRuTaskEntity.procDefId_2,
  )
  cmdActRuTasks: CmdActRuTaskEntity[];
}
