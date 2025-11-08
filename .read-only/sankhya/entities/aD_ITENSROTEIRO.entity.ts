import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { AdRoteiromanuEntity } from './aD_ROTEIROMANU.entity';

@Index('PK_AD_ITENSROTEIRO', ['codroteiro', 'iditens'], { unique: true })
@Entity('AD_ITENSROTEIRO', { schema: 'SANKHYA' })
export class AdItensroteiroEntity {
  @Column('int', { primary: true, name: 'CODROTEIRO' })
  codroteiro: number;

  @Column('int', { primary: true, name: 'IDITENS' })
  iditens: number;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'TIPOA', nullable: true, length: 10 })
  tipoa: string | null;

  @Column('varchar', { name: 'TIPOB', nullable: true, length: 10 })
  tipob: string | null;

  @Column('varchar', { name: 'TIPOC', nullable: true, length: 10 })
  tipoc: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.adItensroteiros)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(
    () => AdRoteiromanuEntity,
    (adRoteiromanuEntity) => adRoteiromanuEntity.adItensroteiros,
  )
  @JoinColumn([{ name: 'CODROTEIRO', referencedColumnName: 'codroteiro' }])
  codroteiro2: AdRoteiromanuEntity;
}
