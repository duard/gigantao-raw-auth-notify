import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_AUTH_GROUP_ID', ['groupId'], {})
@Index('CMD_ACT_IDX_AUTH_RESOURCE_ID', ['resourceId'], {})
@Index(
  'CMD_ACT_UNIQ_AUTH_GROUP',
  ['type', 'groupId', 'resourceType', 'resourceId'],
  {
    unique: true,
  },
)
@Index(
  'CMD_ACT_UNIQ_AUTH_USER',
  ['type', 'userId', 'resourceType', 'resourceId'],
  { unique: true },
)
@Index('PK__CMD_ACT___C4971C0F1BCE7C95', ['id'], { unique: true })
@Entity('CMD_ACT_RU_AUTHORIZATION', { schema: 'SANKHYA' })
export class CmdActRuAuthorizationEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('int', { name: 'TYPE_' })
  type: number;

  @Column('nvarchar', { name: 'GROUP_ID_', nullable: true, length: 255 })
  groupId: string | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 255 })
  userId: string | null;

  @Column('int', { name: 'RESOURCE_TYPE_' })
  resourceType: number;

  @Column('nvarchar', { name: 'RESOURCE_ID_', nullable: true, length: 255 })
  resourceId: string | null;

  @Column('int', { name: 'PERMS_', nullable: true })
  perms: number | null;
}
