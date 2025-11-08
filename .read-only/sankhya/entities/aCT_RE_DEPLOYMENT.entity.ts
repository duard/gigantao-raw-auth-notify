import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ActGeBytearrayEntity } from './aCT_GE_BYTEARRAY.entity';
import { ActReModelEntity } from './aCT_RE_MODEL.entity';

@Index('PK__ACT_RE_DEPLOYMEN__2AAF36C4', ['id'], { unique: true })
@Entity('ACT_RE_DEPLOYMENT', { schema: 'SANKHYA' })
export class ActReDeploymentEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'CATEGORY_', nullable: true, length: 255 })
  category: string | null;

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;

  @Column('datetime', { name: 'DEPLOY_TIME_', nullable: true })
  deployTime: Date | null;

  @OneToMany(
    () => ActGeBytearrayEntity,
    (actGeBytearrayEntity) => actGeBytearrayEntity.deploymentId,
  )
  actGeBytearrays: ActGeBytearrayEntity[];

  @OneToMany(
    () => ActReModelEntity,
    (actReModelEntity) => actReModelEntity.deploymentId,
  )
  actReModels: ActReModelEntity[];
}
