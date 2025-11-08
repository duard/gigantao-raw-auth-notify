import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfageEntity } from './tGFAGE.entity';
import { TgfoeqEntity } from './tGFOEQ.entity';
import { TgfsolEntity } from './tGFSOL.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFTIP', ['codtip'], { unique: true })
@Entity('TGFTIP', { schema: 'SANKHYA' })
export class TgftipEntity {
  @Column('int', { primary: true, name: 'CODTIP' })
  codtip: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 1 })
  origem: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('varchar', {
    name: 'CORFONTE',
    length: 10,
    default: () => "'CLBLACK'",
  })
  corfonte: string;

  @Column('varchar', {
    name: 'CORFUNDO',
    length: 10,
    default: () => "'CLWHITE'",
  })
  corfundo: string;

  @OneToMany(() => TgfageEntity, (tgfageEntity) => tgfageEntity.codtip)
  tgfages: TgfageEntity[];

  @OneToMany(() => TgfoeqEntity, (tgfoeqEntity) => tgfoeqEntity.codtip)
  tgfoeqs: TgfoeqEntity[];

  @OneToMany(() => TgfsolEntity, (tgfsolEntity) => tgfsolEntity.codtip)
  tgfsols: TgfsolEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgftips, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
