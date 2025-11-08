import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwrprEntity } from './tGWRPR.entity';

@Index('PK_TGWMPR', ['codmotpar'], { unique: true })
@Entity('TGWMPR', { schema: 'SANKHYA' })
export class TgwmprEntity {
  @Column('int', { primary: true, name: 'CODMOTPAR' })
  codmotpar: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TgwrprEntity, (tgwrprEntity) => tgwrprEntity.codmotpar2)
  tgwrprs: TgwrprEntity[];
}
