import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpperEntity } from './tFPPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgpescEntity } from './tGPESC.entity';

@Index('PK_TGPDPC', ['nuavaliacao', 'nuavaliado', 'codcompetencia'], {
  unique: true,
})
@Entity('TGPDPC', { schema: 'SANKHYA' })
export class TgpdpcEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'NUAVALIADO' })
  nuavaliado: number;

  @Column('int', { primary: true, name: 'CODCOMPETENCIA' })
  codcompetencia: number;

  @Column('int', { name: 'QTDEIND' })
  qtdeind: number;

  @Column('float', { name: 'PESOIND', precision: 53 })
  pesoind: number;

  @Column('float', { name: 'NCF', precision: 53 })
  ncf: number;

  @Column('float', { name: 'PONTUACAO', precision: 53 })
  pontuacao: number;

  @Column('float', { name: 'NCCO', precision: 53 })
  ncco: number;

  @Column('float', { name: 'NCCF', precision: 53 })
  nccf: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('float', { name: 'MEDIA', nullable: true, precision: 53 })
  media: number | null;

  @Column('int', { name: 'NIVELMAXIMO', nullable: true })
  nivelmaximo: number | null;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgpdpcs)
  @JoinColumn([{ name: 'CODCOMPETENCIA', referencedColumnName: 'codperfil' }])
  codcompetencia2: TfpperEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpdpcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tgpdpcs)
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala: TgpescEntity;
}
