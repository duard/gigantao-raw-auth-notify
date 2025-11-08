import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGPAVD', ['nuavaliacao', 'nuavaliado'], { unique: true })
@Index('TGPAVD_I01', ['nuavaliacao', 'codemp', 'codfunc'], { unique: true })
@Entity('TGPAVD', { schema: 'SANKHYA' })
export class TgpavdEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'NUAVALIADO' })
  nuavaliado: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'CODCARGO', nullable: true })
  codcargo: number | null;

  @Column('int', { name: 'CODFUNCAO', nullable: true })
  codfuncao: number | null;

  @Column('int', { name: 'CODNIVEL', nullable: true })
  codnivel: number | null;

  @Column('char', { name: 'STEP', nullable: true, length: 1 })
  step: string | null;

  @Column('float', { name: 'NOTAAVALIADO', nullable: true, precision: 53 })
  notaavaliado: number | null;

  @Column('float', { name: 'NOTAAVALIADOR', nullable: true, precision: 53 })
  notaavaliador: number | null;

  @Column('float', { name: 'NOTACONSENSO', nullable: true, precision: 53 })
  notaconsenso: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tgpavds)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tgpavds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpavds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
