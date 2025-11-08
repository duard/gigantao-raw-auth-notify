import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfrrcEntity } from './tGFRRC.entity';

@Index('PK_TGFARC', ['nuarc'], { unique: true })
@Entity('TGFARC', { schema: 'SANKHYA' })
export class TgfarcEntity {
  @Column('int', { primary: true, name: 'NUARC' })
  nuarc: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('date', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'TIPARQ', length: 1 })
  tiparq: string;

  @Column('varchar', { name: 'CARACTERESEP', nullable: true, length: 1 })
  caracteresep: string | null;

  @Column('varchar', { name: 'TIPOTERMREG', nullable: true, length: 1 })
  tipotermreg: string | null;

  @Column('varchar', { name: 'CHRTERMREG', nullable: true, length: 1 })
  chrtermreg: string | null;

  @Column('text', { name: 'QUERYEXPORTACAO', nullable: true })
  queryexportacao: string | null;

  @Column('text', { name: 'DATASOURCE', nullable: true })
  datasource: string | null;

  @Column('text', { name: 'SQLPARAMS', nullable: true })
  sqlparams: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfarcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfrrcEntity, (tgfrrcEntity) => tgfrrcEntity.nuarc2)
  tgfrrcs: TgfrrcEntity[];
}
