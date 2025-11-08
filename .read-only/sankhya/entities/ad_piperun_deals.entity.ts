import { Column, Entity, Index } from 'typeorm';

@Index('PK__ad_piper__3213E83F6B91E200', ['id'], { unique: true })
@Entity('ad_piperun_deals', { schema: 'SANKHYA' })
export class AdPiperunDealsEntity {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('nvarchar', { name: 'hash', nullable: true, length: 255 })
  hash: string | null;

  @Column('nvarchar', {
    name: 'rdstation_reference',
    nullable: true,
    length: 255,
  })
  rdstationReference: string | null;

  @Column('int', { name: 'type_reference', nullable: true })
  typeReference: number | null;

  @Column('nvarchar', { name: 'reference', nullable: true, length: 255 })
  reference: string | null;

  @Column('float', { name: 'temperature', nullable: true, precision: 53 })
  temperature: number | null;

  @Column('float', { name: 'probability', nullable: true, precision: 53 })
  probability: number | null;

  @Column('int', { name: 'account_id', nullable: true })
  accountId: number | null;

  @Column('int', { name: 'pipeline_id', nullable: true })
  pipelineId: number | null;

  @Column('int', { name: 'owner_id', nullable: true })
  ownerId: number | null;

  @Column('int', { name: 'stage_id', nullable: true })
  stageId: number | null;

  @Column('int', { name: 'person_id', nullable: true })
  personId: number | null;

  @Column('int', { name: 'company_id', nullable: true })
  companyId: number | null;

  @Column('int', { name: 'lost_reason_id', nullable: true })
  lostReasonId: number | null;

  @Column('int', { name: 'origin_id', nullable: true })
  originId: number | null;

  @Column('int', { name: 'started_in_stage_id', nullable: true })
  startedInStageId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('nvarchar', { name: 'title', nullable: true, length: 255 })
  title: string | null;

  @Column('nvarchar', { name: 'description', nullable: true })
  description: string | null;

  @Column('nvarchar', { name: 'observation', nullable: true })
  observation: string | null;

  @Column('tinyint', { name: 'status', nullable: true })
  status: number | null;

  @Column('datetime', { name: 'closed_at', nullable: true })
  closedAt: Date | null;

  @Column('nvarchar', { name: 'reason_close', nullable: true, length: 255 })
  reasonClose: string | null;

  @Column('bit', { name: 'deleted', nullable: true })
  deleted: boolean | null;

  @Column('bit', { name: 'freezed', nullable: true })
  freezed: boolean | null;

  @Column('float', { name: 'value', nullable: true, precision: 53 })
  value: number | null;

  @Column('int', { name: 'order', nullable: true })
  order: number | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('datetime', { name: 'last_stage_updated_at', nullable: true })
  lastStageUpdatedAt: Date | null;

  @Column('float', { name: 'value_mrr', nullable: true, precision: 53 })
  valueMrr: number | null;

  @Column('datetime', { name: 'probably_closed_at', nullable: true })
  probablyClosedAt: Date | null;

  @Column('datetime', { name: 'last_contact_at', nullable: true })
  lastContactAt: Date | null;

  @Column('datetime', { name: 'stage_changed_at', nullable: true })
  stageChangedAt: Date | null;

  @Column('datetime', { name: 'frozen_at', nullable: true })
  frozenAt: Date | null;

  @Column('int', { name: 'lead_time', nullable: true })
  leadTime: number | null;
}
