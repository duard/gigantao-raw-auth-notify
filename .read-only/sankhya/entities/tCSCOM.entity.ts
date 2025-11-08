import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSCOM', ['numcontrato', 'codparc', 'codprod'], { unique: true })
@Entity('TCSCOM', { schema: 'SANKHYA' })
export class TcscomEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('money', { name: 'PERCCOM' })
  perccom: number;

  @Column('money', { name: 'VLRCOMISSAO', default: () => '(0)' })
  vlrcomissao: number;

  @Column('smallint', { name: 'PRAZOVENCTO', nullable: true })
  prazovencto: number | null;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcscoms)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcscoms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcscoms)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
