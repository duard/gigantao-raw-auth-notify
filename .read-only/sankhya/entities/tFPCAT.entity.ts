import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';

@Index('PK_TFPCAT', ['codcateg'], { unique: true })
@Entity('TFPCAT', { schema: 'SANKHYA' })
export class TfpcatEntity {
  @Column('smallint', { primary: true, name: 'CODCATEG' })
  codcateg: number;

  @Column('char', { name: 'DESCRCATEG', length: 40 })
  descrcateg: string;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codcateg)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.codcateg)
  tfphfus: TfphfuEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.codcateg,
  )
  tfpreqadms: TfpreqadmEntity[];
}
