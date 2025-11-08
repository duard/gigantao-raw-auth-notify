import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfpcaEntity } from './tGFPCA.entity';

@Index('PK_TGFMPC', ['numodelo'], { unique: true })
@Entity('TGFMPC', { schema: 'SANKHYA' })
export class TgfmpcEntity {
  @Column('int', { primary: true, name: 'NUMODELO' })
  numodelo: number;

  @Column('varchar', { name: 'DESCRMODELO', length: 50 })
  descrmodelo: string;

  @Column('text', { name: 'CONFIG' })
  config: string;

  @OneToMany(() => TgfpcaEntity, (tgfpcaEntity) => tgfpcaEntity.numodelo)
  tgfpcas: TgfpcaEntity[];
}
