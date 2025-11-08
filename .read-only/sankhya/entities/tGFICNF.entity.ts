import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcnfEntity } from './tGFCNF.entity';

@Index('PK_TGFICNF', ['nuconting', 'nunota'], { unique: true })
@Index('TGFICNF_I01', ['nunota'], {})
@Entity('TGFICNF', { schema: 'SANKHYA' })
export class TgficnfEntity {
  @Column('int', { primary: true, name: 'NUCONTING' })
  nuconting: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgficnfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfcnfEntity, (tgfcnfEntity) => tgfcnfEntity.tgficnfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCONTING', referencedColumnName: 'nuconting' }])
  nuconting2: TgfcnfEntity;
}
