import { Column, Entity, Index } from 'typeorm';

@Index('PK__CMD_ACT___C4971C0F5BE901AA', ['id'], { unique: true })
@Entity('CMD_ACT_ID_INFO', { schema: 'SANKHYA' })
export class CmdActIdInfoEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 64 })
  userId: string | null;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 64 })
  type: string | null;

  @Column('nvarchar', { name: 'KEY_', nullable: true, length: 255 })
  key: string | null;

  @Column('nvarchar', { name: 'VALUE_', nullable: true, length: 255 })
  value: string | null;

  @Column('image', { name: 'PASSWORD_', nullable: true })
  password: Buffer | null;

  @Column('nvarchar', { name: 'PARENT_ID_', nullable: true, length: 255 })
  parentId: string | null;
}
