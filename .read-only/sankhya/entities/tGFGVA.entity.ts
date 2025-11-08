import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgvcEntity } from './tGFGVC.entity';
import { TgfgveEntity } from './tGFGVE.entity';
import { TgfgvpEntity } from './tGFGVP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFGVA_NUAPURACAO', ['nuapuracao', 'nunota', 'sequencia'], {
  unique: true,
})
@Entity('TGFGVA', { schema: 'SANKHYA' })
export class TgfgvaEntity {
  @Column('int', { primary: true, name: 'NUAPURACAO' })
  nuapuracao: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('varchar', { name: 'UNIDADE', nullable: true, length: 2 })
  unidade: string | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @ManyToOne(() => TgfgvcEntity, (tgfgvcEntity) => tgfgvcEntity.tgfgvas)
  @JoinColumn([{ name: 'NUCRITERIO', referencedColumnName: 'nucriterio' }])
  nucriterio: TgfgvcEntity;

  @ManyToOne(() => TgfgveEntity, (tgfgveEntity) => tgfgveEntity.tgfgvas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUAPURACAO', referencedColumnName: 'nuapuracao' }])
  nuapuracao2: TgfgveEntity;

  @ManyToOne(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.tgfgvas)
  @JoinColumn([{ name: 'NUPREACORDO', referencedColumnName: 'nupreacordo' }])
  nupreacordo: TgfgvpEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfgvas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfgvas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
