import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfpapEntity } from './tGFPAP.entity';
import { TgfhupEntity } from './tGFHUP.entity';

@Index('PK_TGFHPP', ['codparc', 'codprod', 'codhup', 'sequencia'], {
  unique: true,
})
@Entity('TGFHPP', { schema: 'SANKHYA' })
export class TgfhppEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODHUP' })
  codhup: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @ManyToOne(() => TgfpapEntity, (tgfpapEntity) => tgfpapEntity.tgfhpps)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfpap: TgfpapEntity;

  @ManyToOne(() => TgfhupEntity, (tgfhupEntity) => tgfhupEntity.tgfhpps)
  @JoinColumn([{ name: 'CODHUP', referencedColumnName: 'codhup' }])
  codhup2: TgfhupEntity;
}
