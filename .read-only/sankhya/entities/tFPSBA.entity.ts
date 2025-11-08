import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpsbafEntity } from './tFPSBAF.entity';

@Index('PK_TFPSBA', ['codsobreaviso'], { unique: true })
@Entity('TFPSBA', { schema: 'SANKHYA' })
export class TfpsbaEntity {
  @Column('int', { primary: true, name: 'CODSOBREAVISO' })
  codsobreaviso: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 100 })
  observacao: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODGRUPO', nullable: true })
  codgrupo: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpsbas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TfpsbafEntity,
    (tfpsbafEntity) => tfpsbafEntity.codsobreaviso2,
  )
  tfpsbafs: TfpsbafEntity[];
}
