import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfppubEntity } from './tFPPUB.entity';

@Index('PK_TFPDIV', ['coddiv'], { unique: true })
@Entity('TFPDIV', { schema: 'SANKHYA' })
export class TfpdivEntity {
  @Column('smallint', { primary: true, name: 'CODDIV' })
  coddiv: number;

  @Column('char', { name: 'DESCRDIV', length: 40 })
  descrdiv: string;

  @OneToMany(() => TfppubEntity, (tfppubEntity) => tfppubEntity.coddiv)
  tfppubs: TfppubEntity[];
}
