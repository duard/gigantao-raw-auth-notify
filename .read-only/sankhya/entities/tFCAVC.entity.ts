import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TfcavaEntity } from './tFCAVA.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TFCAVC',
  ['nucurriculo', 'codavaliacao', 'dtavaliacao', 'codusuavaliacao'],
  {
    unique: true,
  },
)
@Entity('TFCAVC', { schema: 'SANKHYA' })
export class TfcavcEntity {
  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('int', { primary: true, name: 'CODAVALIACAO' })
  codavaliacao: number;

  @Column('datetime', { primary: true, name: 'DTAVALIACAO' })
  dtavaliacao: Date;

  @Column('smallint', { primary: true, name: 'CODUSUAVALIACAO' })
  codusuavaliacao: number;

  @ManyToOne(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.tfcavcs)
  @JoinColumn([{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }])
  nucurriculo2: TfcbcoEntity;

  @ManyToOne(() => TfcavaEntity, (tfcavaEntity) => tfcavaEntity.tfcavcs)
  @JoinColumn([{ name: 'CODAVALIACAO', referencedColumnName: 'codavaliacao' }])
  codavaliacao2: TfcavaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfcavcs)
  @JoinColumn([{ name: 'CODUSUAVALIACAO', referencedColumnName: 'codusu' }])
  codusuavaliacao2: TsiusuEntity;
}
