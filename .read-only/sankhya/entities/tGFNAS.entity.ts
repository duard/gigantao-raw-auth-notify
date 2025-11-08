import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgftnaEntity } from './tGFTNA.entity';

@Index('PK_TGFNAS', ['codnatoper', 'sequencia'], { unique: true })
@Entity('TGFNAS', { schema: 'SANKHYA' })
export class TgfnasEntity {
  @Column('varchar', { primary: true, name: 'CODNATOPER', length: 10 })
  codnatoper: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODMUNFIS' })
  codmunfis: number;

  @Column('varchar', { name: 'DESCRNATOPER', nullable: true, length: 160 })
  descrnatoper: string | null;

  @OneToMany(() => TgftnaEntity, (tgftnaEntity) => tgftnaEntity.tgfnas)
  tgftnas: TgftnaEntity[];
}
