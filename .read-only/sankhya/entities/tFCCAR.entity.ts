import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TfpcarEntity } from './tFPCAR.entity';

@Index('PK_TFCCAR', ['nucurriculo', 'codcargo'], { unique: true })
@Entity('TFCCAR', { schema: 'SANKHYA' })
export class TfccarEntity {
  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('char', { name: 'CANDIDATO', length: 1, default: () => "'N'" })
  candidato: string;

  @Column('char', { name: 'TRIAGEM', length: 1, default: () => "'N'" })
  triagem: string;

  @ManyToOne(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.tfccars)
  @JoinColumn([{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }])
  nucurriculo2: TfcbcoEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tfccars)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;
}
