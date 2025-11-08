import { Column, Entity, Index, ManyToMany, OneToMany } from 'typeorm';
import { TcsiteEntity } from './tCSITE.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSITS', ['codsit'], { unique: true })
@Entity('TCSITS', { schema: 'SANKHYA' })
export class TcsitsEntity {
  @Column('int', { primary: true, name: 'CODSIT' })
  codsit: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.codsit)
  tcsites: TcsiteEntity[];

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsits)
  tgfpros: TgfproEntity[];
}
