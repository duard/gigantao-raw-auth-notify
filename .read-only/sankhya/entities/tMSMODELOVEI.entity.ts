import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmsmarcaveiEntity } from './tMSMARCAVEI.entity';

@Index('PK_TMSMODELOVEI', ['codmodelovei'], { unique: true })
@Entity('TMSMODELOVEI', { schema: 'SANKHYA' })
export class TmsmodeloveiEntity {
  @Column('int', { primary: true, name: 'CODMODELOVEI' })
  codmodelovei: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @ManyToOne(
    () => TmsmarcaveiEntity,
    (tmsmarcaveiEntity) => tmsmarcaveiEntity.tmsmodeloveis,
  )
  @JoinColumn([{ name: 'CODMARCAVEI', referencedColumnName: 'codmarcavei' }])
  codmarcavei: TmsmarcaveiEntity;
}
