import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfrrcEntity } from './tGFRRC.entity';

@Index('PK_TGFCRC', ['nuarc', 'seqreg', 'seqcampo'], { unique: true })
@Entity('TGFCRC', { schema: 'SANKHYA' })
export class TgfcrcEntity {
  @Column('int', { primary: true, name: 'NUARC' })
  nuarc: number;

  @Column('smallint', { primary: true, name: 'SEQREG' })
  seqreg: number;

  @Column('smallint', { primary: true, name: 'SEQCAMPO' })
  seqcampo: number;

  @Column('varchar', { name: 'CAMPO', length: 50 })
  campo: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { name: 'INICIO', nullable: true })
  inicio: number | null;

  @Column('smallint', { name: 'LARGURA', nullable: true })
  largura: number | null;

  @Column('varchar', { name: 'MASCARA', nullable: true, length: 50 })
  mascara: string | null;

  @Column('varchar', { name: 'VALORIDENT', nullable: true, length: 50 })
  valorident: string | null;

  @ManyToOne(() => TgfrrcEntity, (tgfrrcEntity) => tgfrrcEntity.tgfcrcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUARC', referencedColumnName: 'nuarc' },
    { name: 'SEQREG', referencedColumnName: 'seqreg' },
  ])
  tgfrrc: TgfrrcEntity;
}
