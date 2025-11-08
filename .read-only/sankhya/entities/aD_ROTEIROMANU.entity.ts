import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AdItensroteiroEntity } from './aD_ITENSROTEIRO.entity';

@Index('PK_AD_ROTEIROMANU', ['codroteiro'], { unique: true })
@Entity('AD_ROTEIROMANU', { schema: 'SANKHYA' })
export class AdRoteiromanuEntity {
  @Column('int', { primary: true, name: 'CODROTEIRO' })
  codroteiro: number;

  @Column('varchar', { name: 'DESCRROTEIRO', nullable: true, length: 100 })
  descrroteiro: string | null;

  @Column('varchar', { name: 'REVISAO', nullable: true, length: 100 })
  revisao: string | null;

  @Column('varchar', { name: 'NOTA', nullable: true, length: 100 })
  nota: string | null;

  @OneToMany(
    () => AdItensroteiroEntity,
    (adItensroteiroEntity) => adItensroteiroEntity.codroteiro2,
  )
  adItensroteiros: AdItensroteiroEntity[];
}
