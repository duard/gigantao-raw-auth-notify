import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfpraEntity } from './tGFPRA.entity';

@Index('PK_TGFAUT', ['codautor'], { unique: true })
@Entity('TGFAUT', { schema: 'SANKHYA' })
export class TgfautEntity {
  @Column('int', { primary: true, name: 'CODAUTOR' })
  codautor: number;

  @Column('char', { name: 'NOMEAUTOR', length: 60 })
  nomeautor: string;

  @Column('char', { name: 'APELIDO', nullable: true, length: 60 })
  apelido: string | null;

  @Column('int', { name: 'CODTIPAUTORPAI' })
  codtipautorpai: number;

  @OneToMany(() => TgfpraEntity, (tgfpraEntity) => tgfpraEntity.codautor2)
  tgfpras: TgfpraEntity[];
}
