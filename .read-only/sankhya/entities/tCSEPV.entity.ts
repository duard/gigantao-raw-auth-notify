import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsiteEntity } from './tCSITE.entity';

@Index('PK_TCSEPV', ['codepv'], { unique: true })
@Entity('TCSEPV', { schema: 'SANKHYA' })
export class TcsepvEntity {
  @Column('smallint', { primary: true, name: 'CODEPV' })
  codepv: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('float', { name: 'PERCPRO', nullable: true, precision: 53 })
  percpro: number | null;

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.codepv)
  tcsites: TcsiteEntity[];
}
