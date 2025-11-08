import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_CONNECTORINTEGRATION', ['connectorintegrationid'], { unique: true })
@Entity('TBDATABASEINTEGRATIONENTRY', { schema: 'SANKHYA' })
export class TbdatabaseintegrationentryEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CONNECTORINTEGRATIONID' })
  connectorintegrationid: number;

  @Column('varbinary', { name: 'DOCUMENTDATA' })
  documentdata: Buffer;

  @Column('int', { name: 'STATUS' })
  status: number;

  @Column('int', { name: 'KIND' })
  kind: number;
}
