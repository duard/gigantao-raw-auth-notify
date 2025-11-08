import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgpindEntity } from './tGPIND.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TGPIDC',
  [
    'nuavaliacao',
    'nuavaliado',
    'nuavaliador',
    'codcompetencia',
    'codindicador',
  ],
  { unique: true },
)
@Entity('TGPIDC', { schema: 'SANKHYA' })
export class TgpidcEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'NUAVALIADO' })
  nuavaliado: number;

  @Column('int', { primary: true, name: 'NUAVALIADOR' })
  nuavaliador: number;

  @Column('int', { primary: true, name: 'CODCOMPETENCIA' })
  codcompetencia: number;

  @Column('int', { primary: true, name: 'CODINDICADOR' })
  codindicador: number;

  @Column('int', { name: 'CODGRAU' })
  codgrau: number;

  @Column('smallint', { name: 'PONTUACAO' })
  pontuacao: number;

  @Column('varchar', { name: 'OBS', length: 250 })
  obs: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'PONTUACAOFCO', nullable: true })
  pontuacaofco: number | null;

  @Column('float', { name: 'NCCF', nullable: true, precision: 53 })
  nccf: number | null;

  @Column('int', { name: 'NIVELMAXIMO', nullable: true })
  nivelmaximo: number | null;

  @Column('int', { name: 'QTDEIND', nullable: true })
  qtdeind: number | null;

  @ManyToOne(() => TgpindEntity, (tgpindEntity) => tgpindEntity.tgpidcs)
  @JoinColumn([{ name: 'CODINDICADOR', referencedColumnName: 'codindicador' }])
  codindicador2: TgpindEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tgpidcs)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao: TfpfcoEntity;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgpidcs)
  @JoinColumn([{ name: 'CODCOMPETENCIA', referencedColumnName: 'codperfil' }])
  codcompetencia2: TfpperEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpidcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
