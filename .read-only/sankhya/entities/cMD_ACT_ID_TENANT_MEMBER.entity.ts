import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmdActIdGroupEntity } from './cMD_ACT_ID_GROUP.entity';
import { CmdActIdUserEntity } from './cMD_ACT_ID_USER.entity';
import { CmdActIdTenantEntity } from './cMD_ACT_ID_TENANT.entity';

@Index('CMD_ACT_UNIQ_TE_USER', ['tenantId', 'userId'], { unique: true })
@Index('CMD_ACT_UNIQ_TENANT_MEMB_GROUP', ['tenantId', 'groupId'], {
  unique: true,
})
@Index('PK__CMD_ACT___C4971C0F638A2372', ['id'], { unique: true })
@Entity('CMD_ACT_ID_TENANT_MEMBER', { schema: 'SANKHYA' })
export class CmdActIdTenantMemberEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'TENANT_ID_', length: 64 })
  tenantId: string;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 64 })
  userId: string | null;

  @Column('nvarchar', { name: 'GROUP_ID_', nullable: true, length: 64 })
  groupId: string | null;

  @ManyToOne(
    () => CmdActIdGroupEntity,
    (cmdActIdGroupEntity) => cmdActIdGroupEntity.cmdActIdTenantMembers,
  )
  @JoinColumn([{ name: 'GROUP_ID_', referencedColumnName: 'id' }])
  groupId_2: CmdActIdGroupEntity;

  @ManyToOne(
    () => CmdActIdUserEntity,
    (cmdActIdUserEntity) => cmdActIdUserEntity.cmdActIdTenantMembers,
  )
  @JoinColumn([{ name: 'USER_ID_', referencedColumnName: 'id' }])
  userId_2: CmdActIdUserEntity;

  @ManyToOne(
    () => CmdActIdTenantEntity,
    (cmdActIdTenantEntity) => cmdActIdTenantEntity.cmdActIdTenantMembers,
  )
  @JoinColumn([{ name: 'TENANT_ID_', referencedColumnName: 'id' }])
  tenantId_2: CmdActIdTenantEntity;
}
