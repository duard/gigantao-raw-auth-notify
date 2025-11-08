import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { CmdActIdUserEntity } from './cMD_ACT_ID_USER.entity';
import { CmdActIdTenantMemberEntity } from './cMD_ACT_ID_TENANT_MEMBER.entity';

@Index('PK__CMD_ACT___C4971C0F50774EFE', ['id'], { unique: true })
@Entity('CMD_ACT_ID_GROUP', { schema: 'SANKHYA' })
export class CmdActIdGroupEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @ManyToMany(
    () => CmdActIdUserEntity,
    (cmdActIdUserEntity) => cmdActIdUserEntity.cmdActIdGroups,
  )
  @JoinTable({
    name: 'CMD_ACT_ID_MEMBERSHIP',
    joinColumns: [{ name: 'GROUP_ID_', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'USER_ID_', referencedColumnName: 'id' }],
    schema: 'SANKHYA',
  })
  cmdActIdUsers: CmdActIdUserEntity[];

  @OneToMany(
    () => CmdActIdTenantMemberEntity,
    (cmdActIdTenantMemberEntity) => cmdActIdTenantMemberEntity.groupId_2,
  )
  cmdActIdTenantMembers: CmdActIdTenantMemberEntity[];
}
