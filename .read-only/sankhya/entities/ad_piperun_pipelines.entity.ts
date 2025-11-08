import { Column, Entity, Index } from 'typeorm';

@Index('PK__ad_piper__3213E83F8EF5C345', ['id'], { unique: true })
@Entity('ad_piperun_pipelines', { schema: 'SANKHYA' })
export class AdPiperunPipelinesEntity {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'account_id', nullable: true })
  accountId: number | null;

  @Column('int', { name: 'funnel_type', nullable: true })
  funnelType: number | null;

  @Column('nvarchar', { name: 'funnel_type_name', nullable: true, length: 255 })
  funnelTypeName: string | null;

  @Column('nvarchar', {
    name: 'distribution_type',
    nullable: true,
    length: 255,
  })
  distributionType: string | null;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('nvarchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'description', nullable: true })
  description: string | null;

  @Column('int', { name: 'order', nullable: true })
  order: number | null;

  @Column('bit', { name: 'is_main', nullable: true })
  isMain: boolean | null;

  @Column('int', { name: 'limit_time', nullable: true })
  limitTime: number | null;

  @Column('tinyint', { name: 'visibility', nullable: true })
  visibility: number | null;
}
