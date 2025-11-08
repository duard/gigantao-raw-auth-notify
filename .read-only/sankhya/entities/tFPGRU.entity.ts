import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpgruperEntity } from './tFPGRUPER.entity';
import { TfppgeEntity } from './tFPPGE.entity';

@Index('PK_TFPGRU', ['codgru'], { unique: true })
@Entity('TFPGRU', { schema: 'SANKHYA' })
export class TfpgruEntity {
  @Column('smallint', { primary: true, name: 'CODGRU' })
  codgru: number;

  @Column('varchar', { name: 'NOMEGRU', nullable: true, length: 30 })
  nomegru: string | null;

  @OneToMany(
    () => TfpgruperEntity,
    (tfpgruperEntity) => tfpgruperEntity.codgru2,
  )
  tfpgrupers: TfpgruperEntity[];

  @OneToMany(() => TfppgeEntity, (tfppgeEntity) => tfppgeEntity.codgru2)
  tfppges: TfppgeEntity[];
}
