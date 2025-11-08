import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgpdesEntity } from './tGPDES.entity';
import { TgpindEntity } from './tGPIND.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TGPIDE',
  ['nuavaliacao', 'nuavaliado', 'codperfil', 'nuavaliador', 'codindicador'],
  {
    unique: true,
  },
)
@Entity('TGPIDE', { schema: 'SANKHYA' })
export class TgpideEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'NUAVALIADO' })
  nuavaliado: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('int', { primary: true, name: 'NUAVALIADOR' })
  nuavaliador: number;

  @Column('int', { primary: true, name: 'CODINDICADOR' })
  codindicador: number;

  @Column('int', { name: 'CODGRAU' })
  codgrau: number;

  @Column('smallint', { name: 'PONTUACAO' })
  pontuacao: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgpdesEntity, (tgpdesEntity) => tgpdesEntity.tgpides)
  @JoinColumn([
    { name: 'NUAVALIACAO', referencedColumnName: 'nuavaliacao' },
    { name: 'NUAVALIADO', referencedColumnName: 'nuavaliado' },
    { name: 'CODPERFIL', referencedColumnName: 'codperfil' },
  ])
  tgpdes: TgpdesEntity;

  @ManyToOne(() => TgpindEntity, (tgpindEntity) => tgpindEntity.tgpides)
  @JoinColumn([{ name: 'CODINDICADOR', referencedColumnName: 'codindicador' }])
  codindicador2: TgpindEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpides)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
