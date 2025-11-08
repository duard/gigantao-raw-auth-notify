import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ActGeBytearrayEntity } from './aCT_GE_BYTEARRAY.entity';
import { ActReDeploymentEntity } from './aCT_RE_DEPLOYMENT.entity';

@Index('PK__ACT_RE_MODEL__3068101A', ['id'], { unique: true })
@Entity('ACT_RE_MODEL', { schema: 'SANKHYA' })
export class ActReModelEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'KEY_', nullable: true, length: 255 })
  key: string | null;

  @Column('nvarchar', { name: 'CATEGORY_', nullable: true, length: 255 })
  category: string | null;

  @Column('datetime', { name: 'CREATE_TIME_', nullable: true })
  createTime: Date | null;

  @Column('datetime', { name: 'LAST_UPDATE_TIME_', nullable: true })
  lastUpdateTime: Date | null;

  @Column('int', { name: 'VERSION_', nullable: true })
  version: number | null;

  @Column('nvarchar', { name: 'META_INFO_', nullable: true, length: 3103 })
  metaInfo: string | null;

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;

  @ManyToOne(
    () => ActGeBytearrayEntity,
    (actGeBytearrayEntity) => actGeBytearrayEntity.actReModels,
  )
  @JoinColumn([{ name: 'EDITOR_SOURCE_VALUE_ID_', referencedColumnName: 'id' }])
  editorSourceValueId: ActGeBytearrayEntity;

  @ManyToOne(
    () => ActGeBytearrayEntity,
    (actGeBytearrayEntity) => actGeBytearrayEntity.actReModels2,
  )
  @JoinColumn([
    { name: 'EDITOR_SOURCE_EXTRA_VALUE_ID_', referencedColumnName: 'id' },
  ])
  editorSourceExtraValueId: ActGeBytearrayEntity;

  @ManyToOne(
    () => ActReDeploymentEntity,
    (actReDeploymentEntity) => actReDeploymentEntity.actReModels,
  )
  @JoinColumn([{ name: 'DEPLOYMENT_ID_', referencedColumnName: 'id' }])
  deploymentId: ActReDeploymentEntity;
}
