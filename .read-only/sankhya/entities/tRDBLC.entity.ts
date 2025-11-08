import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TRDBLC', ['resourceid'], { unique: true })
@Entity('TRDBLC', { schema: 'SANKHYA' })
export class TrdblcEntity {
  @Column('varchar', { primary: true, name: 'RESOURCEID', length: 256 })
  resourceid: string;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 300 })
  motivo: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trdblcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
