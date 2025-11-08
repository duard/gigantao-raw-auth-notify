import { Column, Entity, Index } from 'typeorm';

@Index('PK__CMD_ACT___A7BE44DE6C1F6973', ['name'], { unique: true })
@Entity('CMD_ACT_GE_PROPERTY', { schema: 'SANKHYA' })
export class CmdActGePropertyEntity {
  @Column('nvarchar', { primary: true, name: 'NAME_', length: 64 })
  name: string;

  @Column('nvarchar', { name: 'VALUE_', nullable: true, length: 300 })
  value: string | null;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;
}
