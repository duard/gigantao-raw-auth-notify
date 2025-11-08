import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpperEntity } from './tFPPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgpescEntity } from './tGPESC.entity';

@Index('PK_TGPDPA', ['nuavaliacao', 'nuavaliado', 'codperfil'], {
  unique: true,
})
@Entity('TGPDPA', { schema: 'SANKHYA' })
export class TgpdpaEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'NUAVALIADO' })
  nuavaliado: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('float', { name: 'PONTUACAO', precision: 53 })
  pontuacao: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgpdpas)
  @JoinColumn([{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }])
  codperfil2: TfpperEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpdpas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tgpdpas)
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala: TgpescEntity;
}
