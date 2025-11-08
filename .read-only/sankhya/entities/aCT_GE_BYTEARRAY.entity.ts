import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ActReDeploymentEntity } from './aCT_RE_DEPLOYMENT.entity';
import { ActReModelEntity } from './aCT_RE_MODEL.entity';
import { ActRuJobEntity } from './aCT_RU_JOB.entity';
import { ActRuVariableEntity } from './aCT_RU_VARIABLE.entity';

@Index('PK__ACT_GE_BYTEARRAY__2D8BA36F', ['id'], { unique: true })
@Entity('ACT_GE_BYTEARRAY', { schema: 'SANKHYA' })
export class ActGeBytearrayEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('varbinary', { name: 'BYTES_', nullable: true })
  bytes: Buffer | null;

  @Column('tinyint', { name: 'GENERATED_', nullable: true })
  generated: number | null;

  @ManyToOne(
    () => ActReDeploymentEntity,
    (actReDeploymentEntity) => actReDeploymentEntity.actGeBytearrays,
  )
  @JoinColumn([{ name: 'DEPLOYMENT_ID_', referencedColumnName: 'id' }])
  deploymentId: ActReDeploymentEntity;

  @OneToMany(
    () => ActReModelEntity,
    (actReModelEntity) => actReModelEntity.editorSourceValueId,
  )
  actReModels: ActReModelEntity[];

  @OneToMany(
    () => ActReModelEntity,
    (actReModelEntity) => actReModelEntity.editorSourceExtraValueId,
  )
  actReModels2: ActReModelEntity[];

  @OneToMany(
    () => ActRuJobEntity,
    (actRuJobEntity) => actRuJobEntity.exceptionStackId_2,
  )
  actRuJobs: ActRuJobEntity[];

  @OneToMany(
    () => ActRuVariableEntity,
    (actRuVariableEntity) => actRuVariableEntity.bytearrayId_2,
  )
  actRuVariables: ActRuVariableEntity[];
}
