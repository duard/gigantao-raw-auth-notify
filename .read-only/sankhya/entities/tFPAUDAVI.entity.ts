import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpaudEntity } from './tFPAUD.entity';
import { TfpaudlogEntity } from './tFPAUDLOG.entity';

@Index('PK_TFPAUDAVI', ['codaviso'], { unique: true })
@Entity('TFPAUDAVI', { schema: 'SANKHYA' })
export class TfpaudaviEntity {
  @Column('smallint', { primary: true, name: 'CODAVISO' })
  codaviso: number;

  @Column('varchar', { name: 'DESCRAVISO', length: 255 })
  descraviso: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TfpaudEntity, (tfpaudEntity) => tfpaudEntity.codaviso2)
  tfpauds: TfpaudEntity[];

  @OneToMany(
    () => TfpaudlogEntity,
    (tfpaudlogEntity) => tfpaudlogEntity.codaviso,
  )
  tfpaudlogs: TfpaudlogEntity[];
}
