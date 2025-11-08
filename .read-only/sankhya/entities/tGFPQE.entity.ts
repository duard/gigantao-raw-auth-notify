import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfqueEntity } from './tGFQUE.entity';
import { TgfrqeEntity } from './tGFRQE.entity';

@Index('PK_TGFPQE', ['nuque', 'sequencia'], { unique: true })
@Entity('TGFPQE', { schema: 'SANKHYA' })
export class TgfpqeEntity {
  @Column('int', { primary: true, name: 'NUQUE' })
  nuque: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TEXTO', nullable: true, length: 512 })
  texto: string | null;

  @Column('char', {
    name: 'TIPO',
    nullable: true,
    length: 1,
    default: () => '(2)',
  })
  tipo: string | null;

  @Column('char', {
    name: 'OBRIGATORIA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  obrigatoria: string | null;

  @ManyToOne(() => TgfqueEntity, (tgfqueEntity) => tgfqueEntity.tgfpqes)
  @JoinColumn([{ name: 'NUQUE', referencedColumnName: 'nuque' }])
  nuque2: TgfqueEntity;

  @OneToMany(() => TgfrqeEntity, (tgfrqeEntity) => tgfrqeEntity.tgfpqe)
  tgfrqes: TgfrqeEntity[];
}
