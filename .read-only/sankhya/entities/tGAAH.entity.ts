import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgaicpEntity } from './tGAICP.entity';
import { TgamaaEntity } from './tGAMAA.entity';
import { TgampaEntity } from './tGAMPA.entity';

@Index('PK_TGAAH', ['nuapont'], { unique: true })
@Index('TGAAH_I01', ['nunota'], {})
@Entity('TGAAH', { schema: 'SANKHYA' })
export class TgaahEntity {
  @Column('int', { primary: true, name: 'NUAPONT' })
  nuapont: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('varchar', { name: 'TIPAPONT', nullable: true, length: 1 })
  tipapont: string | null;

  @Column('float', {
    name: 'QTDREF',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdref: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('float', { name: 'AREA', precision: 53, default: () => '(0)' })
  area: number;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgaahs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgaahs2)
  @JoinColumn([{ name: 'CODEMPFUNC', referencedColumnName: 'codemp' }])
  codempfunc: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgaahs)
  @JoinColumn([{ name: 'CODPARCALIM', referencedColumnName: 'codparc' }])
  codparcalim: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgaahs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tgaahs)
  @JoinColumn([
    { name: 'CODEMPFUNC', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.tgaahs)
  @JoinColumn([{ name: 'NUMEQ', referencedColumnName: 'numeq' }])
  numeq: TgfmeqEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgaahs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgaahs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgaicpEntity, (tgaicpEntity) => tgaicpEntity.nuapont2)
  tgaicps: TgaicpEntity[];

  @OneToMany(() => TgamaaEntity, (tgamaaEntity) => tgamaaEntity.nuapont2)
  tgamaas: TgamaaEntity[];

  @OneToMany(() => TgampaEntity, (tgampaEntity) => tgampaEntity.nuapont2)
  tgampas: TgampaEntity[];
}
