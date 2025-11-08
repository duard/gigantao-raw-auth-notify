import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprcwcEntity } from './tPRCWC.entity';
import { TprwcpEntity } from './tPRWCP.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TprwlopEntity } from './tPRWLOP.entity';

@Index('PK_TPRAWC', ['idproc', 'idawc'], { unique: true })
@Entity('TPRAWC', { schema: 'SANKHYA' })
export class TprawcEntity {
  @Column('int', { primary: true, name: 'IDPROC' })
  idproc: number;

  @Column('smallint', { primary: true, name: 'IDAWC' })
  idawc: number;

  @Column('char', { name: 'TIPALOCACAO', length: 1, default: () => "'A'" })
  tipalocacao: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @ManyToOne(() => TprcwcEntity, (tprcwcEntity) => tprcwcEntity.tprawcs)
  @JoinColumn([{ name: 'CODCWC', referencedColumnName: 'codcwc' }])
  codcwc: TprcwcEntity;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprawcs)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp: TprwcpEntity;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprawcs)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc2: TprprcEntity;

  @OneToMany(() => TprwlopEntity, (tprwlopEntity) => tprwlopEntity.tprawc)
  tprwlops: TprwlopEntity[];
}
