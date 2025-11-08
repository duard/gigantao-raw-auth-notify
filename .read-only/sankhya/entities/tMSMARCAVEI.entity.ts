import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TmsmodeloveiEntity } from './tMSMODELOVEI.entity';

@Index('PK_TMSMARCAVEI', ['codmarcavei'], { unique: true })
@Entity('TMSMARCAVEI', { schema: 'SANKHYA' })
export class TmsmarcaveiEntity {
  @Column('int', { primary: true, name: 'CODMARCAVEI' })
  codmarcavei: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @OneToMany(
    () => TmsmodeloveiEntity,
    (tmsmodeloveiEntity) => tmsmodeloveiEntity.codmarcavei,
  )
  tmsmodeloveis: TmsmodeloveiEntity[];
}
