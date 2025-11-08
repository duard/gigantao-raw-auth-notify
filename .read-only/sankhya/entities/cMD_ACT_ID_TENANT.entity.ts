import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CmdActIdTenantMemberEntity } from './cMD_ACT_ID_TENANT_MEMBER.entity';

@Index('PK__CMD_ACT___C4971C0F5FB9928E', ['id'], { unique: true })
@Entity('CMD_ACT_ID_TENANT', { schema: 'SANKHYA' })
export class CmdActIdTenantEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @OneToMany(
    () => CmdActIdTenantMemberEntity,
    (cmdActIdTenantMemberEntity) => cmdActIdTenantMemberEntity.tenantId_2,
  )
  cmdActIdTenantMembers: CmdActIdTenantMemberEntity[];
}
