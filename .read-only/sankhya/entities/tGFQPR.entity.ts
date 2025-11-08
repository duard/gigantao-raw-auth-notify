import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFQPR', ['codusu', 'codemp'], { unique: true })
@Entity('TGFQPR', { schema: 'SANKHYA' })
export class TgfqprEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'QTDPARC' })
  qtdparc: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfqprs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfqprs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
