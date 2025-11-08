import { Column, Entity, Index } from 'typeorm';

@Index('ACT_IDX_HI_IDENT_LNK_PROCINST', ['procInstId'], {})
@Index('ACT_IDX_HI_IDENT_LNK_TASK', ['taskId'], {})
@Index('ACT_IDX_HI_IDENT_LNK_USER', ['userId'], {})
@Index('PK__ACT_HI_IDENTITYL__1B6CF334', ['id'], { unique: true })
@Entity('ACT_HI_IDENTITYLINK', { schema: 'SANKHYA' })
export class ActHiIdentitylinkEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'GROUP_ID_', nullable: true, length: 255 })
  groupId: string | null;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 255 })
  userId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;
}
