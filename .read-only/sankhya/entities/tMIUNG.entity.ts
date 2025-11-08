import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TmimetEntity } from './tMIMET.entity';
import { TmiplaEntity } from './tMIPLA.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TmingeEntity } from './tMINGE.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TMIUNG', ['codung'], { unique: true })
@Entity('TMIUNG', { schema: 'SANKHYA' })
export class TmiungEntity {
  @Column('int', { primary: true, name: 'CODUNG' })
  codung: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('int', { name: 'CODUNGPAI' })
  codungpai: number;

  @Column('varchar', { name: 'UNIDADE', length: 200, default: () => "'0'" })
  unidade: string;

  @OneToMany(() => TmimetEntity, (tmimetEntity) => tmimetEntity.codung)
  tmimets: TmimetEntity[];

  @OneToMany(() => TmiplaEntity, (tmiplaEntity) => tmiplaEntity.codung)
  tmiplas: TmiplaEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmiungs)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codusu' }])
  codusuresp: TsiusuEntity;

  @ManyToOne(() => TmingeEntity, (tmingeEntity) => tmingeEntity.tmiungs)
  @JoinColumn([{ name: 'CODNGE', referencedColumnName: 'codnge' }])
  codnge: TmingeEntity;

  @ManyToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmiungs2)
  tsiusus: TsiusuEntity[];

  @OneToMany(() => TsicusEntity, (tsicusEntity) => tsicusEntity.codung)
  tsicuses: TsicusEntity[];
}
