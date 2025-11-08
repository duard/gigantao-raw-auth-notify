import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TSILOGFTC', ['nulog'], { unique: true })
@Entity('TSILOGFTC', { schema: 'SANKHYA' })
export class TsilogftcEntity {
  @Column('int', { primary: true, name: 'NULOG' })
  nulog: number;

  @Column('datetime', { name: 'DHFAT', nullable: true })
  dhfat: Date | null;

  @Column('text', { name: 'ERROFAT', nullable: true })
  errofat: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsilogftcs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
