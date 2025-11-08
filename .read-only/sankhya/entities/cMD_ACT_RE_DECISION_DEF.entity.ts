import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmdActReDecisionReqDefEntity } from './cMD_ACT_RE_DECISION_REQ_DEF.entity';

@Index('CMD_ACT_IDX_DEC_DEF_REQ_ID', ['decReqId'], {})
@Index('CMD_ACT_IDX_DEC_DEF_TENANT_ID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F5D9C3FF2', ['id'], { unique: true })
@Entity('CMD_ACT_RE_DECISION_DEF', { schema: 'SANKHYA' })
export class CmdActReDecisionDefEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'CATEGORY_', nullable: true, length: 255 })
  category: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'KEY_', length: 255 })
  key: string;

  @Column('int', { name: 'VERSION_' })
  version: number;

  @Column('nvarchar', { name: 'DEPLOYMENT_ID_', nullable: true, length: 64 })
  deploymentId: string | null;

  @Column('nvarchar', { name: 'RESOURCE_NAME_', nullable: true, length: 3103 })
  resourceName: string | null;

  @Column('nvarchar', {
    name: 'DGRM_RESOURCE_NAME_',
    nullable: true,
    length: 3103,
  })
  dgrmResourceName: string | null;

  @Column('nvarchar', { name: 'DEC_REQ_ID_', nullable: true, length: 64 })
  decReqId: string | null;

  @Column('nvarchar', { name: 'DEC_REQ_KEY_', nullable: true, length: 255 })
  decReqKey: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('int', { name: 'HISTORY_TTL_', nullable: true })
  historyTtl: number | null;

  @Column('nvarchar', { name: 'VERSION_TAG_', nullable: true, length: 64 })
  versionTag: string | null;

  @ManyToOne(
    () => CmdActReDecisionReqDefEntity,
    (cmdActReDecisionReqDefEntity) =>
      cmdActReDecisionReqDefEntity.cmdActReDecisionDefs,
  )
  @JoinColumn([{ name: 'DEC_REQ_ID_', referencedColumnName: 'id' }])
  decReqId_2: CmdActReDecisionReqDefEntity;
}
