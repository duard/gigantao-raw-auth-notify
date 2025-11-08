import { Column, Entity, Index, ManyToMany } from 'typeorm';
import { ActIdGroupEntity } from './aCT_ID_GROUP.entity';

@Index('PK__ACT_ID_USER__5B526E1F', ['id'], { unique: true })
@Entity('ACT_ID_USER', { schema: 'SANKHYA' })
export class ActIdUserEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'FIRST_', nullable: true, length: 255 })
  first: string | null;

  @Column('nvarchar', { name: 'LAST_', nullable: true, length: 255 })
  last: string | null;

  @Column('nvarchar', { name: 'EMAIL_', nullable: true, length: 255 })
  email: string | null;

  @Column('nvarchar', { name: 'PWD_', nullable: true, length: 255 })
  pwd: string | null;

  @Column('nvarchar', { name: 'PICTURE_ID_', nullable: true, length: 64 })
  pictureId: string | null;

  @ManyToMany(
    () => ActIdGroupEntity,
    (actIdGroupEntity) => actIdGroupEntity.actIdUsers,
  )
  actIdGroups: ActIdGroupEntity[];
}
