import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqperEntity } from './tPQPER.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TgpindEntity } from './tGPIND.entity';
import { TgpescEntity } from './tGPESC.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGPPER', ['codperfil', 'codindicador', 'codescala'], {
  unique: true,
})
@Entity('TGPPER', { schema: 'SANKHYA' })
export class TgpperEntity {
  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('int', { primary: true, name: 'CODINDICADOR' })
  codindicador: number;

  @Column('int', { primary: true, name: 'CODESCALA' })
  codescala: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TpqperEntity, (tpqperEntity) => tpqperEntity.tgppers)
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg: TpqperEntity;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgppers)
  @JoinColumn([{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }])
  codperfil2: TfpperEntity;

  @ManyToOne(() => TgpindEntity, (tgpindEntity) => tgpindEntity.tgppers)
  @JoinColumn([{ name: 'CODINDICADOR', referencedColumnName: 'codindicador' }])
  codindicador2: TgpindEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tgppers)
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala2: TgpescEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgppers)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
