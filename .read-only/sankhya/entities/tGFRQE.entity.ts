import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfqalEntity } from './tGFQAL.entity';
import { TgfpqeEntity } from './tGFPQE.entity';

@Index('PK_TGFRQE', ['nurqe'], { unique: true })
@Entity('TGFRQE', { schema: 'SANKHYA' })
export class TgfrqeEntity {
  @Column('int', { primary: true, name: 'NURQE' })
  nurqe: number;

  @Column('char', {
    name: 'BOOLEANO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  booleano: string | null;

  @Column('float', {
    name: 'VLRDECIMAL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdecimal: number | null;

  @Column('int', { name: 'INTEIRO', nullable: true, default: () => '(0)' })
  inteiro: number | null;

  @Column('varchar', { name: 'TEXTOSIMPLES', nullable: true, length: 200 })
  textosimples: string | null;

  @OneToMany(() => TgfqalEntity, (tgfqalEntity) => tgfqalEntity.nurqe2)
  tgfqals: TgfqalEntity[];

  @ManyToOne(() => TgfpqeEntity, (tgfpqeEntity) => tgfpqeEntity.tgfrqes)
  @JoinColumn([
    { name: 'NUQUE', referencedColumnName: 'nuque' },
    { name: 'SEQPERGUNTA', referencedColumnName: 'sequencia' },
  ])
  tgfpqe: TgfpqeEntity;
}
