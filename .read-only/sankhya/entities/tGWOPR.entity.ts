import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwtprEntity } from './tGWTPR.entity';

@Index('PK_TGWOPR', ['codoperador'], { unique: true })
@Entity('TGWOPR', { schema: 'SANKHYA' })
export class TgwoprEntity {
  @Column('int', { primary: true, name: 'CODOPERADOR' })
  codoperador: number;

  @Column('char', { name: 'NOME', length: 50 })
  nome: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTINCLUSAO' })
  dtinclusao: Date;

  @ManyToOne(() => TgwtprEntity, (tgwtprEntity) => tgwtprEntity.tgwoprs)
  @JoinColumn([{ name: 'CODTOPER', referencedColumnName: 'codtoper' }])
  codtoper: TgwtprEntity;
}
