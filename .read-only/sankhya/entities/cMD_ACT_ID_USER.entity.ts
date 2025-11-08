import { Column, Entity, Index, ManyToMany, OneToMany } from 'typeorm';
import { CmdActIdGroupEntity } from './cMD_ACT_ID_GROUP.entity';
import { CmdActIdTenantMemberEntity } from './cMD_ACT_ID_TENANT_MEMBER.entity';

@Index('PK__CMD_ACT___C4971C0F581870C6', ['id'], { unique: true })
@Entity('CMD_ACT_ID_USER', { schema: 'SANKHYA' })
export class CmdActIdUserEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'FIRST_', nullable: true, length: 255 })
  first: string | null;

  @Column('nvarchar', { name: 'LAST_', nullable: true, length: 255 })
  last: string | null;

  @Column('nvarchar', { name: 'EMAIL_', nullable: true, length: 255 })
  email: string | null;

  @Column('nvarchar', { name: 'PWD_', nullable: true, length: 255 })
  pwd: string | null;

  @Column('nvarchar', { name: 'SALT_', nullable: true, length: 255 })
  salt: string | null;

  @Column('datetime', { name: 'LOCK_EXP_TIME_', nullable: true })
  lockExpTime: Date | null;

  @Column('int', { name: 'ATTEMPTS_', nullable: true })
  attempts: number | null;

  @Column('nvarchar', { name: 'PICTURE_ID_', nullable: true, length: 64 })
  pictureId: string | null;

  @ManyToMany(
    () => CmdActIdGroupEntity,
    (cmdActIdGroupEntity) => cmdActIdGroupEntity.cmdActIdUsers,
  )
  cmdActIdGroups: CmdActIdGroupEntity[];

  @OneToMany(
    () => CmdActIdTenantMemberEntity,
    (cmdActIdTenantMemberEntity) => cmdActIdTenantMemberEntity.userId_2,
  )
  cmdActIdTenantMembers: CmdActIdTenantMemberEntity[];
}
