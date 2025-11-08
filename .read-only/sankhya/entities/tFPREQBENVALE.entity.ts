import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpreqbenEntity } from './tFPREQBEN.entity';

@Index('PK_TFPREQBENVALE', ['id'], { unique: true })
@Entity('TFPREQBENVALE', { schema: 'SANKHYA' })
export class TfpreqbenvaleEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'CODLINHA' })
  codlinha: number;

  @Column('float', { name: 'VLRTARIFA', precision: 53 })
  vlrtarifa: number;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'QTDDIAS', precision: 53 })
  qtddias: number;

  @Column('int', { name: 'PASSESDIA' })
  passesdia: number;

  @Column('varchar', {
    name: 'MANTEMPROXIMAREF',
    length: 1,
    default: () => "'S'",
  })
  mantemproximaref: string;

  @Column('varchar', { name: 'TIPOVALE', length: 1 })
  tipovale: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(
    () => TfpreqbenEntity,
    (tfpreqbenEntity) => tfpreqbenEntity.tfpreqbenvales,
  )
  @JoinColumn([{ name: 'REQBENID', referencedColumnName: 'id' }])
  reqben: TfpreqbenEntity;
}
