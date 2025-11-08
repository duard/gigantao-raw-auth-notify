import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwarcEntity } from './tGWARC.entity';

@Index('PK_TGWUAC', ['codareaconf', 'codusuconf'], { unique: true })
@Entity('TGWUAC', { schema: 'SANKHYA' })
export class TgwuacEntity {
  @Column('int', { primary: true, name: 'CODAREACONF' })
  codareaconf: number;

  @Column('int', { primary: true, name: 'CODUSUCONF' })
  codusuconf: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TgwarcEntity, (tgwarcEntity) => tgwarcEntity.tgwuacs)
  @JoinColumn([{ name: 'CODAREACONF', referencedColumnName: 'codareaconf' }])
  codareaconf2: TgwarcEntity;
}
