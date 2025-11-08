import { Column, Entity, Index } from 'typeorm';

@Index('PK__ACT_GE_PROPERTY__28C6EE52', ['name'], { unique: true })
@Entity('ACT_GE_PROPERTY', { schema: 'SANKHYA' })
export class ActGePropertyEntity {
  @Column('nvarchar', { primary: true, name: 'NAME_', length: 64 })
  name: string;

  @Column('nvarchar', { name: 'VALUE_', nullable: true, length: 300 })
  value: string | null;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;
}
