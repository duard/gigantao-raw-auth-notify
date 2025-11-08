import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_METER_LOG', ['name', 'timestamp'], {})
@Index('CMD_ACT_IDX_METER_LOG_MS', ['milliseconds'], {})
@Index('CMD_ACT_IDX_METER_LOG_NAME_MS', ['name', 'milliseconds'], {})
@Index('CMD_ACT_IDX_METER_LOG_REPORT', ['name', 'reporter', 'milliseconds'], {})
@Index('CMD_ACT_IDX_METER_LOG_TIME', ['timestamp'], {})
@Index('PK__CMD_ACT___C4971C0F236F9E5D', ['id'], { unique: true })
@Entity('CMD_ACT_RU_METER_LOG', { schema: 'SANKHYA' })
export class CmdActRuMeterLogEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'NAME_', length: 64 })
  name: string;

  @Column('nvarchar', { name: 'REPORTER_', nullable: true, length: 255 })
  reporter: string | null;

  @Column('numeric', {
    name: 'VALUE_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  value: number | null;

  @Column('datetime', { name: 'TIMESTAMP_', nullable: true })
  timestamp: Date | null;

  @Column('numeric', {
    name: 'MILLISECONDS_',
    nullable: true,
    precision: 19,
    scale: 0,
    default: () => '(0)',
  })
  milliseconds: number | null;
}
