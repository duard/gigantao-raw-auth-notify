import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TpqplaEntity } from './tPQPLA.entity';
import { TpqenvEntity } from './tPQENV.entity';

@Index('PK_TPQDPL', ['nupla', 'nuinstancia', 'chave', 'chave2'], {
  unique: true,
})
@Entity('TPQDPL', { schema: 'SANKHYA' })
export class TpqdplEntity {
  @Column('int', { primary: true, name: 'NUPLA' })
  nupla: number;

  @Column('numeric', {
    primary: true,
    name: 'NUINSTANCIA',
    precision: 10,
    scale: 0,
  })
  nuinstancia: number;

  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('char', { name: 'EVENTO', nullable: true, length: 5 })
  evento: string | null;

  @Column('int', { primary: true, name: 'CHAVE2', default: () => '(0)' })
  chave2: number;

  @ManyToOne(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.tpqdpls)
  @JoinColumn([{ name: 'NUPLA', referencedColumnName: 'nupla' }])
  nupla2: TpqplaEntity;

  @OneToMany(() => TpqenvEntity, (tpqenvEntity) => tpqenvEntity.tpqdpl)
  tpqenvs: TpqenvEntity[];
}
