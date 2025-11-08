import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgaahEntity } from './tGAAH.entity';

@Index('PK_TGAICP', ['nuapont', 'codprod'], { unique: true })
@Entity('TGAICP', { schema: 'SANKHYA' })
export class TgaicpEntity {
  @Column('int', { primary: true, name: 'NUAPONT' })
  nuapont: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'MUDAS', default: () => '(0)' })
  mudas: number;

  @Column('float', { name: 'ESPACAMENTO', nullable: true, precision: 53 })
  espacamento: number | null;

  @Column('float', { name: 'REFUGO', nullable: true, precision: 53 })
  refugo: number | null;

  @Column('int', { name: 'QTDUTILIZADA', nullable: true })
  qtdutilizada: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgaicps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgaahEntity, (tgaahEntity) => tgaahEntity.tgaicps)
  @JoinColumn([{ name: 'NUAPONT', referencedColumnName: 'nuapont' }])
  nuapont2: TgaahEntity;
}
