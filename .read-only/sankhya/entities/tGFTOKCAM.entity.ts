import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftokcfgEntity } from './tGFTOKCFG.entity';

@Index('PK_TGFTOKCAM', ['codcfg', 'entidade', 'campo'], { unique: true })
@Entity('TGFTOKCAM', { schema: 'SANKHYA' })
export class TgftokcamEntity {
  @Column('smallint', { primary: true, name: 'CODCFG' })
  codcfg: number;

  @Column('varchar', { primary: true, name: 'ENTIDADE', length: 50 })
  entidade: string;

  @Column('varchar', { name: 'TABELA', length: 50 })
  tabela: string;

  @Column('varchar', { primary: true, name: 'CAMPO', length: 50 })
  campo: string;

  @Column('int', { name: 'RELEVANCIA', default: () => '(0)' })
  relevancia: number;

  @ManyToOne(
    () => TgftokcfgEntity,
    (tgftokcfgEntity) => tgftokcfgEntity.tgftokcams,
  )
  @JoinColumn([{ name: 'CODCFG', referencedColumnName: 'codcfg' }])
  codcfg2: TgftokcfgEntity;
}
