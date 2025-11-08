import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprplpEntity } from './tPRPLP.entity';
import { TprcreEntity } from './tPRCRE.entity';

@Index('PK_TPREQP', ['nueqp'], { unique: true })
@Entity('TPREQP', { schema: 'SANKHYA' })
export class TpreqpEntity {
  @Column('int', { primary: true, name: 'NUEQP' })
  nueqp: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'DECQTD', default: () => '(2)' })
  decqtd: number;

  @ManyToOne(() => TprplpEntity, (tprplpEntity) => tprplpEntity.tpreqps)
  @JoinColumn([{ name: 'CODPLP', referencedColumnName: 'codplp' }])
  codplp: TprplpEntity;

  @ManyToOne(() => TprcreEntity, (tprcreEntity) => tprcreEntity.tpreqps)
  @JoinColumn([{ name: 'CODCRE', referencedColumnName: 'codcre' }])
  codcre: TprcreEntity;
}
