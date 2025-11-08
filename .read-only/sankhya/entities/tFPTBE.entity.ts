import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpreqbenEntity } from './tFPREQBEN.entity';

@Index('PK_TFPTBE', ['codtbe'], { unique: true })
@Entity('TFPTBE', { schema: 'SANKHYA' })
export class TfptbeEntity {
  @Column('int', { primary: true, name: 'CODTBE' })
  codtbe: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('smallint', { name: 'TIPO', nullable: true })
  tipo: number | null;

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codtbe)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpreqbenEntity, (tfpreqbenEntity) => tfpreqbenEntity.codtbe)
  tfpreqbens: TfpreqbenEntity[];
}
