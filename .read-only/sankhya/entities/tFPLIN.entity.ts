import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpvalEntity } from './tFPVAL.entity';

@Index('PK_TFPLIN', ['codlinha'], { unique: true })
@Index('TFPLIN_I01', ['tipo', 'codlinha'], {})
@Entity('TFPLIN', { schema: 'SANKHYA' })
export class TfplinEntity {
  @Column('smallint', { primary: true, name: 'CODLINHA' })
  codlinha: number;

  @Column('char', { name: 'DESCRLINHA', length: 20 })
  descrlinha: string;

  @Column('float', { name: 'VLRTARIFA', precision: 53 })
  vlrtarifa: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'T'" })
  tipo: string;

  @OneToMany(() => TfpvalEntity, (tfpvalEntity) => tfpvalEntity.codlinha2)
  tfpvals: TfpvalEntity[];
}
