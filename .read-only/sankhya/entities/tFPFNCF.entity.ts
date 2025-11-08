import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpregcalcEntity } from './tFPREGCALC.entity';

@Index('PK_TFPFNCF', ['codregcalc', 'dtdesconsidera'], { unique: true })
@Entity('TFPFNCF', { schema: 'SANKHYA' })
export class TfpfncfEntity {
  @Column('smallint', { primary: true, name: 'CODREGCALC' })
  codregcalc: number;

  @Column('datetime', { primary: true, name: 'DTDESCONSIDERA' })
  dtdesconsidera: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 50 })
  observacao: string | null;

  @Column('varchar', { name: 'RECORRENTE', length: 1, default: () => "'N'" })
  recorrente: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('datetime', { name: 'DTINATIVACAO', nullable: true })
  dtinativacao: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfncfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.tfpfncfs,
  )
  @JoinColumn([{ name: 'CODREGCALC', referencedColumnName: 'codregcalc' }])
  codregcalc2: TfpregcalcEntity;
}
