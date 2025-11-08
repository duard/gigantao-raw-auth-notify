import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcfoEntity } from './tGFCFO.entity';

@Index('PK_TGFCLCAT42', ['codcfo', 'sequencia'], { unique: true })
@Entity('TGFCLCAT42', { schema: 'SANKHYA' })
export class Tgfclcat42Entity {
  @Column('int', { primary: true, name: 'CODCFO' })
  codcfo: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('char', { name: 'CLASSIFICMS', nullable: true, length: 1 })
  classificms: string | null;

  @Column('smallint', { name: 'CODLEGAL' })
  codlegal: number;

  @Column('smallint', { name: 'NUFOP', nullable: true })
  nufop: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgfclcats, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCFO', referencedColumnName: 'codcfo' }])
  codcfo2: TgfcfoEntity;
}
