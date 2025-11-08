import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgflotEntity } from './tGFLOT.entity';

@Index('PK_TCIEST', ['codprod', 'titulo'], { unique: true })
@Entity('TCIEST', { schema: 'SANKHYA' })
export class TciestEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'TITULO', length: 30 })
  titulo: string;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('smallint', { name: 'TAMANHO', nullable: true })
  tamanho: number | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('text', { name: 'LISTA', nullable: true })
  lista: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tciests)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @OneToMany(() => TgflotEntity, (tgflotEntity) => tgflotEntity.tciest)
  tgflots: TgflotEntity[];
}
