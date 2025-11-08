import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfsteEntity } from './tGFSTE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFTER', ['codter'], { unique: true })
@Entity('TGFTER', { schema: 'SANKHYA' })
export class TgfterEntity {
  @Column('int', { primary: true, name: 'CODTER' })
  codter: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('datetime', { name: 'DTEXE', nullable: true })
  dtexe: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codter)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfsteEntity, (tgfsteEntity) => tgfsteEntity.codter2)
  tgfstes: TgfsteEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfters)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
