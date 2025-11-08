import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TpqqueEntity } from './tPQQUE.entity';

@Index('PK_TPQGRQ', ['codgrupoquest'], { unique: true })
@Entity('TPQGRQ', { schema: 'SANKHYA' })
export class TpqgrqEntity {
  @Column('int', { primary: true, name: 'CODGRUPOQUEST' })
  codgrupoquest: number;

  @Column('varchar', { name: 'DESCRGRUPOQUEST', length: 60 })
  descrgrupoquest: string;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODGRUPOQUESTPAI', nullable: true })
  codgrupoquestpai: number | null;

  @Column('int', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('varchar', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @Column('varchar', {
    name: 'ANALITICO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  analitico: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqgrqs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.codgrupoquest)
  tpqques: TpqqueEntity[];
}
