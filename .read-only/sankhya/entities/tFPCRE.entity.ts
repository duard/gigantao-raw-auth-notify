import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfprteEntity } from './tFPRTE.entity';

@Index('PK_TFPCRE', ['codcrirateio'], { unique: true })
@Entity('TFPCRE', { schema: 'SANKHYA' })
export class TfpcreEntity {
  @Column('smallint', { primary: true, name: 'CODCRIRATEIO' })
  codcrirateio: number;

  @Column('varchar', { name: 'DESCRRATEIO', length: 30 })
  descrrateio: string;

  @OneToMany(() => TfprteEntity, (tfprteEntity) => tfprteEntity.codcrirateio2)
  tfprtes: TfprteEntity[];
}
