import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TSIRTEF_REDE', ['rede'], { unique: true })
@Entity('TSIRTEF', { schema: 'SANKHYA' })
export class TsirtefEntity {
  @Column('varchar', { primary: true, name: 'REDE', length: 15 })
  rede: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.rede)
  tgfpars: TgfparEntity[];
}
