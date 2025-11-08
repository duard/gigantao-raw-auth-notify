import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpperEntity } from './tFPPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGPIDA', ['nuavaliacao', 'nuavaliado', 'nuavaliador', 'codperfil'], {
  unique: true,
})
@Entity('TGPIDA', { schema: 'SANKHYA' })
export class TgpidaEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'NUAVALIADO' })
  nuavaliado: number;

  @Column('int', { primary: true, name: 'NUAVALIADOR' })
  nuavaliador: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('int', { name: 'CODGRAU' })
  codgrau: number;

  @Column('smallint', { name: 'PONTUACAO' })
  pontuacao: number;

  @Column('varchar', { name: 'OBS', length: 250 })
  obs: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgpidas)
  @JoinColumn([{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }])
  codperfil2: TfpperEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpidas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
