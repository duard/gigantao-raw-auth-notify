import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprplpEntity } from './tPRPLP.entity';
import { TprcreEntity } from './tPRCRE.entity';
import { TprwcpEntity } from './tPRWCP.entity';

@Index('PK_TPRMQP', ['codmqp'], { unique: true })
@Entity('TPRMQP', { schema: 'SANKHYA' })
export class TprmqpEntity {
  @Column('int', { primary: true, name: 'CODMQP' })
  codmqp: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('int', { name: 'NUMEQ' })
  numeq: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'DECQTD', default: () => '(2)' })
  decqtd: number;

  @ManyToOne(() => TprplpEntity, (tprplpEntity) => tprplpEntity.tprmqps)
  @JoinColumn([{ name: 'CODPLP', referencedColumnName: 'codplp' }])
  codplp: TprplpEntity;

  @ManyToOne(() => TprcreEntity, (tprcreEntity) => tprcreEntity.tprmqps)
  @JoinColumn([{ name: 'CODCRE', referencedColumnName: 'codcre' }])
  codcre: TprcreEntity;

  @OneToMany(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.numqp)
  tprwcps: TprwcpEntity[];
}
