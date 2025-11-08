import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFDFO', ['codemp', 'codgrupoprod', 'codprod'], { unique: true })
@Entity('TGFDFO', { schema: 'SANKHYA' })
export class TgfdfoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('money', { name: 'VLRDESC' })
  vlrdesc: number;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfdfos)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdfos)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
