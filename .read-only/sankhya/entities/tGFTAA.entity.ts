import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcfoEntity } from './tGFCFO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFTAA', ['codcfo', 'codemp', 'codigo'], { unique: true })
@Entity('TGFTAA', { schema: 'SANKHYA' })
export class TgftaaEntity {
  @Column('int', { primary: true, name: 'CODCFO' })
  codcfo: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('float', { name: 'PERC', precision: 53 })
  perc: number;

  @Column('char', { name: 'TEXTO', nullable: true, length: 255 })
  texto: string | null;

  @Column('int', { name: 'TIPAJUSTE', default: () => '(9999)' })
  tipajuste: number;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgftaas)
  @JoinColumn([{ name: 'CODCFO', referencedColumnName: 'codcfo' }])
  codcfo2: TgfcfoEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgftaas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
