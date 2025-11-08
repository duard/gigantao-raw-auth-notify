import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwconEntity } from './tGWCON.entity';

@Index('PK_TGWPVOL', ['nuconferencia', 'numvol'], { unique: true })
@Entity('TGWPVOL', { schema: 'SANKHYA' })
export class TgwpvolEntity {
  @Column('int', { primary: true, name: 'NUCONFERENCIA' })
  nuconferencia: number;

  @Column('smallint', { primary: true, name: 'NUMVOL' })
  numvol: number;

  @Column('int', { name: 'PESO' })
  peso: number;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwpvols)
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia2: TgwconEntity;
}
