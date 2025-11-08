import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CmdActReDeploymentEntity } from './cMD_ACT_RE_DEPLOYMENT.entity';
import { CmdActRuExtTaskEntity } from './cMD_ACT_RU_EXT_TASK.entity';
import { CmdActRuJobEntity } from './cMD_ACT_RU_JOB.entity';
import { CmdActRuVariableEntity } from './cMD_ACT_RU_VARIABLE.entity';

@Index('CMD_ACT_IDX_BA_DEPLOYMENT', ['deploymentId'], {})
@Index('CMD_ACT_IDX_BYTEARRAY_NAME', ['name'], {})
@Index('PK__CMD_ACT___C4971C0F6FEFFA57', ['id'], { unique: true })
@Entity('CMD_ACT_GE_BYTEARRAY', { schema: 'SANKHYA' })
export class CmdActGeBytearrayEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'DEPLOYMENT_ID_', nullable: true, length: 64 })
  deploymentId: string | null;

  @Column('image', { name: 'BYTES_', nullable: true })
  bytes: Buffer | null;

  @Column('tinyint', { name: 'GENERATED_', nullable: true })
  generated: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @ManyToOne(
    () => CmdActReDeploymentEntity,
    (cmdActReDeploymentEntity) => cmdActReDeploymentEntity.cmdActGeBytearrays,
  )
  @JoinColumn([{ name: 'DEPLOYMENT_ID_', referencedColumnName: 'id' }])
  deploymentId_2: CmdActReDeploymentEntity;

  @OneToMany(
    () => CmdActRuExtTaskEntity,
    (cmdActRuExtTaskEntity) => cmdActRuExtTaskEntity.errorDetailsId_2,
  )
  cmdActRuExtTasks: CmdActRuExtTaskEntity[];

  @OneToMany(
    () => CmdActRuJobEntity,
    (cmdActRuJobEntity) => cmdActRuJobEntity.exceptionStackId_2,
  )
  cmdActRuJobs: CmdActRuJobEntity[];

  @OneToMany(
    () => CmdActRuVariableEntity,
    (cmdActRuVariableEntity) => cmdActRuVariableEntity.bytearrayId_2,
  )
  cmdActRuVariables: CmdActRuVariableEntity[];
}
