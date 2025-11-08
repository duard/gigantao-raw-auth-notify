import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfcbcoEntity } from './tFCBCO.entity';

@Index('PK_TFCDEP', ['nucurriculo', 'sequencia'], { unique: true })
@Entity('TFCDEP', { schema: 'SANKHYA' })
export class TfcdepEntity {
  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'GRAUPARENTESCO' })
  grauparentesco: number;

  @Column('datetime', { name: 'DTNASC' })
  dtnasc: Date;

  @Column('char', { name: 'SEXO', length: 1, default: () => "'M'" })
  sexo: string;

  @ManyToOne(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.tfcdeps)
  @JoinColumn([{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }])
  nucurriculo2: TfcbcoEntity;
}
