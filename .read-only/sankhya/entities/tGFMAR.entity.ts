import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFMAR', ['codigo'], { unique: true })
@Entity('TGFMAR', { schema: 'SANKHYA' })
export class TgfmarEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 10 })
  descricao: string | null;

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codmarca)
  tgfpros: TgfproEntity[];
}
