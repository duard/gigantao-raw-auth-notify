import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfrcfEntity } from './tGFRCF.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TSIEVE', ['codevento'], { unique: true })
@Entity('TSIEVE', { schema: 'SANKHYA' })
export class TsieveEntity {
  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('char', { name: 'DESCREVENTO', length: 30 })
  descrevento: string;

  @Column('char', { name: 'GRUPO', nullable: true, length: 30 })
  grupo: string | null;

  @Column('smallint', { name: 'SINAL' })
  sinal: number;

  @OneToMany(() => TgfrcfEntity, (tgfrcfEntity) => tgfrcfEntity.codevento2)
  tgfrcfs: TgfrcfEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tsieves)
  @JoinColumn([{ name: 'CODSERV', referencedColumnName: 'codprod' }])
  codserv: TgfproEntity;
}
