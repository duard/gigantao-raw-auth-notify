import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprchrEntity } from './tPRCHR.entity';
import { TprplpEntity } from './tPRPLP.entity';
import { TprcreEntity } from './tPRCRE.entity';

@Index('PK_TPRRHP', ['codrhp'], { unique: true })
@Entity('TPRRHP', { schema: 'SANKHYA' })
export class TprrhpEntity {
  @Column('int', { primary: true, name: 'CODRHP' })
  codrhp: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'DECQTD', default: () => '(2)' })
  decqtd: number;

  @OneToMany(() => TprchrEntity, (tprchrEntity) => tprchrEntity.codrhp2)
  tprchrs: TprchrEntity[];

  @ManyToOne(() => TprplpEntity, (tprplpEntity) => tprplpEntity.tprrhps)
  @JoinColumn([{ name: 'CODPLP', referencedColumnName: 'codplp' }])
  codplp: TprplpEntity;

  @ManyToOne(() => TprcreEntity, (tprcreEntity) => tprcreEntity.tprrhps)
  @JoinColumn([{ name: 'CODCRE', referencedColumnName: 'codcre' }])
  codcre: TprcreEntity;
}
