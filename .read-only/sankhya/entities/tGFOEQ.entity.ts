import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TcsiteEntity } from './tCSITE.entity';
import { TgftipEntity } from './tGFTIP.entity';

@Index('PK_TGFOEQ', ['numos', 'numitem', 'numeq'], { unique: true })
@Entity('TGFOEQ', { schema: 'SANKHYA' })
export class TgfoeqEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('int', { primary: true, name: 'NUMEQ' })
  numeq: number;

  @Column('float', { name: 'MEDICAO', nullable: true, precision: 53 })
  medicao: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfoeqs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.tgfoeqs)
  @JoinColumn([{ name: 'NUMEQ', referencedColumnName: 'numeq' }])
  numeq2: TgfmeqEntity;

  @ManyToOne(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.tgfoeqs)
  @JoinColumn([
    { name: 'NUMOS', referencedColumnName: 'numos' },
    { name: 'NUMITEM', referencedColumnName: 'numitem' },
  ])
  tcsite: TcsiteEntity;

  @ManyToOne(() => TgftipEntity, (tgftipEntity) => tgftipEntity.tgfoeqs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODTIP', referencedColumnName: 'codtip' }])
  codtip: TgftipEntity;
}
