import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwarsEntity } from './tGWARS.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGWEPA', ['codemp', 'codprod'], { unique: true })
@Entity('TGWEPA', { schema: 'SANKHYA' })
export class TgwepaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @ManyToOne(() => TgwarsEntity, (tgwarsEntity) => tgwarsEntity.tgwepas)
  @JoinColumn([{ name: 'CODAREASEP', referencedColumnName: 'codareasep' }])
  codareasep: TgwarsEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwepas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwepas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
