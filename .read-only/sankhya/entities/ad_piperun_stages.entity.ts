import { Column, Entity, Index } from 'typeorm';

@Index('PK__ad_piper__3213E83F6689A93A', ['id'], { unique: true })
@Entity('ad_piperun_stages', { schema: 'SANKHYA' })
export class AdPiperunStagesEntity {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'account_id', nullable: true })
  accountId: number | null;

  @Column('int', { name: 'pipeline_id', nullable: true })
  pipelineId: number | null;

  @Column('int', { name: 'origin_id', nullable: true })
  originId: number | null;

  @Column('nvarchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'description', nullable: true })
  description: string | null;

  @Column('int', { name: 'order', nullable: true })
  order: number | null;

  @Column('nvarchar', { name: 'color', nullable: true })
  color: string | null;

  @Column('tinyint', { name: 'completion_percentage', nullable: true })
  completionPercentage: number | null;

  @Column('bit', { name: 'block_emails', nullable: true })
  blockEmails: boolean | null;

  @Column('int', { name: 'days_limit', nullable: true })
  daysLimit: number | null;

  @Column('int', { name: 'update_limit', nullable: true })
  updateLimit: number | null;

  @Column('nvarchar', { name: 'hash', nullable: true })
  hash: string | null;

  @Column('bit', { name: 'allow_win_deal', nullable: true })
  allowWinDeal: boolean | null;

  @Column('bit', { name: 'allow_create_deal', nullable: true })
  allowCreateDeal: boolean | null;
}
