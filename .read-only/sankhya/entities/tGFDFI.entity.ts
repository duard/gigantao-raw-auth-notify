import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdfaEntity } from './tGFDFA.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfdfpEntity } from './tGFDFP.entity';

@Index('PK_TGFDFI', ['coddesc'], { unique: true })
@Entity('TGFDFI', { schema: 'SANKHYA' })
export class TgfdfiEntity {
  @Column('int', { primary: true, name: 'CODDESC' })
  coddesc: number;

  @Column('char', { name: 'DESCRDESC', length: 40 })
  descrdesc: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TgfdfaEntity, (tgfdfaEntity) => tgfdfaEntity.coddesc2)
  tgfdfas: TgfdfaEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfdfis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfdfpEntity, (tgfdfpEntity) => tgfdfpEntity.coddesc2)
  tgfdfps: TgfdfpEntity[];
}
