import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TgptarEntity } from './tGPTAR.entity';
import { TgpindEntity } from './tGPIND.entity';

@Index('PK_TGPICP', ['codindicador', 'codcompetencia', 'dtinicio'], {
  unique: true,
})
@Entity('TGPICP', { schema: 'SANKHYA' })
export class TgpicpEntity {
  @Column('int', { primary: true, name: 'CODINDICADOR' })
  codindicador: number;

  @Column('int', { primary: true, name: 'CODCOMPETENCIA' })
  codcompetencia: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpicps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgpicps)
  @JoinColumn([{ name: 'CODCOMPETENCIA', referencedColumnName: 'codperfil' }])
  codcompetencia2: TfpperEntity;

  @ManyToOne(() => TgptarEntity, (tgptarEntity) => tgptarEntity.tgpicps)
  @JoinColumn([{ name: 'CODTAREFA', referencedColumnName: 'codtarefa' }])
  codtarefa: TgptarEntity;

  @ManyToOne(() => TgpindEntity, (tgpindEntity) => tgpindEntity.tgpicps)
  @JoinColumn([{ name: 'CODINDICADOR', referencedColumnName: 'codindicador' }])
  codindicador2: TgpindEntity;
}
