import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgaahpEntity } from './tGAAHP.entity';

@Index('PK_TGAAHI', ['nuapont', 'sequencia'], { unique: true })
@Entity('TGAAHI', { schema: 'SANKHYA' })
export class TgaahiEntity {
  @Column('int', { primary: true, name: 'NUAPONT' })
  nuapont: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'ENCARREGADO', nullable: true, length: 1 })
  encarregado: string | null;

  @Column('int', { name: 'ENTRADA', nullable: true })
  entrada: number | null;

  @Column('int', { name: 'SAIDA', nullable: true })
  saida: number | null;

  @Column('int', { name: 'TOTPARADA', nullable: true })
  totparada: number | null;

  @Column('int', { name: 'TEMPTOTAL', nullable: true })
  temptotal: number | null;

  @Column('float', { name: 'VLRPROD', nullable: true, precision: 53 })
  vlrprod: number | null;

  @Column('float', { name: 'VLRADIC', nullable: true, precision: 53 })
  vlradic: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'ORIMINICIO', nullable: true })
  oriminicio: number | null;

  @Column('int', { name: 'ORIMFIM', nullable: true })
  orimfim: number | null;

  @Column('float', { name: 'ODOMINICIO', nullable: true, precision: 53 })
  odominicio: number | null;

  @Column('float', { name: 'ODOMFIM', nullable: true, precision: 53 })
  odomfim: number | null;

  @Column('float', { name: 'QTDEXEC', nullable: true, precision: 53 })
  qtdexec: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('smallint', { name: 'CODEMPFUNC', nullable: true })
  codempfunc: number | null;

  @Column('int', { name: 'NUEQUIPE', nullable: true })
  nuequipe: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('varchar', { name: 'CLASSIFICACAO', nullable: true, length: 20 })
  classificacao: string | null;

  @Column('int', { name: 'CODFUNCAO', nullable: true })
  codfuncao: number | null;

  @Column('varchar', { name: 'EMPREGADO', nullable: true, length: 40 })
  empregado: string | null;

  @Column('char', { name: 'TIPOMEMBRO', nullable: true, length: 1 })
  tipomembro: string | null;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgaahis)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgaahis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgaahis)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgaahis)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgaahis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgaahpEntity, (tgaahpEntity) => tgaahpEntity.tgaahi)
  tgaahps: TgaahpEntity[];
}
