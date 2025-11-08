import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpeveEntity } from './tFPEVE.entity';

@Index('PK_TFPAUT', ['tipreg', 'chave', 'sequencia'], { unique: true })
@Entity('TFPAUT', { schema: 'SANKHYA' })
export class TfpautEntity {
  @Column('char', {
    primary: true,
    name: 'TIPREG',
    length: 1,
    default: () => "'N'",
  })
  tipreg: string;

  @Column('char', { primary: true, name: 'CHAVE', length: 15 })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'DESCRPAR', length: 20 })
  descrpar: string;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpauts)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento: TfpeveEntity;
}
