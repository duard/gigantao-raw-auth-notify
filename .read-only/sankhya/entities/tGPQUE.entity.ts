import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqplaEntity } from './tPQPLA.entity';
import { TpqqueEntity } from './tPQQUE.entity';
import { TgpavaEntity } from './tGPAVA.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TGPQUE',
  ['nuavaliacao', 'codcargo', 'codfuncao', 'codusuavaliador'],
  { unique: true },
)
@Entity('TGPQUE', { schema: 'SANKHYA' })
export class TgpqueEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('smallint', { primary: true, name: 'CODUSUAVALIADOR' })
  codusuavaliador: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'NUAVALIACAOW', nullable: true })
  nuavaliacaow: number | null;

  @ManyToOne(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.tgpques)
  @JoinColumn([{ name: 'NUPLAAVALIADO', referencedColumnName: 'nupla' }])
  nuplaavaliado: TpqplaEntity;

  @ManyToOne(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.tgpques2)
  @JoinColumn([{ name: 'NUPLA', referencedColumnName: 'nupla' }])
  nupla: TpqplaEntity;

  @ManyToOne(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.tgpques)
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest: TpqqueEntity;

  @ManyToOne(() => TgpavaEntity, (tgpavaEntity) => tgpavaEntity.tgpques)
  @JoinColumn([{ name: 'NUAVALIACAO', referencedColumnName: 'nuavaliacao' }])
  nuavaliacao2: TgpavaEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tgpques)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao2: TfpfcoEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tgpques)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpques)
  @JoinColumn([{ name: 'CODUSUAVALIADOR', referencedColumnName: 'codusu' }])
  codusuavaliador2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpques2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
