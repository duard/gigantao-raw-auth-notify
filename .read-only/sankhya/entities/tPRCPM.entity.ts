import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TprcpmpEntity } from './tPRCPMP.entity';
import { TprirpaEntity } from './tPRIRPA.entity';

@Index('PK_TPRCPM', ['codcpm'], { unique: true })
@Entity('TPRCPM', { schema: 'SANKHYA' })
export class TprcpmEntity {
  @Column('int', { primary: true, name: 'CODCPM' })
  codcpm: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('int', { name: 'CODCPMPAI' })
  codcpmpai: number;

  @Column('smallint', { name: 'QTDCOMP', default: () => '(1)' })
  qtdcomp: number;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TprcpmpEntity, (tprcpmpEntity) => tprcpmpEntity.codcpm2)
  tprcpmps: TprcpmpEntity[];

  @OneToMany(() => TprirpaEntity, (tprirpaEntity) => tprirpaEntity.codcpm)
  tprirpas: TprirpaEntity[];
}
