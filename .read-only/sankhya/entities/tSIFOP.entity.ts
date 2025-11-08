import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiforEntity } from './tSIFOR.entity';

@Index('PK_TSIFOP', ['tipform', 'codform', 'tabela', 'codchave'], {
  unique: true,
})
@Entity('TSIFOP', { schema: 'SANKHYA' })
export class TsifopEntity {
  @Column('char', { primary: true, name: 'TIPFORM', length: 1 })
  tipform: string;

  @Column('smallint', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('char', { primary: true, name: 'TABELA', length: 6 })
  tabela: string;

  @Column('int', { primary: true, name: 'CODCHAVE' })
  codchave: number;

  @Column('char', { name: 'TIPLANCPLA', nullable: true, length: 1 })
  tiplancpla: string | null;

  @Column('smallint', { name: 'CODEMPPLA', nullable: true })
  codemppla: number | null;

  @ManyToOne(() => TsiforEntity, (tsiforEntity) => tsiforEntity.tsifops, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'TIPFORM', referencedColumnName: 'tipform' },
    { name: 'CODFORM', referencedColumnName: 'codform' },
  ])
  tsifor: TsiforEntity;
}
