import { Column, Entity, Index } from 'typeorm';

@Index('PK__CMD_ACT___C4971C0F1F9F0D79', ['id'], { unique: true })
@Entity('CMD_ACT_RU_FILTER', { schema: 'SANKHYA' })
export class CmdActRuFilterEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_' })
  rev: number;

  @Column('nvarchar', { name: 'RESOURCE_TYPE_', length: 255 })
  resourceType: string;

  @Column('nvarchar', { name: 'NAME_', length: 255 })
  name: string;

  @Column('nvarchar', { name: 'OWNER_', nullable: true, length: 255 })
  owner: string | null;

  @Column('nvarchar', { name: 'QUERY_' })
  query: string;

  @Column('nvarchar', { name: 'PROPERTIES_', nullable: true })
  properties: string | null;
}
