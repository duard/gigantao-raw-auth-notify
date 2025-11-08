import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwoprEntity } from './tGWOPR.entity';

@Index('PK_TGWTPR', ['codtoper'], { unique: true })
@Entity('TGWTPR', { schema: 'SANKHYA' })
export class TgwtprEntity {
  @Column('int', { primary: true, name: 'CODTOPER' })
  codtoper: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TgwoprEntity, (tgwoprEntity) => tgwoprEntity.codtoper)
  tgwoprs: TgwoprEntity[];
}
