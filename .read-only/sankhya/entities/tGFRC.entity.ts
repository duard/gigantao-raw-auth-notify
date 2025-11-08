import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFRC', ['nurem'], { unique: true })
@Entity('TGFRC', { schema: 'SANKHYA' })
export class TgfrcEntity {
  @Column('int', { primary: true, name: 'NUREM' })
  nurem: number;

  @Column('decimal', {
    name: 'CODLAYOUT',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codlayout: number | null;

  @Column('int', { name: 'NUREMESSA', nullable: true })
  nuremessa: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('varchar', { name: 'ARQUIVO', nullable: true, length: 100 })
  arquivo: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfrcs)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfrcs)
  tgffins: TgffinEntity[];
}
