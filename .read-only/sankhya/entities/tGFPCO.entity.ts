import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfcpdEntity } from './tGFCPD.entity';

@Index('PK_TGFPCO', ['codprod', 'codcomposicao'], { unique: true })
@Entity('TGFPCO', { schema: 'SANKHYA' })
export class TgfpcoEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODCOMPOSICAO' })
  codcomposicao: number;

  @Column('float', { name: 'PERCCOMPOSICAO', nullable: true, precision: 53 })
  perccomposicao: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpcos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfcpdEntity, (tgfcpdEntity) => tgfcpdEntity.tgfpcos)
  @JoinColumn([
    { name: 'CODCOMPOSICAO', referencedColumnName: 'codcomposicao' },
  ])
  codcomposicao2: TgfcpdEntity;
}
