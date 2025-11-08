import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CmdActGeBytearrayEntity } from './cMD_ACT_GE_BYTEARRAY.entity';

@Index('CMD_ACT_IDX_DEPLOYMENT_NAME', ['name'], {})
@Index('CMD_ACT_IDX_DP_T_ID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F73C08B3B', ['id'], { unique: true })
@Entity('CMD_ACT_RE_DEPLOYMENT', { schema: 'SANKHYA' })
export class CmdActReDeploymentEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('datetime', { name: 'DEPLOY_TIME_', nullable: true })
  deployTime: Date | null;

  @Column('nvarchar', { name: 'SOURCE_', nullable: true, length: 255 })
  source: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @OneToMany(
    () => CmdActGeBytearrayEntity,
    (cmdActGeBytearrayEntity) => cmdActGeBytearrayEntity.deploymentId_2,
  )
  cmdActGeBytearrays: CmdActGeBytearrayEntity[];
}
