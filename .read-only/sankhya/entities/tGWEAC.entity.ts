import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwendEntity } from './tGWEND.entity';
import { TgwarcEntity } from './tGWARC.entity';

@Index('PK_TGWEAC', ['codareaconf', 'codendini'], { unique: true })
@Entity('TGWEAC', { schema: 'SANKHYA' })
export class TgweacEntity {
  @Column('int', { primary: true, name: 'CODAREACONF' })
  codareaconf: number;

  @Column('int', { primary: true, name: 'CODENDINI' })
  codendini: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgweacs)
  @JoinColumn([{ name: 'CODENDFIM', referencedColumnName: 'codend' }])
  codendfim: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgweacs2)
  @JoinColumn([{ name: 'CODENDINI', referencedColumnName: 'codend' }])
  codendini2: TgwendEntity;

  @ManyToOne(() => TgwarcEntity, (tgwarcEntity) => tgwarcEntity.tgweacs)
  @JoinColumn([{ name: 'CODAREACONF', referencedColumnName: 'codareaconf' }])
  codareaconf2: TgwarcEntity;
}
