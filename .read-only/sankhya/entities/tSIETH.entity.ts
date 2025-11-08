import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsithdEntity } from './tSITHD.entity';

@Index('PK_TSIETH', ['id'], { unique: true })
@Entity('TSIETH', { schema: 'SANKHYA' })
export class TsiethEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('datetime', { name: 'DHINSERT', nullable: true })
  dhinsert: Date | null;

  @ManyToOne(() => TsithdEntity, (tsithdEntity) => tsithdEntity.tsieths)
  @JoinColumn([{ name: 'IDTHREAD', referencedColumnName: 'id' }])
  idthread: TsithdEntity;
}
