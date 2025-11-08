import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprprcEntity } from './tPRPRC.entity';
import { TprfpaEntity } from './tPRFPA.entity';
import { TprfrmeEntity } from './tPRFRME.entity';

@Index('PK_TPRFORM', ['idform'], { unique: true })
@Entity('TPRFORM', { schema: 'SANKHYA' })
export class TprformEntity {
  @Column('int', { primary: true, name: 'IDFORM' })
  idform: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'NOMEINSTANCIAREF', length: 30 })
  nomeinstanciaref: string;

  @Column('char', { name: 'CARDINALIDADE', length: 1, default: () => "'1'" })
  cardinalidade: string;

  @Column('char', { name: 'ESCOPO', length: 1, default: () => "'A'" })
  escopo: string;

  @Column('char', { name: 'TIPOFORM', length: 1, default: () => "'A'" })
  tipoform: string;

  @Column('smallint', { name: 'ORDEMINICIA', default: () => '(0)' })
  ordeminicia: number;

  @Column('char', {
    name: 'OBRIGATORIOINICIA',
    length: 1,
    default: () => "'N'",
  })
  obrigatorioinicia: string;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprforms)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc: TprprcEntity;

  @OneToMany(() => TprfpaEntity, (tprfpaEntity) => tprfpaEntity.idform2)
  tprfpas: TprfpaEntity[];

  @OneToMany(() => TprfrmeEntity, (tprfrmeEntity) => tprfrmeEntity.idform2)
  tprfrmes: TprfrmeEntity[];
}
