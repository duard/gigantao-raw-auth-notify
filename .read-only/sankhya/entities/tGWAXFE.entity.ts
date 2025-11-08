import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwaraEntity } from './tGWARA.entity';
import { TgwendEntity } from './tGWEND.entity';

@Index('PK_TGWAXFE', ['nuarea', 'codendini'], { unique: true })
@Entity('TGWAXFE', { schema: 'SANKHYA' })
export class TgwaxfeEntity {
  @Column('int', { primary: true, name: 'NUAREA' })
  nuarea: number;

  @Column('int', { primary: true, name: 'CODENDINI' })
  codendini: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TgwaraEntity, (tgwaraEntity) => tgwaraEntity.tgwaxfes)
  @JoinColumn([{ name: 'NUAREA', referencedColumnName: 'nuarea' }])
  nuarea2: TgwaraEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwaxfes)
  @JoinColumn([{ name: 'CODENDINI', referencedColumnName: 'codend' }])
  codendini2: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwaxfes2)
  @JoinColumn([{ name: 'CODENDFIM', referencedColumnName: 'codend' }])
  codendfim: TgwendEntity;
}
