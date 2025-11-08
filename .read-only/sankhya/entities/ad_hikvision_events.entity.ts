import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__ad_hikvi__3213E83F896B65B9', ['id'], { unique: true })
@Entity('ad_hikvision_events', { schema: 'SANKHYA' })
export class AdHikvisionEventsEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'major', nullable: true })
  major: number | null;

  @Column('int', { name: 'minor', nullable: true })
  minor: number | null;

  @Column('datetime', { name: 'time', nullable: true })
  time: Date | null;

  @Column('int', { name: 'card_type', nullable: true })
  cardType: number | null;

  @Column('nvarchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('int', { name: 'card_reader_no', nullable: true })
  cardReaderNo: number | null;

  @Column('int', { name: 'door_no', nullable: true })
  doorNo: number | null;

  @Column('varchar', { name: 'employee_no_string', nullable: true, length: 50 })
  employeeNoString: string | null;

  @Column('int', { name: 'serial_no', nullable: true })
  serialNo: number | null;

  @Column('nvarchar', { name: 'user_type', nullable: true, length: 50 })
  userType: string | null;

  @Column('nvarchar', {
    name: 'current_verify_mode',
    nullable: true,
    length: 100,
  })
  currentVerifyMode: string | null;

  @Column('nvarchar', { name: 'mask', nullable: true, length: 10 })
  mask: string | null;

  @Column('nvarchar', { name: 'picture_url', nullable: true })
  pictureUrl: string | null;

  @Column('decimal', {
    name: 'face_rect_height',
    nullable: true,
    precision: 5,
    scale: 3,
  })
  faceRectHeight: number | null;

  @Column('decimal', {
    name: 'face_rect_width',
    nullable: true,
    precision: 5,
    scale: 3,
  })
  faceRectWidth: number | null;

  @Column('decimal', {
    name: 'face_rect_x',
    nullable: true,
    precision: 5,
    scale: 3,
  })
  faceRectX: number | null;

  @Column('decimal', {
    name: 'face_rect_y',
    nullable: true,
    precision: 5,
    scale: 3,
  })
  faceRectY: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'last_updated_at', nullable: true })
  lastUpdatedAt: Date | null;

  @Column('datetime', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @Column('varchar', { name: 'ip', nullable: true, length: 45 })
  ip: string | null;
}
