import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgaahEntity } from './tGAAH.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TGAMPA', ['nuapont', 'codprod', 'codfunc'], { unique: true })
@Entity('TGAMPA', { schema: 'SANKHYA' })
export class TgampaEntity {
  @Column('int', { primary: true, name: 'NUAPONT' })
  nuapont: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('float', { name: 'META', precision: 53, default: () => '(0)' })
  meta: number;

  @Column('float', { name: 'VLRBONUS', precision: 53, default: () => '(0)' })
  vlrbonus: number;

  @Column('varchar', { name: 'TIPOMEMBRO', nullable: true, length: 1 })
  tipomembro: string | null;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgampas)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgampas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgaahEntity, (tgaahEntity) => tgaahEntity.tgampas)
  @JoinColumn([{ name: 'NUAPONT', referencedColumnName: 'nuapont' }])
  nuapont2: TgaahEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgampas)
  @JoinColumn([{ name: 'CODEMPFUNC', referencedColumnName: 'codemp' }])
  codempfunc: TsiempEntity;
}
