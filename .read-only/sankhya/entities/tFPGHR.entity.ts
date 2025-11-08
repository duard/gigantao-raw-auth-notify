import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfphrgEntity } from './tFPHRG.entity';

@Index('PK_TFPGHR', ['codgrupohorario'], { unique: true })
@Entity('TFPGHR', { schema: 'SANKHYA' })
export class TfpghrEntity {
  @Column('int', { primary: true, name: 'CODGRUPOHORARIO' })
  codgrupohorario: number;

  @Column('varchar', { name: 'DESCRGRUPOHR', length: 60 })
  descrgrupohr: string;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('smallint', { name: 'QTDDIAS', default: () => '(30)' })
  qtddias: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codgrupohorario)
  tfpfuns: TfpfunEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpghrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TfphrgEntity,
    (tfphrgEntity) => tfphrgEntity.codgrupohorario2,
  )
  tfphrgs: TfphrgEntity[];
}
