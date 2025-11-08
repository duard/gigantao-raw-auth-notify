import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfntaEntity } from './tGFNTA.entity';

@Index('PK_TGFTPA', ['codtpa'], { unique: true })
@Entity('TGFTPA', { schema: 'SANKHYA' })
export class TgftpaEntity {
  @Column('int', { primary: true, name: 'CODTPA' })
  codtpa: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('int', { name: 'MODELO', nullable: true })
  modelo: number | null;

  @Column('varchar', { name: 'CODPARCFAT', nullable: true, length: 1 })
  codparcfat: string | null;

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codtpa)
  tgfites: TgfiteEntity[];

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgftpas)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;
}
