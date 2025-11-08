import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpcomEntity } from './tFPCOM.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TFPGPS', ['referencia', 'codemp', 'codparc', 'sequencia'], {
  unique: true,
})
@Entity('TFPGPS', { schema: 'SANKHYA' })
export class TfpgpsEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('money', { name: 'CREDITO', nullable: true })
  credito: number | null;

  @Column('money', { name: 'SALDO', nullable: true })
  saldo: number | null;

  @Column('money', { name: 'DEBITO', nullable: true })
  debito: number | null;

  @Column('float', { name: 'VLRDIGITADO', nullable: true, precision: 53 })
  vlrdigitado: number | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 200 })
  observacao: string | null;

  @Column('float', { name: 'DEBITODECTERC', nullable: true, precision: 53 })
  debitodecterc: number | null;

  @Column('float', { name: 'DEBCOMPLEMENTAR', nullable: true, precision: 53 })
  debcomplementar: number | null;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpgps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpcomEntity, (tfpcomEntity) => tfpcomEntity.tfpgps, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([
    { name: 'NUCOMPENSACAO', referencedColumnName: 'nucompensacao' },
  ])
  nucompensacao: TfpcomEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpgps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tfpgps, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tfpgps2)
  @JoinColumn([{ name: 'NUFINCOMPLEMENTAR', referencedColumnName: 'nufin' }])
  nufincomplementar: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tfpgps3)
  @JoinColumn([{ name: 'NUFINDECTERC', referencedColumnName: 'nufin' }])
  nufindecterc: TgffinEntity;
}
