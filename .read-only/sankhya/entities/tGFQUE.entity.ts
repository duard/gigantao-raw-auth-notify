import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfpqeEntity } from './tGFPQE.entity';

@Index('PK_TGFQUE', ['nuque'], { unique: true })
@Entity('TGFQUE', { schema: 'SANKHYA' })
export class TgfqueEntity {
  @Column('int', { primary: true, name: 'NUQUE' })
  nuque: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @OneToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.nuque)
  tcsprjs: TcsprjEntity[];

  @OneToMany(() => TgfpqeEntity, (tgfpqeEntity) => tgfpqeEntity.nuque2)
  tgfpqes: TgfpqeEntity[];
}
