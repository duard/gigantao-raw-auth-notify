import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftkcfvrEntity } from './tGFTKCFVR.entity';

@Index('PK_TGFTKCAVR', ['codcfg', 'entidade', 'campo'], { unique: true })
@Entity('TGFTKCAVR', { schema: 'SANKHYA' })
export class TgftkcavrEntity {
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
    () => TgftkcfvrEntity,
    (tgftkcfvrEntity) => tgftkcfvrEntity.tgftkcavrs,
  )
  @JoinColumn([{ name: 'CODCFG', referencedColumnName: 'codcfg' }])
  codcfg2: TgftkcfvrEntity;
}
