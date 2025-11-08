import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';
import { ActIdUserEntity } from './aCT_ID_USER.entity';

@Index('PK__ACT_ID_GROUP__596A25AD', ['id'], { unique: true })
@Entity('ACT_ID_GROUP', { schema: 'SANKHYA' })
export class ActIdGroupEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @ManyToMany(
    () => ActIdUserEntity,
    (actIdUserEntity) => actIdUserEntity.actIdGroups,
  )
  @JoinTable({
    name: 'ACT_ID_MEMBERSHIP',
    joinColumns: [{ name: 'GROUP_ID_', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'USER_ID_', referencedColumnName: 'id' }],
    schema: 'SANKHYA',
  })
  actIdUsers: ActIdUserEntity[];
}
