import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TBDATABASEINPUTENTRY', ['id'], { unique: true })
@Entity('TBDATABASEINPUTENTRY', { schema: 'SANKHYA' })
export class TbdatabaseinputentryEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varbinary', { name: 'DOCUMENTDATA' })
  documentdata: Buffer;

  @Column('smallint', { name: 'STATUS' })
  status: number;

  @Column('varchar', { name: 'JOB', nullable: true, length: 60 })
  job: string | null;

  @Column('varchar', { name: 'DOCUMENTUSER', nullable: true, length: 30 })
  documentuser: string | null;

  @Column('smallint', { name: 'KIND' })
  kind: number;
}
