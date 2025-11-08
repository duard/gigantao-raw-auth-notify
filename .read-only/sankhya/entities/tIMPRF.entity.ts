import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TimpprEntity } from './tIMPPR.entity';

@Index('PK_TIMPRF', ['prfcodigo'], { unique: true })
@Entity('TIMPRF', { schema: 'SANKHYA' })
export class TimprfEntity {
  @Column('int', { primary: true, name: 'PRFCODIGO' })
  prfcodigo: number;

  @Column('smallint', { name: 'PRFTIPO', nullable: true })
  prftipo: number | null;

  @Column('varchar', { name: 'PRFPROFISSAO', nullable: true, length: 50 })
  prfprofissao: string | null;

  @Column('char', { name: 'PRFLEGADO', nullable: true, length: 1 })
  prflegado: string | null;

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.timprofissao)
  tgfctts: TgfcttEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timprofissao)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TimpprEntity, (timpprEntity) => timpprEntity.pprprofconjuge)
  timpprs: TimpprEntity[];

  @OneToMany(() => TimpprEntity, (timpprEntity) => timpprEntity.pprprofissao)
  timpprs2: TimpprEntity[];

  @ManyToOne(() => TimprfEntity, (timprfEntity) => timprfEntity.timprfs)
  @JoinColumn([{ name: 'PRFAGRUPADOR', referencedColumnName: 'prfcodigo' }])
  prfagrupador: TimprfEntity;

  @OneToMany(() => TimprfEntity, (timprfEntity) => timprfEntity.prfagrupador)
  timprfs: TimprfEntity[];
}
